// apps/bank-server/app/api/approve/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import crypto from "crypto";

const WEBHOOK_URL = process.env.WEBHOOK_URL || "http://localhost:3003";
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || "dev_secret";
const CLIENT_RETURN_URL = process.env.CLIENT_RETURN_URL || "http://localhost:3000/transactions";

// Helper function to safely create redirect URLs
function createRedirectUrl(status: string, token: string, error?: string): URL {
  const baseUrl = CLIENT_RETURN_URL || "http://localhost:3000/transactions";
  
  if (!baseUrl || baseUrl === "null" || baseUrl === "undefined") {
    console.error("❌ Invalid CLIENT_RETURN_URL:", baseUrl);
    throw new Error("CLIENT_RETURN_URL is not properly configured");
  }

  const url = new URL(baseUrl) ;
  url.searchParams.set("status", status);
  url.searchParams.set("token", token || "unknown");
  if (error) {
    url.searchParams.set("error", error);
  }
  
  return url;
}

export async function POST(req: NextRequest) {
  let token = "";
  
  try {
    const form = await req.formData();
    token = String(form.get("token") ?? "");
    const amount = Number(form.get("amount") ?? 0); // paise
    const user_identifier = String(form.get("user_identifier") ?? "");

    if (!token || !amount || !user_identifier) {
      console.error("Missing required fields:", { token, amount, user_identifier });
      const url = createRedirectUrl("failed", token, "missing_fields");
      return NextResponse.redirect(url, { status: 302 });
    }

    const payload = { token, amount, user_identifier };
    const payloadStr = JSON.stringify(payload);
    const signature = crypto.createHmac("sha256", WEBHOOK_SECRET).update(payloadStr).digest("hex");

  // call webhook
    const webhookResp = await fetch(`${WEBHOOK_URL}/hdfcWebhook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hdfc-signature": signature,
      },
      body: payloadStr,
      // keep a short timeout by using AbortController if desired (omitted for clarity)
    });

    if (!webhookResp.ok) {
      console.error("Webhook call failed:", {
        status: webhookResp.status,
        statusText: webhookResp.statusText,
        url: `${WEBHOOK_URL}/hdfcWebhook`
      });
      const url = createRedirectUrl("failed", token, "webhook_failed");
      return NextResponse.redirect(url, { status: 302 });
    }

    // success
  const url = createRedirectUrl("success", token);
  return NextResponse.redirect(url, { status: 302 });
  } catch (err) {
    console.error("approve handler error:", err);
    try {
      const url = createRedirectUrl("failed", token, "server_error");
      return NextResponse.redirect(url, { status: 302 });
    } catch (urlError) {
      console.error("❌ Critical error: Cannot create redirect URL:", urlError);
      // Fallback to a simple response if URL creation fails
      return new Response("Payment processing error. Please return to the main application.", {
        status: 500,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  }
}
