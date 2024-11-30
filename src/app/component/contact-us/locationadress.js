"use client";
import  {useEffect,useState} from "react";

export default function LocationAddress({ locationaddress = [] }) {
  const [maxBoxHeightVw, setMaxBoxHeightVw] = useState('auto');
  const [maxParaHeightVw, setMaxParaHeightVw] = useState('auto');
  const [maxAddressHeightVw, setMaxAddressHeightVw] = useState('auto');

  useEffect(() => {
    const calculateHeights = () => {
      const locationBoxes = document.querySelectorAll(".location_box");
      const paras = document.querySelectorAll(".location_box .para");
      const addresses = document.querySelectorAll(".location_box .location_address");

      let maxBoxHeightPx = 0;
      let maxParaHeightPx = 0;
      let maxAddressHeightPx = 0;

      locationBoxes.forEach((box) => {
        const boxHeight = box.offsetHeight;
        if (boxHeight > maxBoxHeightPx) maxBoxHeightPx = boxHeight;
      });

      paras.forEach((para) => {
        const paraHeight = para.offsetHeight;
        if (paraHeight > maxParaHeightPx) maxParaHeightPx = paraHeight;
      });

      addresses.forEach((address) => {
        const addressHeight = address.offsetHeight;
        if (addressHeight > maxAddressHeightPx) maxAddressHeightPx = addressHeight;
      });

      const vwConversionFactor = 100 / window.innerWidth;
      setMaxBoxHeightVw((maxBoxHeightPx * vwConversionFactor).toFixed(2));
      setMaxParaHeightVw((maxParaHeightPx * vwConversionFactor).toFixed(2));
      setMaxAddressHeightVw((maxAddressHeightPx * vwConversionFactor).toFixed(2));
    };

    calculateHeights();
    window.addEventListener("resize", calculateHeights);

    return () => window.removeEventListener("resize", calculateHeights);
  }, []);

  return (
    <section data-section="contact_location" className="contact_location">
      <h2 className="subtitle_60">Lupin US. Locations</h2>
      <p className="para">
        Lupin U.S. Corporate Headquarters is located in Baltimore MD, with four
        additional pharmaceutical research and manufacturing offices located in
        New Jersey, Pennsylvania and Florida.
      </p>
      <div className="contact_location_container">
        {locationaddress.map((location, index) => (
          <div
            key={index}
            className="location_box"
            style={{ height: maxBoxHeightVw === "auto" ? "auto" : `${maxBoxHeightVw}vw` }}
          >
            <h3 className="subtitle_30">{location.name}</h3>
            <div className="subtitle_15">{location.location_detail}</div>
            <p
              className="para"
              style={{ height: maxParaHeightVw === "auto" ? "auto" : `${maxParaHeightVw}vw` }}
            >
              {location.description}
            </p>
            <div
              className="location_address"
              style={{ height: maxAddressHeightVw === "auto" ? "auto" : `${maxAddressHeightVw}vw` }}
            >
              {location.location_address}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


