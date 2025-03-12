
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    dangerouslyAllowSVG: true,  
    remotePatterns: [
          {
              protocol: "https",
              hostname: "*",
          }
      ]
  },
  experimental: {
    ppr: 'incremental'
    
  },
  devIndicators: {
    appIsStatus: true,
  }

};

export default nextConfig;
