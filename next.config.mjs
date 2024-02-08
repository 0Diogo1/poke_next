/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns:[
      {
        protocol:'https',
        hostname:'cdn.traction.one',
        port:'',
        pathname:'/pokedex/pokemon/*',
      }
    ]
  },
};

export default nextConfig;
