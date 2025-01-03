import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aula.s3.tebi.io',
        pathname: '/**',
        search: '',
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
