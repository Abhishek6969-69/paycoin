# CoinPay Bank Server

A Next.js application simulating HDFC Bank for payment processing in the CoinPay ecosystem.

## Deployment on Vercel

### Prerequisites
1. [Vercel CLI](https://vercel.com/cli) installed: `npm install -g vercel`
2. Vercel account

### Environment Variables
Set these environment variables in Vercel:

```bash
WEBHOOK_URL=https://your-webhook-service-url.vercel.app
WEBHOOK_SECRET=your_secure_webhook_secret
CLIENT_RETURN_URL=https://your-main-app-url.vercel.app/transactions
```

### Deployment Steps

#### Option 1: Deploy via Vercel CLI
```bash
# Navigate to the bank server directory
cd apps/bank-server/bank-server

# Login to Vercel (if not already logged in)
vercel login

# Deploy to production
vercel --prod
```

#### Option 2: Deploy via Git Integration
1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your repository
5. Set the root directory to: `apps/bank-server/bank-server`
6. Add environment variables in Project Settings

### Environment Variables Setup
In your Vercel project settings, add:

- `WEBHOOK_URL`: Your webhook service URL (e.g., `https://coinpay-webhook.vercel.app`)
- `WEBHOOK_SECRET`: Shared secret for webhook authentication
- `CLIENT_RETURN_URL`: Your main app's transactions page URL (e.g., `https://coinpay-app.vercel.app/transactions`)

### Post-Deployment
After deployment, update your main app's environment variables to point to the new bank server URL:

```bash
# In your main app's .env
NEXT_PUBLIC_BANK_SERVER_URL=https://your-bank-server.vercel.app
```

## Local Development
```bash
npm run dev
```

Runs on http://localhost:3004

## API Endpoints
- `POST /api/approve` - Approve payment and redirect
- `POST /api/decline` - Decline payment and redirect
- `GET /` - Bank simulation interface
