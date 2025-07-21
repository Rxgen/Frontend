export const generateMetadata = ({ params}) => {
  const path="pharmacovigilance"
  
    return {
      title: 'Pharmacovigilance',
      description: 'Pharmacovigilance is defined by the World Health Organization (WHO) as “the science and activities relating to the detection, assessment, understanding and prevention of adverse effects or any other drug-related problem.',
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
      }
    };
  };

export default async function PharmacovigilancePage() {
    try {
      // Fetch the content from the API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/pharmacovigilance?populate=*`,
        {
          next: { revalidate: 60 }, // Optional: revalidate every 60 seconds
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