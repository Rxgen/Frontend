
export async function fetchProducts(letter = "", page = 1,category = "", new_products="", brand="", productName="", ndc = "",pageSize = 12, ) {
  console.log("Category passed to fetchProducts:", brand);
    try {
      let url;
    if(category){
      url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?filters[category][name][$eq]=${category}&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&populate[2]=brand&populate[3]=category&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=product_name:asc`;
      }else if (new_products) {
    console.log("Case: NEW_PRODUCTS");
    url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?sort[0]=createdAt:desc&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&populate[2]=brand&populate[3]=category&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=product_name:asc`;
  } else if (ndc) {
    console.log("Case: NDC", ndc);
    url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?filters[ndc][$contains]=${ndc}&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&populate[2]=brand&populate[3]=category&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=product_name:asc`;
  } else if (brand) {
    console.log("Case: BRAND", brand);
    url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?filters[brand][name][$startsWith]=${brand}&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&populate[2]=brand&populate[3]=category&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=product_name:asc`;
  } else if (productName) {
    console.log("Case: PRODUCT_NAME", productName);
    url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?filters[product_name][$startsWith]=${productName}&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&populate[2]=brand&populate[3]=category&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=product_name:asc`;
  } else if (letter) {
    console.log("Case: LETTER", letter);
    url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?filters[product_name][$startsWith]=${letter}&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&populate[2]=brand&populate[3]=category&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=product_name:asc`;
  } else {
    console.log("Case: DEFAULT");
    url=`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?populate[0]=product_images.slide&populate[1]=pdf_files.pdf&populate[2]=brand&populate[3]=category&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=product_name:asc`;
   
  }

  /*${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?populate[0]=product_images.slide&populate[1]=pdf_files.pdf&populate[2]=brand&populate[3]=category&pagination[page]=1&pagination[pageSize]=5 */

      
      /* ${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?filters[category][name][$eq]=Bronchodilator&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&pagination[page]=1&pagination[pageSize]=10      */

      const response = await fetch(url, { method: "GET" });

      console.log("API Url",url);
      console.log("Category ",category);
  
      if (!response.ok) {
        console.error(`Failed to fetch product data: ${response.status} ${response.statusText}`);
        return [];
      }
  
      const data = await response.json();
      console.log("API Response Data:", data);
  
      //const { pagination } = data.meta || {};
      
  
      return {
        products: data.data || [],
        totalPages:  data.meta.pagination.pageCount || 1, // Default to 1 if not provided 
      };
      

    } catch (error) {
      console.error("Error fetching product data:", error);
      return [];
    }
  }

  export async function fetchProductBySlug(slug) {
    try {
      const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?filters[slug][$eq]=${slug}&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&populate[2]=brand&populate[3]=category`;


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
  