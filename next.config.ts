/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 very important for static export
  images: {
    unoptimized: true, // 👈 required for static export
  },
};

export default nextConfig;
