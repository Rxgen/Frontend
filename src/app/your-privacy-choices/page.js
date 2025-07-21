import Privacychoices from "../component/your-privacy-choices/content";

export const generateMetadata = ({ params}) => {
  const path="your-privacy-choices"
  
    return {
      title: 'Your Privacy Choices',
      description: 'Depending on where you live, you may have certain privacy rights that apply to your Personal Information or your Consumer Health Data.',
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
      }
    };
  };


  export default async function YourPrivacyChoices() {
    return (
          <Privacychoices />
    );
  }