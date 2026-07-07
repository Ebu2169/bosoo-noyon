import { Resend } from "resend";
import type { Enrollment } from "./supabase/admin";

/**
 * Best-effort admin notification email via Resend.
 * Returns silently on any failure so it never blocks an enrollment.
 */
export async function sendEnrollmentNotification(enrollment: Enrollment): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ADMIN_NOTIFY_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL || "БОСОО НОЁН <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.warn("Email notification skipped: RESEND_API_KEY or ADMIN_NOTIFY_EMAIL not set.");
    return;
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      subject: `Шинэ бүртгэл: ${enrollment.name} (${enrollment.branch})`,
      html: buildHtml(enrollment),
    });
  } catch (err) {
    console.error("Failed to send enrollment notification email:", err);
  }
}

function esc(v: string | undefined): string {
  if (!v) return "—";
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildHtml(e: Enrollment): string {
  const date = new Date(e.createdAt).toLocaleString("mn-MN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 16px;color:#94a3b8;font-size:13px;border-bottom:1px solid #1e293b;">${label}</td>
      <td style="padding:10px 16px;color:#f8fafc;font-size:14px;font-weight:600;border-bottom:1px solid #1e293b;">${value}</td>
    </tr>`;

  return `
  <div style="background:#080e22;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:520px;margin:0 auto;background:#0d1630;border:1px solid rgba(212,175,55,0.2);border-radius:16px;overflow:hidden;">
      <div style="background:#0a1128;padding:24px;border-bottom:1px solid rgba(212,175,55,0.2);">
        <h1 style="margin:0;color:#d4af37;font-size:18px;">БОСОО НОЁН</h1>
        <p style="margin:4px 0 0;color:#94a3b8;font-size:13px;">Шинэ хичээлийн бүртгэл ирлээ</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Нэр", esc(e.name))}
        ${row("Утас", esc(e.phone))}
        ${row("Нас", esc(e.age))}
        ${row("Салбар", esc(e.branch))}
        ${row("Түвшин", esc(e.level))}
        ${row("Нэмэлт", esc(e.notes))}
        ${row("Огноо", esc(date))}
      </table>
      <div style="padding:20px 24px;background:#0a1128;border-top:1px solid rgba(212,175,55,0.15);">
        <p style="margin:0;color:#64748b;font-size:12px;">Энэ мэдэгдэл автоматаар илгээгдсэн болно.</p>
      </div>
    </div>
  </div>`;
}
