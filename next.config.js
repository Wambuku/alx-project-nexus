/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
      },
    ],
    domains: ['image.tmdb.org'], // Fallback for older Next.js versions
  },
  // Disable experimental features that might cause permission issues
  experimental: {
    instrumentationHook: false,
  },
  // Disable telemetry to avoid trace file issues
  telemetry: false,
}

module.exports = nextConfig