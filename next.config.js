/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    fiber: false,
  },
  images: {
    unoptimized: true,
  }
}
