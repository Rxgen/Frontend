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
        source: "/:path*", 
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://frontend-six-rust-75.vercel.app/:path*",
        permanent: true,
      },
      {
        source: "/about-us/",
        destination: "/corporate-overview",
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

