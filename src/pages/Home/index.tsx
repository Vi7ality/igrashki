import Header from "../../shared/Header";
import HowItWorks from "./components/HowItWorksSection/HowItWorks";
import WhyUs from "./components//WhyUs/WhyUs";
import HeroSection from "./components/HeroSection/HeroSection";
import Gallery from "./components/GallerySection/Gallery";
import JoinUs from "./components/JoinUs/JoinUs";
import Footer from "../../shared/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      <WhyUs />
      <Gallery/>
      <JoinUs />
      <Footer/>
    </>
  );
};

export default Home;
