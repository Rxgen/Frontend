
export async function bannerdata() {
    const token = "95ff7f76f685a9145673b6a06036e9a7546e6241d669e5ba1bb8734880871e8d80a1c3b93c6afb94287d47ca32784739f9e7072f79b1fe0e2471458f7710995b2c03af3a8ded4aeb64ec1bd3a014bf64bf85d948b739852e9c7525460c36ae90c3a28601dc7e3d8243eec69de161502a0ebb03f285855cad0c49e3937ac2715a";

    try {
        const response = await fetch("http://127.0.0.1:1337/api/homepage?populate=*", {
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
