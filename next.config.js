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

  async redirects() {
    return [
      {
        source: "/US/:path*", 
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://www.lupin.com/US/:path*",
        permanent: true,
      },
      {
        source: "/albuterol-sulfate-inhalation/",
        destination: "/products/albuterol-sulfate-inhalation-aerosol",
        permanent: true,
      },
      {
        source: "/tiotropium-bromide-inhalation-powder-capsule",
        destination: "/products/tiotropium-bromide-inhalation-powder-capsules",
        permanent: true,
      },
    ];
  },

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

