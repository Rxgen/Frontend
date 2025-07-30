"use client ";
import Link from "next/link";
import Image from "next/image";

export default function PressNewsBanner () {
    return (
        <section data-section="media_banner_section" className="media_banner_section inner_banner banner_section">
          <picture>
            <source media="(max-width: 540px)" srcSet="/images/media/mob_media.webp" />
            <Image 
              src="/images/media/media.webp" 
              alt="Media Banner" 
              className="banner_img" 
              width={1920} 
              height={767} 
              layout="intrinsic" 
            />
          </picture>
          <div className="subtitle_66">Media</div>
        </section>
    )
}