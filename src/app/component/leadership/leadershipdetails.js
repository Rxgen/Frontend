"use client";

import Image from "next/image";

export default function Leadershipdetails({ leadershipdetaildata }) {
  console.log("Leadership details", leadershipdetaildata);

  const getMediaUrl = (url) =>
    `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

  const pdfUrl = leadershipdetaildata[0]?.pdf?.url
    ? getMediaUrl(leadershipdetaildata[0].pdf.url)
    : null;

  const imageUrl = leadershipdetaildata[0]?.image?.url
    ? getMediaUrl(leadershipdetaildata[0].image.url)
    : null;

  const handleImageDownload = async () => {
    try {
      if (!imageUrl) return;

      // Request your Next.js API route to fetch and force download
      const response = await fetch(`/api/download?url=${encodeURIComponent(imageUrl)}&filename=${encodeURIComponent(leadershipdetaildata[0].leader_name + "-image.webp")}`);

      if (!response.ok) {
        throw new Error("Failed to download image");
      }

      // Convert the response to blob and trigger browser download
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${leadershipdetaildata[0].leader_name}-image.webp`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Image download failed:", error);
    }
  };

  return (
    <section
      data-section="leader_detail_section"
      className="leader_detail_section"
    >
      <div className="leader_detail_container">
        <Image
          src={
            leadershipdetaildata[0]?.image?.url
              ? getMediaUrl(leadershipdetaildata[0].image.url)
              : "/asset/images/leadesrship/image.webp"
          }
          alt={
            leadershipdetaildata[0]?.image?.alternativeText ||
            "Default Alt Text"
          }
          className="leader_detail_img"
          width="450"
          height="560"
        />

        <div className="leader_detail_content">
          <h2 className="subtitle_45">{leadershipdetaildata[0].leader_name}</h2>
          <div className="para detail_para">
            {leadershipdetaildata[0].designation}
          </div>

          <div
            className="para_container"
            dangerouslySetInnerHTML={{
              __html: leadershipdetaildata[0].description,
            }}
          />

          <div className="pdf_detail">
            {/* PDF Download */}
            {pdfUrl && (
              <a href={pdfUrl} className="pdf_btn" target="_blank" download>
                Download PDF
              </a>
            )}

            {/* Image Download */}
            <button
              type="button"
              onClick={handleImageDownload}
              className="pdf_btn"
            >
              Download Image
            </button>
          </div>
        </div>
      </div>

      <Image
        src="/images/flower_bg.webp"
        alt="Flower big"
        className="flower_bg_img"
        width="895"
        height="851"
      />
    </section>
  );
}
