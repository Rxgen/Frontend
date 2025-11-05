 module.exports = {
  //basePath: '/US',
  trailingSlash: false,
  //assetPrefix: '/US/',
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
    
     return await fetchRedirects();
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent Clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self';" },

          //  Basic Security Hardening
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=()" },

          //  Force HTTPS
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },

          // Control Allowed Origins (CORS)
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS", // Limit unnecessary methods
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


// next.config.js
// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'http',
//           hostname: '127.0.0.1',
//           port: '1337', // Leave empty if there's no specific port
//           pathname: '/**', // Match all paths
//         },
//       ],
//     },
//   };
  

  // Staging

  // module.exports = {
  //   images: {
  //     remotePatterns: [
  //       {
  //         protocol: 'https',
  //         hostname: 'staging-cms.welspunflooring.com',
  //         port: '', // Leave empty if there's no specific port
  //         pathname: '/**', // Match all paths
  //       },
  //     ],
  //   },
  // };



  // Live


  async function fetchRedirects() {
    try {
        const res = await fetch("https://lupinus-cms.devmaffia.in/api/redirects");
        const jsonResponse = await res.json();
        
        const redirects = jsonResponse.data || [];
        console.log("Redirects API response:", redirects);

        if (!Array.isArray(redirects)) {
            console.error("Redirects API response is not an array:", redirects);
            return [];
        }

        return redirects.map(redirect => ({
            source: redirect.source,
            destination: redirect.destination,
            permanent: redirect.permanent ?? true 
        }));
    } catch (error) {
        console.error("Error fetching redirects:", error);
        return [];
    }
}

  

