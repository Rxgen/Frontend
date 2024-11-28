

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


