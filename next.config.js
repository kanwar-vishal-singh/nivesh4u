/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  // basePath: '/nivesh4u', // Match your repository name
  // assetPrefix: '/nivesh4u', // Ensures assets are loaded correctly
  distDir: 'dist',
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;