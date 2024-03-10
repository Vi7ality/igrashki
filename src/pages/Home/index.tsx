import HowItWorks from "./components/HowItWorksSection";
import WhyUs from "./components//WhyUs/WhyUs";
import HeroSection from "./components/HeroSection/HeroSection";
import Gallery from "./components/GallerySection/Gallery";
import JoinUs from "./components/JoinUs";


const Home = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <WhyUs />
      <Gallery/>
      <JoinUs />
    </>
  );
};

export default Home;
