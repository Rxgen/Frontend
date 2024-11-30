

export async function fetchpageData(segment) {
    

    try {
        const url =`https://lupinus-cms.devmaffia.in/api/about?populate[${segment}][populate]=*`;
        const response = await fetch(`https://lupinus-cms.devmaffia.in/api/about?populate[${segment}][populate]=*`, {
            method: "GET",
        });

        console.log(url);

        if (!response.ok) {
            console.error(`Failed to fetch banner data: ${response.status} ${response.statusText}`);
            return [];
        }

        const data = await response.json();
        console.log("Full Response:", data);

        if (data && data.data) {
            console.log("Response Data: For API CAll About Data", data.data);
            return data.data;
        } else {
            console.error("API response does not contain expected `data` property. Received:", data);
            return [];
        }
    } catch (error) {
        console.error("Error fetching banner data:", error);
        return [];
    }
}



export async function fetchContactData(segment) {
    

    try {
        const url =`https://lupinus-cms.devmaffia.in/api/contact?populate[${segment}][populate]=*`;
        const response = await fetch(`https://lupinus-cms.devmaffia.in/api/contact?populate[${segment}][populate]=*`, {
            method: "GET",
        });

        console.log(url);

        if (!response.ok) {
            console.error(`Failed to fetch banner data: ${response.status} ${response.statusText}`);
            return [];
        }

        const data = await response.json();
        console.log("Full Response:", data);

        if (data && data.data) {
            console.log("Response Data: For API CAll About Data", data.data);
            return data.data;
        } else {
            console.error("API response does not contain expected `data` property. Received:", data);
            return [];
        }
    } catch (error) {
        console.error("Error fetching banner data:", error);
        return [];
    }
}

export async function fetchLeadershiptData(segment) {
    

    try {
        const url =`https://lupinus-cms.devmaffia.in/api/leaderships?populate[${segment}][populate]=*`;
        const response = await fetch(`https://lupinus-cms.devmaffia.in/api/leaderships?populate[${segment}][populate]=*`, {
            method: "GET",
        });

        console.log("Leadrship",url);

        if (!response.ok) {
            console.error(`Failed to fetch banner data: ${response.status} ${response.statusText}`);
            return [];
        }

        const data = await response.json();
        console.log("Full Response:", data);

        if (data && data.data) {
            console.log("Response Data: For API CAll Leadrship Data", data.data);
            return data.data;
        } else {
            console.error("API response does not contain expected `data` property. Received:", data);
            return [];
        }
    } catch (error) {
        console.error("Error fetching banner data:", error);
        return [];
    }
}

export async function fetchLeadershipdetails(slug) {
    try {
      const url = `https://lupinus-cms.devmaffia.in/api/leaderships?filters[slug][$eq]=${slug}&populate[0]=leadership_details.image&populate[1]=top_banner.desktop_image&populate[2]=top_banner.mobile_image`;



      const response = await fetch(url, { method: "GET" });
      console.log(url);
  
      if (!response.ok) {
        console.error(`Failed to fetch product data: ${response.status} ${response.statusText}`);
        return [];
      }
  
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Error fetching product data:", error);
      return [];
    }
  }

  export async function fetchCorporatetData(segment) {
    try {
        const url =`https://lupinus-cms.devmaffia.in/api/corporate?populate[${segment}][populate]=*`;
        const response = await fetch(`https://lupinus-cms.devmaffia.in/api/corporate?populate[${segment}][populate]=*`, {
            method: "GET",
        });

        console.log("Corporate",url);

        if (!response.ok) {
            console.error(`Failed to fetch banner data: ${response.status} ${response.statusText}`);
            return [];
        }

        const data = await response.json();
        console.log("Full Response:", data);

        if (data && data.data) {
            console.log("Response Data: For API CAll Leadrship Data", data.data);
            return data.data;
        } else {
            console.error("API response does not contain expected `data` property. Received:", data);
            return [];
        }
    } catch (error) {
        console.error("Error fetching banner data:", error);
        return [];
    }
}

export async function fetchSustainabletData(segment) {
    try {
        const url =`https://lupinus-cms.devmaffia.in/api/sustainability?populate[${segment}][populate]=*`;
        const response = await fetch(`https://lupinus-cms.devmaffia.in/api/sustainability?populate[${segment}][populate]=*`, {
            method: "GET",
        });

        console.log("Corporate",url);

        if (!response.ok) {
            console.error(`Failed to fetch banner data: ${response.status} ${response.statusText}`);
            return [];
        }

        const data = await response.json();
        console.log("Full Response:", data);

        if (data && data.data) {
            console.log("Response Data: For API CAll Leadrship Data", data.data);
            return data.data;
        } else {
            console.error("API response does not contain expected `data` property. Received:", data);
            return [];
        }
    } catch (error) {
        console.error("Error fetching banner data:", error);
        return [];
    }
}



