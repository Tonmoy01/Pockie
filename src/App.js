import "bootstrap/dist/css/bootstrap.min.css";
import CategoryHeader from "./components/Category/CategoryHeader";
import CopyrightFooter from "./components/Copyright Footer/CopyrightFooter";
import Cosmetics from "./components/Cosmetics/Cosmetics";
import Services from "./components/Customar Service/Services";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import HotDeal from "./components/Hot Deal/HotDeal";
import Food from "./components/Luxury Food/Food";
import Navbar from "./components/Navbar/Navbar";
import Promo from "./components/Promo Product/Promo";
import Estate from "./components/Real Estate/Estate";
import Tabpanel from "./components/Tab Panel/Tabs";
import Technology from "./components/Technology/Technology";
import Topheader from "./components/Top Header/Topheader";
import Watch from "./components/Watch/Watch";

function App() {
  return (
    <div className="App">
      <Topheader />
      <Navbar />
      <CategoryHeader />
      <Hero />
      <Tabpanel />
      <HotDeal />
      <Promo />
      <Technology />
      <Watch />
      <Cosmetics />
      <Estate />
      <Food />
      <Services />
      <Footer />
      <CopyrightFooter />
    </div>
  );
}

export default App;
