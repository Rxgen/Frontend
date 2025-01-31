

export async function fetchpageData(segment) {
    

    try {
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/about?populate[${segment}][populate]=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/about?populate[${segment}][populate]=*`, {
            method: "GET",
            cache: 'no-cache',
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
            cache: 'no-cache',
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
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/leaderships?populate=*&sort[0]=order:asc`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/leaderships?populate=*&sort[0]=order:asc`, {
            method: "GET",
            cache: 'no-cache',
        });

        console.log("Leadrship",url);

        if (!response.ok) {
            console.error(`Failed to fetch Leadershp data: ${response.status} ${response.statusText}`);
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
      const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/leaderships?filters[name_slug][$eq]=${slug}&populate=*`;

      const response = await fetch(url, { method: "GET",cache: 'no-cache', });
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
            cache: 'no-cache',
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
            cache: 'no-cache',
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
            cache: 'no-cache',
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
            cache: 'no-cache',
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/career?populate[${segment}][populate]=*`, {
            method: "GET",
            cache: 'no-cache',
        });

        console.log("Career",url);

        if (!response.ok) {
            console.error(`Failed to fetch career data: ${response.status} ${response.statusText}`);
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

export async function fetchPeopleData(segment) {
    try {
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/people-page?populate[${segment}][populate]=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/people-page?populate[${segment}][populate]=*`, {
            method: "GET",
            cache: 'no-cache',
        });

        console.log("People",url);

        if (!response.ok) {
            console.error(`Failed to fetch People data: ${response.status} ${response.statusText}`);
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

export async function fetchOurOfferingData(segment) {
    try {
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/our-offering?populate[${segment}][populate]=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/our-offering?populate[${segment}][populate]=*`, {
            method: "GET",
            cache: 'no-cache',
        });

        console.log("Our offering",url);

        if (!response.ok) {
            console.error(`Failed to fetch Our Offering data: ${response.status} ${response.statusText}`);
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

export async function fetchSciencInnovationData(segment) {
    try {
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/science-innovation?populate[${segment}][populate]=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/science-innovation?populate[${segment}][populate]=*`, {
            method: "GET",
            cache: 'no-cache',
        });

        console.log("Science Innovation",url);

        if (!response.ok) {
            console.error(`Failed to fetch Our Offering data: ${response.status} ${response.statusText}`);
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


export async function fetchGenericMedicineData(segment) {
    try {
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/generic-medicine?populate[${segment}][populate]=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/generic-medicine?populate[${segment}][populate]=*`, {
            method: "GET",
            cache: 'no-cache',
        });

        console.log("Science Innovation",url);

        if (!response.ok) {
            console.error(`Failed to fetch Our Offering data: ${response.status} ${response.statusText}`);
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

export async function fetchOurCultureData(segment) {
    try {
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/our-culture?populate[${segment}][populate]=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/our-culture?populate[${segment}][populate]=*`, {
            method: "GET",
            cache: 'no-cache',
        });

        console.log("Our Culture",url);

        if (!response.ok) {
            console.error(`Failed to fetch Our Offering data: ${response.status} ${response.statusText}`);
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

export async function fetchOurHistoryData(segment) {
    try {
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/histories?populate=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/histories?populate=*`, {
            method: "GET",
            cache: 'no-cache',
        });

        console.log("Our History",url);

        if (!response.ok) {
            console.error(`Failed to fetch Our History data: ${response.status} ${response.statusText}`);
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
    }compliance
}

export async function fetchComplianceData() {
    try {
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/compliance-ethics?populate=*&sort[0]=order:asc`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/compliance-ethics?populate=*&sort[0]=order:asc`, {
            method: "GET",
            cache: 'no-cache',
        });


        if (!response.ok) {
            console.error(`Failed to fetch Our Compliance data: ${response.status} ${response.statusText}`);
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












