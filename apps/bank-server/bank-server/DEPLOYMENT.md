# Deployment notes — bank-server

This file documents the environment variables and deployment tips required to successfully build and deploy the `bank-server` app (Next.js) on Vercel or similar CI/CD platforms.

## Required environment variables

Set these variables in your deployment provider (Vercel: Project → Settings → Environment Variables). Prefer the appropriate scope (Production/Preview/Development) — recommended: set for Production and Preview (or `All Environments` during early testing).

- `WEBHOOK_URL` — URL of the webhook service (e.g. your `bank-webhook` deployment). Example: `https://coinpay-webhook-hash.vercel.app`
- `DATABASE_URL` — database connection string used by Prisma (if applicable). Example: `postgresql://user:pass@host:5432/dbname` (DO NOT commit to repo)
- `WEBHOOK_SECRET` — shared secret used to sign/verify webhook payloads. Keep this secret in the deployment UI.
- `CLIENT_RETURN_URL` — client redirect/return URL for transactions. Example: `https://your-app.vercel.app/transactions`

## Optional control variables (build-time behavior)

- `SKIP_ENV_VALIDATION` — set to `true` to skip the prebuild environment validation. Useful for temporary bypasses during debugging. (Default: not set)
- `FAIL_ON_MISSING_ENV` — set to `true` to force the prebuild script to exit with an error if any required env var is missing. This is an opt-in for stricter CI behavior. (Default: not set)

Notes:
- The repository includes a small script `scripts/validate-env.js` that verifies the presence of required env vars before `next build` (it runs in the `prebuild` lifecycle). The script prints diagnostics to the build log showing `CI`, `NODE_ENV`, `SKIP_ENV_VALIDATION`, and `FAIL_ON_MISSING_ENV` values and lists any missing keys.
- By default the script warns for missing values in non-production builds. If you want builds to fail in production when env vars are missing, set `FAIL_ON_MISSING_ENV=true` in the project build environment.

## Vercel-specific guidance

1. In the Vercel Dashboard, open the `bank-server` project.
2. Go to Settings → Environment Variables.
3. Add the variables above. Recommended scopes:
   - `Production`: set required values used in production builds.
   - `Preview`: set values for preview builds (if your preview build needs the same integration endpoints).
   - `Development`: optional for local/preview testing.
   - `All Environments`: okay for quick testing, but consider scoping secrets carefully for production.
4. For secrets like `DATABASE_URL` and `WEBHOOK_SECRET`, use the Vercel secret masking (do not commit these values into your repository).

Important: Vercel exposes environment variables at build time for the selected scopes. If a variable appears missing in the build log, re-check the scope (Production vs Preview) and that the value is not empty.

## Example: quick local test to simulate production build

To simulate how Vercel will run the build and see the validator output locally, run:

```bash
CI=true NODE_ENV=production node scripts/validate-env.js
```

Or run the full build simulation (from `apps/bank-server/bank-server`):

```bash
CI=true NODE_ENV=production npm run build
```

This will show the diagnostics printed by the validation script (which will indicate which variables were missing and what CI/NODE_ENV were during the run).

## Note about repository layout and the wrapper

This monorepo contains a wrapper at `apps/bank-server/package.json`. To make builds robust when Vercel's working directory differs, the repo includes `apps/bank-server/run-build.js` which detects and runs the inner app's build. When deploying on Vercel, ensure you invoke `npm run build` at the repo's `apps/bank-server` level (Vercel typically does that by default for that project). The wrapper will route the build to the correct inner folder.

## Troubleshooting

- If builds still fail and the validator lists missing keys, double-check the Vercel environment variable scopes and that there are no trailing spaces or empty values.
- If you want the validator to block builds only when you explicitly choose, set `FAIL_ON_MISSING_ENV=true`.
- If you need to bypass quickly while debugging, set `SKIP_ENV_VALIDATION=true` in the Build Environment.

## Security

- Never commit secrets to the repo. Use Vercel's secret storage or a dedicated secret manager.
- Limit exposure of secrets to the minimum required scopes and rotate them as needed.

---
Generated to aid deployments for `bank-server` — update as your production topology or secrets management changes.
