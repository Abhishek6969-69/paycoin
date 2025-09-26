import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import crypto from "crypto";

const WEBHOOK_URL = process.env.WEBHOOK_URL || "http://localhost:3003";
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || "dev_secret";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { token, amount, user_identifier } = body;

    console.log("Confirm payment request received:", { token, amount, user_identifier });

    if (!token || !amount || !user_identifier) {
      console.error("Missing required fields:", { token, amount, user_identifier });
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Prepare webhook payload
    const payload = { token, amount, user_identifier };
    const payloadStr = JSON.stringify(payload);
    const signature = crypto.createHmac("sha256", WEBHOOK_SECRET).update(payloadStr).digest("hex");

    console.log("Calling webhook:", WEBHOOK_URL + "/hdfcWebhook");

    // Call the webhook to process the payment
    const webhookResp = await fetch(`${WEBHOOK_URL}/hdfcWebhook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hdfc-signature": signature,
      },
      body: payloadStr,
    });

    if (!webhookResp.ok) {
      const errorText = await webhookResp.text();
      console.error("Webhook call failed:", {
        status: webhookResp.status,
        statusText: webhookResp.statusText,
        error: errorText
      });
      
      return NextResponse.json(
        { success: false, error: "Payment processing failed" },
        { status: 500 }
      );
    }

    const webhookResult = await webhookResp.json();
    console.log("Webhook call successful:", webhookResult);

    return NextResponse.json({ 
      success: true, 
      message: "Payment confirmed successfully",
      data: webhookResult
    });

  } catch (error) {
    console.error("Confirm payment error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}