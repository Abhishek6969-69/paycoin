#!/bin/bash

# CoinPay Bank Server - Vercel Deployment Script

echo "🏦 CoinPay Bank Server - Vercel Deployment"
echo "========================================"

# Check if we're in the right directory
if [[ ! -f "package.json" ]] || [[ ! -d "app" ]]; then
    echo "❌ Error: Please run this script from the bank-server directory"
    echo "   Expected location: apps/bank-server/bank-server/"
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed"
    echo "   Install it with: npm install -g vercel"
    exit 1
fi

echo "✅ Environment check passed"

# Build the project first
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
echo ""
echo "⚠️  IMPORTANT: Make sure to set these environment variables in Vercel:"
echo "   - WEBHOOK_URL: Your webhook service URL"
echo "   - WEBHOOK_SECRET: Shared secret for webhook authentication"
echo "   - CLIENT_RETURN_URL: Your main app's transactions page URL"
echo ""

# Deploy
vercel --prod

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment successful!"
    echo "📝 Next steps:"
    echo "   1. Update your main app's NEXT_PUBLIC_BANK_SERVER_URL"
    echo "   2. Test the payment flow end-to-end"
    echo "   3. Update webhook service to point to new bank server URL"
else
    echo "❌ Deployment failed. Please check the errors above."
fi