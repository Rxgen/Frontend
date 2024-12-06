import Image from "next/image";
import Link from "next/link";

export default function People( {peopleData} ) {

  const getMediaUrl = (url) =>
    `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
    return (
      <section data-section="home_our_team" className="home_our_team">
      
    </section>
    )

}