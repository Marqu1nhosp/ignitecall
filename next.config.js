/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  eslint: { ignoreDuringBuilds: true },
}

module.exports = nextConfig
