


export async function fetchProductslug() {
    try {
       
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?filters[slug][$eq]=amlodipine-besylate-tablets-usp&populate=*`, {
            method: "GET",
            cache: 'no-cache',
        });

        if (!response.ok) {
            console.error(`Failed to fetch data for slug ${slug}: ${response.status} ${response.statusText}`);
            return null;
        }

        const data = await response.json();
        console.log("Full Response:", data);

        if (data && data.data) {
            return data.data;
        } else {
            console.error("API response does not contain expected `data` property. Received:", data);
            return null;
        }
    } catch (error) {
        console.error("Error fetching data for slug:", error);
        return null;
    }
}