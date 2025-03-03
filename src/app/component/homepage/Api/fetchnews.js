export async function fetchNewstData(segment) {
    

    try {
        const url =`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/news-collections?populate=*`;
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/news-collections?populate=*`, {
            method: "GET",
            cache: 'no-cache',
        });

        console.log("News Data From Api",url);

        if (!response.ok) {
            console.error(`Failed to fetch News  data: ${response.status} ${response.statusText}`);
            return [];
        }

        const data = await response.json();
        console.log("Full Response: News Data ", data);

        if (data && data.data) {
            console.log("Response Data: For API CAll News Data", data.data);
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

 export async function fetchNewsdetails(slug) {
    try {
      const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/news-collections?filters[slug][$eq]=${slug}&populate=*`;

      const response = await fetch(url, { method: "GET",cache: 'no-cache', });
      console.log(url);
  
      if (!response.ok) {
        console.error(`Failed to fetch News data: ${response.status} ${response.statusText}`);
        return [];
      }
  
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Error fetching News data:", error);
      return [];
    }
  }