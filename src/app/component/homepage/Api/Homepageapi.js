
async function bannerdata() {
    const token = "d1cbc95cae69ccccc5cd7215ac06a64577a89b424776c5ebe92627ae02ee113ad58266647837e8392d1cbd5eefe948c8daa99bf8c40558fa7c96dba8a831b30918ddb3168fc57668cb94cd13246dbf374180b3fdee56a82b0bf9c90e8e417f3c45df75cd5ad6050bc1c85012d5d68f9c8cbff98f5e971a43828b4085bef6c0f7"; 
  
    try {
      const response = await fetch("http://localhost:1337/api/homepage?populate=*", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        console.error(`Failed to fetch banner data: ${response.statusText}`);
        return [];
      }
  
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching banner data:", error);
      return [];
    }
  }
