
/** @type {import('next').NextConfig} */
const nextConfig = {
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
