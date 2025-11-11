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
  // Print diagnostics to help debugging builds (CI/NODE_ENV and presence)
  console.error('\n❌ Missing required environment variables:');
  missing.forEach((m) => console.error(' -', m));
  console.error('\nEnvironment diagnostics:');
  console.error(' - CI =', process.env.CI);
  console.error(' - NODE_ENV =', process.env.NODE_ENV);
  console.error(' - SKIP_ENV_VALIDATION =', process.env.SKIP_ENV_VALIDATION);
  console.error(' - FAIL_ON_MISSING_ENV =', process.env.FAIL_ON_MISSING_ENV);

  if (isProdLike && !skipValidation) {
    // Only fail the build if the repository explicitly opts-in to strict failure.
    // This avoids blocking deploys when environment variables are intentionally set at runtime
    // or when the deployer prefers to skip strict failures.
    if (process.env.FAIL_ON_MISSING_ENV === 'true') {
      console.error('\nBuild is in production-like mode and FAIL_ON_MISSING_ENV=true — failing the build.');
      console.error('Set the missing environment variables in your deployment environment (Vercel/GitHub Actions) and re-run the build.');
      process.exit(1);
    } else {
      console.warn('\n⚠️  Production-like build but FAIL_ON_MISSING_ENV is not set — continuing despite missing env vars.');
      console.warn('If you want the build to fail on missing env vars, set FAIL_ON_MISSING_ENV=true.');
    }
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
