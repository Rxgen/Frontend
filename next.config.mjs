const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lupinus-cms.devmaffia.in',
          port: ' ', 
          pathname: '/uploads/**',
        },
      ],
    },
  };
  
  export default nextConfig; 


