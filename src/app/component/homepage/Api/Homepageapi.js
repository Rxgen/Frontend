
export async function fetchHomepageData(segment) {
    

    try {

       const sectionsWithContentBlock = ["people","our_offering","sustainability"]; // Add sections that have `content_block` here
       const populateQuery = sectionsWithContentBlock.includes(segment)
           ? `?populate[${segment}][populate][content_block][populate]=image&populate[${segment}][populate][cta][populate]=*`
           : `?populate[${segment}][populate]=*`;

      // const url = `https://lupinus-cms.devmaffia.in/api/homepage?populate[${segment}][populate]=*`;

    /*  https://lupinus-cms.devmaffia.in/api/homepage?populate[people][populate][content_block][populate]=image&populate[people][populate][cta][populate]=*  */

    //https://lupinus-cms.devmaffia.in/api/about?populate[image_content][populate]=*

      const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/homepage${populateQuery}`
       
       console.log("API Url:", url);

       const response = await fetch(url, {
           method: "GET",
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
