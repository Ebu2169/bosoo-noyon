import { createAdminClient, mapRow, type Enrollment } from "../../utils/supabase/admin";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";

async function getEnrollments(): Promise<Enrollment[]> {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("enrollments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase admin fetch error:", error);
      return [];
    }
    return data.map(mapRow);
  } catch (err) {
    console.error("Failed to load enrollments:", err);
    return [];
  }
}

export default async function AdminPage() {
  const enrollments = await getEnrollments();
  return (
    <AdminDashboard
      initialEnrollments={enrollments}
      userEmail={process.env.ADMIN_EMAIL ?? "admin"}
    />
  );
}
