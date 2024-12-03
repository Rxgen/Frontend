"use client"

export default function Innovation( { innovativedata } ){

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    const ImageUrl = innovativedata?.image?.url
    ? getMediaUrl(innovativedata.image.formats.medium.url)
    : "assets/images/about/banner.webp";
    return (
        <section data-section="innovative_coprporate" className="innovative_coprporate" id="innovative_coprporate">
      <div className="innovative_container">
        <h2 className="subtitle_60">{ innovativedata.heading }</h2>
        <p className="para">
        { innovativedata.description }
        </p>
      </div>
      <img
        src={ImageUrl}
        alt="Driving Innovation"
        width={886}
        height={814}
      />
    </section>
    )
}