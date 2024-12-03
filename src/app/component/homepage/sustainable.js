import Image from "next/image";
import Link from "next/link";

export default function Sustainable ( {sustainabilityData }){

    const getMediaUrl = (url) =>
        `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;


    return (
<section data-section="home_sustainability" className="home_sustainability">
    
</section>
    );
}