// // next.config.js
// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'lupinus-cms.devmaffia.in',
//           port: '', 
//           pathname: '/uploads/**', 
//         },
//       ],
//     },
//   };

 //next.config.js


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lupinus-cms.devmaffia.in",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },

  // async redirects() {
  //   return [
  //     {
  //       source: "/:path*",
  //       has: [
  //         {
  //           type: "header",
  //           key: "x-forwarded-proto",
  //           value: "http", // Detects HTTP request
  //         },
  //       ],
  //       destination:
  //         "https://lupinus-c2cwazd8b2hggzh9.southindia-01.azurewebsites.net/:path*", // Replace with your domain
  //       permanent: true,
  //     },
  //   ];
  // },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*", 
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS, PUT, DELETE, PATCH",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

