import { headers } from "next/headers";
import HomeBanner from "./homebanner";

export default function VideoBanner() {
  const userAgent = headers().get("user-agent") || "";
  const isMobile = /Mobi|Android/i.test(userAgent);

  return <HomeBanner isServerMobile={isMobile} />;
}