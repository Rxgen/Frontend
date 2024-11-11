
import Corporate from "./homepage/corporate";
import About from "./homepage/about";
import Homebanner from "./homepage/homebanner";
import News from "./homepage/news";
import Offering  from "./homepage/offering";
import Sustainable from "./homepage/sustainable";
import People from "./homepage/people";

export default function HomePageClient (){
    return (
<div>
<Homebanner />    
<Corporate />
<About />
<News />
<People />
<Offering />
<Sustainable />
</div>
    );
}