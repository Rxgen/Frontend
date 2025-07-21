import Sitemap from "../component/sitemap/content";

export const generateMetadata = ({ params}) => {
  const path="sitemap"
  
    return {
      title: 'SiteMap',
      description: 'Site Map',
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
      }
    };
  };

export default async function SitemapPage() {
  return (
        <Sitemap />
  );
}  