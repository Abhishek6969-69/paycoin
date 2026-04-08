# Vercel Deployment Matrix (CoinPay Monorepo)

Use this matrix to deploy each app as an independent Vercel project and avoid monorepo root build failures.

## 1) `user-app` project

- Vercel Project Name: `coinpay-user-app` (suggested)
- Root Directory: `apps/user-app`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output: Next.js default

### Environment Variables

- `DATABASE_URL` = `<your_postgres_url>`
- `DATABASE_URL_UNPOOLED` = `<your_postgres_direct_url>`
- `NEXTAUTH_URL` = `https://<user-app-domain>`
- `NEXTAUTH_SECRET` = `<strong_random_secret>`
- `JWT_SECRET` = `<strong_random_secret>`
- `NEXT_PUBLIC_BANKSERVER_URL` = `https://<bank-server-domain>`
- `NEXT_PUBLIC_WEBHOOK_URL` = `https://<bank-webhook-domain>`
- `NEXT_PUBLIC_API_URL` = `https://<user-app-domain>`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` = `<cloudinary_cloud_name>`
- `CLOUDINARY_API_KEY` = `<cloudinary_api_key>`
- `CLOUDINARY_API_SECRET` = `<cloudinary_api_secret>`

## 2) `bank-server` project

- Vercel Project Name: `coinpay-bank-server` (suggested)
- Root Directory: `apps/bank-server`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output: Next.js standalone (already configured)

### Environment Variables

- `WEBHOOK_URL` = `https://<bank-webhook-domain>`
- `DATABASE_URL` = `<your_postgres_url>`
- `WEBHOOK_SECRET` = `<shared_secret_with_webhook>`
- `CLIENT_RETURN_URL` = `https://<user-app-domain>/transactions`

### Optional Debug Variables

- `SKIP_ENV_VALIDATION` = `true` (only for temporary bypass)
- `FAIL_ON_MISSING_ENV` = `true` (strict CI behavior)

## 3) `bank-webhook` project

- Vercel Project Name: `coinpay-bank-webhook` (suggested)
- Root Directory: `apps/bank-webhook`
- Install Command: `npm install`
- Build Command: `npm run build`
- Start Command: `npm run start` (if required by your Vercel setup)

### Environment Variables

- `DATABASE_URL` = `<your_postgres_url>`
- `DATABASE_URL_UNPOOLED` = `<your_postgres_direct_url>`
- `WEBHOOK_SECRET` = `<shared_secret_with_bank_server>`

## Critical Notes

- Do not deploy from monorepo root using `turbo build` unless every app has complete env setup.
- Add env vars in both `Production` and `Preview` scopes in Vercel.
- After adding/changing env vars, trigger a fresh redeploy.
- Keep `WEBHOOK_SECRET` identical in both `bank-server` and `bank-webhook`.

## Quick Validation Checklist

1. `user-app` can open `/transactions` and `/profile`.
2. `bank-server` `/start-payment` loads successfully.
3. Approve/decline from bank simulator redirects back to `user-app`.
4. Webhook updates transaction status correctly.
