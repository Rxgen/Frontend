"use client";

export default function LocationAddress( {locationaddress }){
    return(
        <section data-section="contact_location" className="contact_location">
    <h2 className="subtitle_60">Lupin US. Locations</h2>
    <p className="para">
        Lupin U.S. Corporate Headquarters is located in Baltimore MD, with four
        additional pharmaceutical research and manufacturing offices located in
        New Jersey, Pennsylvania and Florida.
    </p>
    <div className="contact_location_container">
                {locationaddress.map((location, index) => (
                    <div key={index} className="location_box">
                        <h3 className="subtitle_30">{location.name}</h3>
                        <div className="subtitle_15">{location.location_detail}</div>
                        <p className="para">{location.description}</p>
                        <div className="location_address">
                            {location.location_address}
                        </div>
                    </div>
                ))}
            </div>
</section>
    )
}