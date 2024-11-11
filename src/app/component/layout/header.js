 
import Link from "next/link";
import Image from "next/image";


const Header = ({}) => {
    return (
      <header>
	<a href="" className="lupin_logo">
		<Image src="/images/lupin_logo.webp" alt="" width="134" height="49" />
	</a>
	<ul className="menu_list">
      <li>
        <Link href="/about-us">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/our-impact">
          Our Impact
        </Link>
      </li>
      <li>
        <Link href="/our-offerings">
          Our Offerings
        </Link>
      </li>
      <li>
        <Link href="/people">
          People
        </Link>
      </li>
    </ul>
	<div className="menu_icons">
		<a href="" className="language_icon"><Image src="/images/icons/language.webp" alt="" width="32" height="32" /></a>
	</div>
</header>
    );
  };
  
  export default Header;
  