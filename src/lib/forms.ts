import { CONFIG } from "@/config/site";

export const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const phoneOk = (v: string) => v.replace(/\D/g, "").length >= 10;

/** Posts to the configured form endpoint. Returns true when there is no endpoint. */
export async function sendForm(data: Record<string, string>): Promise<boolean> {
  if (!CONFIG.formEndpoint) return true;
  try {
    const res = await fetch(CONFIG.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch {
    return false;
  }
}
