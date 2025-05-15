"use client";
import Image from "next/image";
import Link from "next/link";

export default function BrandPdf({ brandpdfdata }) {

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    return (
        <section data-section="innovative_brand" className="innovative_brand">
            <h2 className="subtitle_48">
            Learn more about our branded products
            </h2>
            <div className="brand_container">
                {brandpdfdata && brandpdfdata.map((item, index) => {
                    const imageUrl = item.image?.url
                        ? getMediaUrl(item.image?.url)
                        : "assets/images/about/banner.webp";
                    const pdfUrl = item.pdf_files?.url
                        ? getMediaUrl(item.pdf_files.url)
                        : null;  

                        const staticUrl = index
                            ? "https://www.brovana.com/"
                            : "https://www.xopenexhfa.com/";


                    return (
                        <Link
                            key={index}
                            href={staticUrl} 
                            target="_blank" 
                            download={item.pdf_files.name} 
                        >
                            <Image
                                src={imageUrl} 
                                alt="Brand Name"
                                width={item.image.width}
                                height={item.image.height}
                            />
                        </Link>
                    );
                })}
                <Link href="/products" target="_blank">
        <div>
          <Image
            src="/images/innovation/brands/img_3.webp"
            alt="Brand Image"
            width={463}
            height={273}
          />
        </div>
      </Link>
            </div>
        </section>
    );
}
