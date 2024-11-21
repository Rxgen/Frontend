


export async function fetchNewProducts(letter) {
    try {
      const response = await fetch(
        `https://lupinus-cms.devmaffia.in/api/products?filters[product_name][$startsWith]=${letter}&populate=*`,
        { cache: "no-store" } // Avoid caching for fresh data
      );
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }

