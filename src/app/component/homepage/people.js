import Image from "next/image";
import Link from "next/link";

export default function People( {peopleData} ) {

  const getMediaUrl = (url) =>
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;
    return (
      <section data-section="home_our_team" className="home_our_team">
      <div className="team_container">
        <h2 className="h2_title">PEOPLE</h2>
        <div className="pl_10">
          <h3 className="subtitle_60">{peopleData.title}</h3>
          <div className="para scroll_content">{peopleData.description}</div>
        </div>
      </div>

      <div className="teams_detail">
        {peopleData.content_block &&
          peopleData.content_block.map((block, index) => (
            <div key={block.id} className="team_item">
              <img
                src={getMediaUrl(block.image.url)}
                alt={block.heading || "Team Image"}
                width={block.image.width || 452}
                height={block.image.height || 538}
              />
              <div className="team_text">{block.heading}</div>
            </div>
          ))}
      </div>

      {peopleData.cta && (
        <Link href={peopleData.cta.url} className="circle_cta">
          <span>{peopleData.cta.text}</span>
          <img
            src={getMediaUrl(peopleData.cta.icon)}
            alt={peopleData.cta.icon_alt || "CTA Icon"}
            width={20}
            height={14}
          />
        </Link>
      )}
    </section>
    )

}