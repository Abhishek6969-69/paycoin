#!/bin/bash

# Test webhook connectivity and signature validation
echo "🧪 Testing CoinPay Webhook Service"
echo "=================================="

WEBHOOK_URL="https://paycoin.onrender.com"
WEBHOOK_SECRET="super_secret_shared_with_webhook"

# Test payload
TOKEN="test_$(date +%s)"
USER_ID="1"
AMOUNT="1000"

PAYLOAD="{\"token\":\"$TOKEN\",\"user_identifier\":\"$USER_ID\",\"amount\":$AMOUNT}"
echo "📦 Payload: $PAYLOAD"

# Generate correct signature
SIGNATURE=$(echo -n "$PAYLOAD" | openssl dgst -sha256 -hmac "$WEBHOOK_SECRET" -binary | xxd -p -c 256)
echo "🔐 Generated Signature: $SIGNATURE"

# Test webhook call
echo "📡 Calling webhook..."
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$WEBHOOK_URL/hdfcWebhook" \
  -H "Content-Type: application/json" \
  -H "x-hdfc-signature: $SIGNATURE" \
  -d "$PAYLOAD")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n -1)

echo "📨 Response Code: $HTTP_CODE"
echo "📄 Response Body: $BODY"

if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Webhook is working correctly!"
elif [ "$HTTP_CODE" = "401" ]; then
    echo "❌ Signature validation failed"
elif [ "$HTTP_CODE" = "400" ]; then
    echo "❌ Invalid payload format"
else
    echo "❌ Webhook failed with code: $HTTP_CODE"
fi