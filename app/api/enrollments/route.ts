import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createAdminClient, mapRow } from "../../../utils/supabase/admin";
import { verifySessionToken, COOKIE_NAME } from "../../../utils/session";
import { sendEnrollmentNotification } from "../../../utils/email";

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return token ? verifySessionToken(token) : false;
}

// GET — admin only. Returns all enrollments.
export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("enrollments")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase GET error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  return NextResponse.json(data.map(mapRow));
}

// POST — public. Creates a new enrollment from the website form.
export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").toString().trim();
  const phone = (body.phone ?? "").toString().trim();
  const branch = (body.branch ?? "").toString().trim();
  const level = (body.level ?? "").toString().trim();
  const age = body.age ? body.age.toString().trim() : null;
  const notes = body.notes ? body.notes.toString().trim() : null;

  if (!name || !phone || !branch || !level) {
    return NextResponse.json(
      { error: "Шаардлагатай талбарууд дутуу байна." },
      { status: 400 }
    );
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("enrollments")
    .insert({ name, phone, age, branch, level, notes })
    .select("*")
    .single();

  if (error) {
    console.error("Supabase POST error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  // Best-effort email; never blocks the response.
  await sendEnrollmentNotification(mapRow(data));

  return NextResponse.json({ success: true, id: data.id }, { status: 201 });
}
