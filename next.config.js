// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lupinus-cms.devmaffia.in',
          port: '', 
          pathname: '/uploads/**', 
        },
      ],
    },
  };