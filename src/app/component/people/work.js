"use client" ;
import Link from "next/link";
import Image from "next/image";

export default function Work({workdata} ){

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
    const imageUrl = getMediaUrl(workdata.image.url);

    return (
        <section data-section="people_work" className="people_work growth_work">
    <div className="people_content">
        <h2 className="subtitle_60">{workdata.heading}</h2>
        <p className="para">
           {workdata.description}
        </p>
        <Link href="/career" className="green_cta">
              <div className="cta_container">
               <span>Know more</span>
               <Image src="/images/icons/white_arrow.webp" alt="Know More" width="20" height="14" />
          </div>
      </Link>
    </div>
    <Image src={imageUrl} alt={workdata.image.alternativeText} className="people_img" width={workdata.image.width} height={workdata.image.height} />
    <Image src="/images/flower_bg.webp" alt="Big Flower" className="flower_bg_img" width="895" height="851" />
</section>
    )
}