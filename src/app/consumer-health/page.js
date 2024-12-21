export default async function ConsumerHealthPage() {
    try {
      // Fetch the content from the API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/consumer-health?populate=*`,
        {
          next: { revalidate: 60 }, // revalidate every 60 seconds
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch the privacy policy content');
      }
  
      const data = await response.json();
      const staticContent = data?.data?.static_content || 'No content available';
  
      return (
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: staticContent }}
          />
        </div>
      );
    } catch (error) {
      console.error('Error fetching privacy policy:', error);
      return <div>Error loading content. Please try again later.</div>;
    }
  }