import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the service-role key.
 * Never import this in client components — the service-role key bypasses RLS.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required."
    );
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export interface Enrollment {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  age?: string;
  branch: string;
  level: string;
  notes?: string;
}

interface EnrollmentRow {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  age: string | null;
  branch: string;
  level: string;
  notes: string | null;
}

export function mapRow(row: EnrollmentRow): Enrollment {
  return {
    id: row.id,
    createdAt: row.created_at,
    name: row.name,
    phone: row.phone,
    age: row.age ?? undefined,
    branch: row.branch,
    level: row.level,
    notes: row.notes ?? undefined,
  };
}
