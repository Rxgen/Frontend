
import Corporate from "./homepage/corporate";
import About from "./homepage/about";
import Homebanner from "./homepage/homebanner";
import News from "./homepage/news";
import Offering  from "./homepage/offering";
import Sustainable from "./homepage/sustainable";

export default function HomePageClient (){
    return (
<div>
<Homebanner />    
<Corporate />
<About />
<News />
<Offering />
<Sustainable />
</div>
    );
}