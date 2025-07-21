export const generateMetadata = ({ params}) => {
  const path="privacy-policy"
  
    return {
      title: 'Privacy Policy',
      description: 'This Privacy Statement (“Statement”) applies to Personal Information Lupin collects, uses or shares,',
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
      }
    };
  };





export default async function PrivacyPolicyPage() {
    try {
      
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/privacy-policy?populate=*`,
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
  
  