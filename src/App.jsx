import Card from "./components/productCard/card";
import Header from "./components/header";
import Showcase from "./components/showcase";
import ProductCard from "./components/productCard";
import AboutUs from "./components/aboutUs";
import OneCard from "./components/onecard";
import UnderTheFooter from "./components/underTheFooter";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <ProductCard />
      <AboutUs />
      <OneCard/>
      <UnderTheFooter/>
    </div>
  );
};

export default App;
