/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // auto remove ^data-test* props https://nextjs.org/docs/advanced-features/compiler#remove-react-properties
    reactRemoveProperties: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
