
export async function fetchHomepageData(segment) {
    

    try {

       const sectionsWithContentBlock = ["people","our_offering"]; // Add sections that have `content_block` here
       const populateQuery = sectionsWithContentBlock.includes(segment)
           ? `?populate[${segment}][populate][content_block][populate]=image`
           : `?populate[${segment}][populate]=*`;


      const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/homepage${populateQuery}`
       
       console.log("API Url:", url);

       const response = await fetch(url, {
           method: "GET",
           cache: 'no-cache',
       });

        

        if (!response.ok) {
            console.error(`Failed to fetch ${segment} data: ${response.status} ${response.statusText}`);
            return [];
        }

        const data = await response.json();
        console.log("Full Response:", data);

        if (data && data.data) {
            console.log("Response Data: For API CAll", data.data);
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
