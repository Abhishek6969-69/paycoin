// apps/bank-server/app/api/decline/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CLIENT_RETURN_URL = process.env.CLIENT_RETURN_URL || "http://localhost:3000/transactions";

// Helper function to safely create redirect URLs
function createRedirectUrl(status: string, token: string): URL {
  const baseUrl = CLIENT_RETURN_URL || "http://localhost:3000/transactions";
  console.log("🔍 Creating decline redirect URL with baseUrl:", baseUrl);
  
  if (!baseUrl || baseUrl === "null" || baseUrl === "undefined") {
    console.error("❌ Invalid CLIENT_RETURN_URL:", baseUrl);
    throw new Error("CLIENT_RETURN_URL is not properly configured");
  }
  
  const url = new URL(baseUrl);
  url.searchParams.set("status", status);
  url.searchParams.set("token", token || "unknown");
  
  console.log("✅ Created decline redirect URL:", url.toString());
  return url;
}

export async function POST(req: NextRequest) {
  let token = "";
  console.log("🔍 Bank server decline route - CLIENT_RETURN_URL:", CLIENT_RETURN_URL);
  
  try {
    const form = await req.formData();
    token = String(form.get("token") ?? "");
    const url = createRedirectUrl("declined", token);
    return NextResponse.redirect(url, { status: 302 });
  } catch (err) {
    console.error("decline handler error:", err);
    try {
      const url = createRedirectUrl("declined", token);
      return NextResponse.redirect(url, { status: 302 });
    } catch (urlError) {
      console.error("❌ Critical error: Cannot create decline redirect URL:", urlError);
      // Fallback to a simple response if URL creation fails
      return new Response("Payment declined. Please return to the main application.", {
        status: 500,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  }
}
