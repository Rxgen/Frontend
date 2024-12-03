"use client" ;

export default function Content({contentdata}){

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    return (
        <section data-section="core_value" className="core_value">
        <div className="core_value_content">
          <h2 className="subtitle_60">At Lupin, we pride ourselves</h2>
          <p className="para">
            On our promise of caring for our customers, our commitment to
            employees, our focus on quality, and the spirit of innovation that drives
            each of us. Our culture is shaped and driven by a set of core values.
          </p>
        </div>
        <div className="core_value_container">
          {contentdata && contentdata.map((value) => (
            <div key={value.id} className="core_value_box">
              <div className="value_detail">
                <div className="front_value">
                  <img
                    src={getMediaUrl(value.image.formats.thumbnail.url)} 
                    alt={value.image.alt || "Core value image"}
                    className="value_img"
                    width={value.image.width}
                    height={value.image.height}
                  />
                </div>
                <div className="back_value">
                  <img
                    src="/images/value/flower.webp"
                    alt="Flower Image"
                    className="flower_img"
                    width="337"
                    height="320"
                  />
                  <p className="para">{value.description}</p>
                </div>
              </div>
              <h3 className="subtitle_30">{value.heading}</h3>
            </div>
          ))}
        </div>
      </section>
    )
}