-- ═══════════════════════════════════════════════════════════════════
-- БОСОО НОЁН — enrollments table
-- Run this once in your Supabase project:
--   Dashboard → SQL Editor → New query → paste → Run
-- ═══════════════════════════════════════════════════════════════════

create table if not exists public.enrollments (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  phone       text not null,
  age         text,
  branch      text not null,
  level       text not null,
  notes       text
);

-- Lock the table down: RLS on, no public policies.
-- Only the service-role key (used server-side by the app) can read/write.
alter table public.enrollments enable row level security;

-- Helpful index for the admin dashboard's newest-first ordering.
create index if not exists enrollments_created_at_idx
  on public.enrollments (created_at desc);
