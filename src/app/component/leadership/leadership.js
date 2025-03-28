"use client ";
import Image from "next/image";


export default function Leadership({ leadershipdata }) {
  if (!leadershipdata || leadershipdata.length === 0) {
    return null; 
  }
    
    
    console.log("Leadership Data " ,leadershipdata)
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
    return (
      <section data-section="our_leaders" className="our_leaders">
        <div className="leaders_container">
          {leadershipdata.map((leader, index) => (
            <div className="leader_box" key={index}>
              <div className="leader_item">
                {/* Leader Image */}
                <Image
                  src={getMediaUrl(leader.image?.url)}
                  alt={leader.image.alt || "Leader Image"}
                  className=""
                  width="450"
                  height="560"
                />
                {/* Leader Details */}
                <div className="leader_detail">
                  <h2 className="subtitle_45">{leader.leader_name}</h2>
                  <a href={leader.name_slug ? `/leadership/${leader.name_slug}` : "#"} className="circle_cta">
                    <span>Know More</span>
                    <Image
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
        <Image
          src="/images/flower_bg.webp"
          alt="Background"
          className="flower_bg_img"
          width="895"
          height="851"
        />
        <Image
          src="/images/flower_bg.webp"
          alt="Background 2"
          className="flower_bg_img flower_bg_img_2"
          width="895"
          height="851"
        />
      </section>
    );
  }