

export async function fetchpageData(segment) {
    

    try {
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/about?populate[${segment}][populate]=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/about?populate[${segment}][populate]=*`, {
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
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contact?populate[${segment}][populate]=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contact?populate[${segment}][populate]=*`, {
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
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/leaderships?populate[${segment}][populate]=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/leaderships?populate[${segment}][populate]=*`, {
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
      const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/leaderships?filters[slug][$eq]=${slug}&populate[0]=leadership_details.image&populate[1]=top_banner.desktop_image&populate[2]=top_banner.mobile_image`;



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
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/corporate?populate[${segment}][populate]=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/corporate?populate[${segment}][populate]=*`, {
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
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/sustainability?populate[${segment}][populate]=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/sustainability?populate[${segment}][populate]=*`, {
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

export async function fetchInnovativeMedicineData(segment) {
    try {
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/innovative-medicine?populate[${segment}][populate]=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/innovative-medicine?populate[${segment}][populate]=*`, {
            method: "GET",
        });

        console.log("Innovative Medicine",url);

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

export async function fetchCoreValueData(segment) {
    try {
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/core-value?populate[${segment}][populate]=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/core-value?populate[${segment}][populate]=*`, {
            method: "GET",
        });

        console.log("Innovative Medicine",url);

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


export async function fetchCareerData(segment) {
    try {
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/career?populate[${segment}][populate]=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/core-value?populate[${segment}][populate]=*`, {
            method: "GET",
        });

        console.log("Innovative Medicine",url);

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



