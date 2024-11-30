"use client ";


export default function Leadership({ leadershipdata }) {
    
    const slug=leadershipdata[0].slug;
    const data=leadershipdata[0].leadership_details
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;
    return (
      <section data-section="our_leaders" className="our_leaders">
        <div className="leaders_container">
          {data.map((leader, index) => (
            <div className="leader_box" key={index}>
              <div className="leader_item">
                {/* Leader Image */}
                <img
                  src={getMediaUrl(leader.image.url)}
                  alt={leader.image.alt || "Leader Image"}
                  className=""
                  width="450"
                  height="560"
                />
                {/* Leader Details */}
                <div className="leader_detail">
                  <h2 className="subtitle_45">{leader.name}</h2>
                  <a href={slug ? `/leadership/${slug}` : "#"} className="circle_cta">
                    <span>Know More</span>
                    <img
                      src="/images/icons/white_arrow.webp"
                      alt="Know More"
                      width="20"
                      height="14"
                    />
                  </a>
                </div>
                {/* Leader Role */}
                <div className="para">{leader.designation}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Background Images */}
        <img
          src="/images/flower_bg.webp"
          alt="Background"
          className="flower_bg_img"
          width="895"
          height="851"
        />
        <img
          src="/images/flower_bg.webp"
          alt="Background 2"
          className="flower_bg_img flower_bg_img_2"
          width="895"
          height="851"
        />
      </section>
    );
  }