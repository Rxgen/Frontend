export async function fetchNewstData(page = 1, pageSize = 9, search = "") {
    

    try {
      let url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/news-collections`;
      if (search) {
        url += `?filters[news_title][$contains]=${search}&filters[news_detail][$contains]=${search}&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=date:desc`;
      } else {
        url += `?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=date:desc`;
      }
        const response = await fetch(url, {
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

        return {
          pressnews: data.data || [],
          totalPages:  data.meta.pagination.pageCount || 1,
        };
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