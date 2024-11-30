"use client" 

export default function Sustainable ( { sustainabledata } ) {


    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;
    return (
        <section
        data-section="sustainable_coprporate"
        className="sustainable_coprporate"
        id="sustainable_coprporate"
      >
        <h2 className="subtitle_60"> Commitment to Sustainable Growth</h2>
        <div className="sustainable_container">
          {sustainabledata.map((item, index) => {
            const imageUrl = item?.image?.url
              ? getMediaUrl(item.image.url)
              : "assets/images/corporate/sustainable/default.webp";
  
            return (
              <div key={index} className="sustainable_item">
                <div className="front">
                  <img
                    src={imageUrl}
                    alt={item?.heading}
                    width={491}
                    height={491}
                  />
                  <h3 className="subtitle_40">{item?.heading}</h3>
                </div>
                <div className="back">
                  <div className="subtitle_40">{item?.heading}</div>
                  <p className="para">{item?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    )
}