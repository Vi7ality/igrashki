import HowItWorks from './components/HowItWorksSection';
import WhyUs from './components//WhyUs/WhyUs';
import HeroSection from './components/HeroSection/HeroSection';
import JoinUs from './components/JoinUs';
import logo from "../../assets/logo.svg";
import { lazy } from 'react';
import { Helmet } from 'react-helmet';
const Gallery = lazy(()=> import('./components/GallerySection/Gallery'))

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Спільно іграшки. Мережа безоплатних бібліотек іграшок для раннього
          розвитку
        </title>
        <meta
          name="description"
          content="Програма з безкоштовної оренди дитячих іграшок для раннього розвитку, що реалізується через мережу Дитячих точок Спільно. В основі проєкту лежить ідея бібліотеки, де замість книжок — іграшки.Наразі проєкт реалізується у Чернівецькій, Тернопільській, Івано-Франківській та Закарпатській та Львівській областях."
        />
        <meta property='og:type' content='website'/>
        <meta property='og:url' content='/'/>
        <meta property='og:title' content='Спільно іграшки. Мережа безоплатних бібліотек іграшок для раннього
          розвитку'/>
        <meta property='og:description' content='Програма з безкоштовної оренди дитячих іграшок для раннього розвитку, що реалізується через мережу Дитячих точок Спільно.'/>
        <meta property='og:image' content={logo}/>
      </Helmet>
      <HeroSection />
      <HowItWorks />
      <WhyUs />
      <Gallery />
      <JoinUs />
    </>
  );
};

export default Home;
