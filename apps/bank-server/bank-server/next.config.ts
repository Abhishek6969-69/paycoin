import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Optimize for Vercel deployment
  output: 'standalone',
  // Fix for Next.js 15.5.3 - moved from experimental
  serverExternalPackages: [],
  // Ensure environment variables are available at build time
  env: {
    WEBHOOK_URL: process.env.WEBHOOK_URL,
    WEBHOOK_SECRET: process.env.WEBHOOK_SECRET,
    CLIENT_RETURN_URL: process.env.CLIENT_RETURN_URL,
  },
  // Fix workspace root warning for monorepo
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
