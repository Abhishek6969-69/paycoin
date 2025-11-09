#!/usr/bin/env node
// scripts/validate-env.js
// Validate required environment variables for production builds/CI
const required = [
  'WEBHOOK_URL',
  'DATABASE_URL',
  'WEBHOOK_SECRET',
  'CLIENT_RETURN_URL'
];

const missing = required.filter((k) => !process.env[k]);

const isProdLike = (process.env.CI === 'true') || (process.env.NODE_ENV === 'production');
// Allow skipping env validation explicitly (useful for local CI or staged builds)
const skipValidation = process.env.SKIP_ENV_VALIDATION === 'true' || process.env.SKIP_ENV_VALIDATION === '1';

if (missing.length > 0) {
  if (isProdLike && !skipValidation) {
    console.error('\n❌ Missing required environment variables for production build:');
    missing.forEach((m) => console.error(' -', m));
    console.error('\nSet these in your deployment environment (Vercel/GitHub Actions) and re-run the build.');
    process.exit(1);
  } else if (skipValidation) {
    console.warn('\n⚠️  SKIP_ENV_VALIDATION is set — skipping environment validation. Missing:');
    missing.forEach((m) => console.warn(' -', m));
  } else {
    console.warn('\n⚠️  Missing environment variables (only required in production):');
    missing.forEach((m) => console.warn(' -', m));
    console.warn('Continuing because NODE_ENV is not production and CI is not set.');
  }
} else {
  console.log('✅ All required environment variables are present.');
}
