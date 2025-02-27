/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  transpilePackages: ["@repo/ui"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      use: "ignore-loader",
    });
    return config;
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL, // Ensure this is exposed
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_BANKSERVER_URL:process.env.NEXT_PUBLIC_BANKSERVER_URL,
    NEXT_PUBLIC_WEBHOOK_URL:process.env.NEXT_PUBLIC_WEBHOOK_URL
  },
};

module.exports = nextConfig;
