import Policy from "../component/returun-good-policy/content";

export const generateMetadata = ({ params}) => {
  const path="return-good-policy"
  
    return {
      title: 'Return Good Policy',
      description: 'Return Good Policy',
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
      }
    };
  };

export default async function ReturnGoodPolicy() {
  return (
        <Policy />
  );
}