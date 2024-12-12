import Image from "next/image";
import Link from "next/link";

export default function People( {peopleData} ) {

  const getMediaUrl = (url) =>
    `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    return (
      <section data-section="home_our_team" className="home_our_team">
    <div className="team_container">
        <h2 className="h2_title">PEOPLE</h2>
        <div className="pl_10">
            <h3 className="subtitle_60">
                {peopleData.title}
            </h3>
            <div className="para">
                {peopleData.description}
            </div>
        </div>
    </div>
    <div className="teams_detail">
    {peopleData.content_block.map((item, index) => (
          <div key={index} className="team_item">
            <Image
              src={getMediaUrl(item.image.url)}
              alt={item.description}
              width={item.image.width}
              height={item.image.height}
            />
            <div className="team_text">{item.description}</div>
          </div>
        ))}
    </div>
    <Link href="/people" className="circle_cta" target="_blank">
        <span>Look</span>
        <Image src="/images/icons/white_arrow.webp" alt="Arrow" width="20" height="14" />
      </Link>
</section>
    )

}