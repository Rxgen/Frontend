
export async function fetchProducts(letter = "") {
    try {
      const url = letter
        ? `https://lupinus-cms.devmaffia.in/api/products?filters[product_name][$startsWith]=${letter}&populate=*`
        : `https://lupinus-cms.devmaffia.in/api/products?populate[0]=product_images.slide&populate[1]=pdf_files.pdf`;
  
      const response = await fetch(url, { method: "GET" });
  
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

  export async function fetchProductBySlug(slug) {
    try {
      const url = `https://lupinus-cms.devmaffia.in/api/products?filters[slug][$eq]=${slug}&populate[0]=product_images.slide&populate[1]=pdf_files.pdf`;

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
  