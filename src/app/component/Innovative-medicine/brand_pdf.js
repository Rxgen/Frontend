"use client";
import Image from "next/image";
import Link from "next/link";

export default function BrandPdf({ brandpdfdata }) {

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    return (
        <section data-section="innovative_brand" className="innovative_brand">
            <h2 className="subtitle_48">
                To learn more about our
                branded products, please
                click on the links below.
            </h2>
            <div className="brand_container">
                {brandpdfdata && brandpdfdata.map((item, index) => {
                    const imageUrl = item.image?.formats?.thumbnail?.url
                        ? getMediaUrl(item.image.formats.thumbnail.url)
                        : "assets/images/about/banner.webp";
                    const pdfUrl = item.pdf_files?.url
                        ? getMediaUrl(item.pdf_files.url)
                        : null;  

                    return (
                        <a
                            key={index}
                            href={pdfUrl} 
                            target="_blank" 
                            download={item.pdf_files.name} 
                        >
                            <Image
                                src={imageUrl} 
                                alt="Brand Name"
                                width={item.image.width}
                                height={item.image.height}
                            />
                        </a>
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
