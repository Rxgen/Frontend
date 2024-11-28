import { fetchContactData } from "../component/homepage/Api/fetchPageData";
import ContactForm from "../component/contact-us/contactform";
import LocationAddress from "../component/contact-us/locationadress";
import TopBanner from "../component/contact-us/topbanner";
import Mediacontact from "../component/contact-us/mediacontact";


export default async function contactpage (){
  const data = await fetchContactData("top_banner");
  const topbannerdata=data.top_banner;
  const locationdata= await fetchContactData("location_address");
  const locationaddress=locationdata.location_address;

  return (
    <div>
      <TopBanner  topbannerdata={topbannerdata}/>
      <LocationAddress locationaddress={locationaddress} />
      <ContactForm />
      <Mediacontact />
    </div>
  )
}