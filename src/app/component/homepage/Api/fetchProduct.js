
export async function fetchProducts(letter = "", page = 1,category = "",brand="", productName="", ndc = "",pageSize = 12, ) {
  console.log("Category passed to fetchProducts:", brand);
    try {
      let url;
      
  if (category === "NEW_PRODUCTS") {
    console.log("Case: NEW_PRODUCTS");
    url = `https://lupinus-cms.devmaffia.in/api/products?sort[0]=createdAt:desc&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
  } else if (ndc) {
    console.log("Case: NDC", ndc);
    url = `https://lupinus-cms.devmaffia.in/api/products?filters[ndc][$contains]=${ndc}&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
  } else if (brand) {
    console.log("Case: BRAND", brand);
    url = `https://lupinus-cms.devmaffia.in/api/products?filters[brand][name][$startsWith]=${brand}&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
  } else if (productName) {
    console.log("Case: PRODUCT_NAME", productName);
    url = `https://lupinus-cms.devmaffia.in/api/products?filters[product_name][$startsWith]=${productName}&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
  } else if (letter) {
    console.log("Case: LETTER", letter);
    url = `https://lupinus-cms.devmaffia.in/api/products?filters[product_name][$startsWith]=${letter}&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
  } else {
    console.log("Case: DEFAULT");
    url=`https://lupinus-cms.devmaffia.in/api/products?populate[0]=product_images.slide&populate[1]=pdf_files.pdf&populate[2]=brand&populate[3]=category&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
   
  }

  /*https://lupinus-cms.devmaffia.in/api/products?populate[0]=product_images.slide&populate[1]=pdf_files.pdf&populate[2]=brand&populate[3]=category&pagination[page]=1&pagination[pageSize]=5 */

      
      /* https://lupinus-cms.devmaffia.in/api/products?filters[category][name][$eq]=Bronchodilator&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&pagination[page]=1&pagination[pageSize]=10      */

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
      const url = `https://lupinus-cms.devmaffia.in/api/products?filters[slug][$eq]=${slug}&populate[0]=product_images.slide&populate[1]=pdf_files.pdf&populate[2]=brand&populate[3]=category`;


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
  