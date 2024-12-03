export async function fetchNewProducts(letter) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?filters[product_name][$startsWith]=${letter}&populate=*`,
        { cache: "no-store" } 
      );
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }
