import Header from "../../shared/Header";
import HowItWorks from "./components/HowItWorksSection/HowItWorks";
import WhyUs from "./components//WhyUs/WhyUs";
import styles from "./styles.module.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import Gallery from "./components/GallerySection/Gallery";
import JoinUs from "./components/JoinUs/JoinUs";
import Footer from "../../shared/Footer";

const Home = () => {
  return (
    <div className={styles.content}>
      <Header />
      <HeroSection />
      <HowItWorks />
      <WhyUs />
      <Gallery/>
      <JoinUs />
      <Footer/>
    </div>
  );
};

export default Home;
