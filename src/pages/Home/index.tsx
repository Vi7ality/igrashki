import HowItWorks from './components/HowItWorksSection';
import WhyUs from './components//WhyUs/WhyUs';
import HeroSection from './components/HeroSection/HeroSection';
import JoinUs from './components/JoinUs';
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
          content="Це програма з безкоштовної оренди дитячих іграшок для раннього розвитку, що реалізується через мережу Дитячих точок Спільно. В основі проєкту лежить ідея бібліотеки, де замість книжок — іграшки.Наразі проєкт реалізується у Чернівецькій, Тернопільській, Івано-Франківській та Закарпатській та Львівській областях."
        />
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
