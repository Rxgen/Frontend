
export async function bannerdata() {
    const token = "d594385bcdf3987e320aa778021b590d8e4349d15d942be6270189e35f6a22b396e83259481b1909cbf746965de3480770887383b762e46ce9caa7ba8ca3c8ebcc3342f8825e2c06a3e513090f7cee8f46167ab8ee82d8bdd95d6d8b44bdf920f8e54ef3d4999bd6a1d44c25bd4a4a2350019441e53c03d53acb56d49f42e2d7";

    try {
        const response = await fetch("http://127.0.0.1:1337/api/homepage?populate=Banner.banner_desktop_image", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            console.error(`Failed to fetch banner data: ${response.status} ${response.statusText}`);
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
