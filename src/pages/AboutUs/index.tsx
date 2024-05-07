import { Helmet } from 'react-helmet';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import JoinUsSection from './components/JoinUsSection';
import Mission from './components/Mission';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Що таке Спільно Іграшки</title>
        <meta
          name="description"
          content="Користуватися іграшками певний час, а потім повертати — це той підхід, що допоможе дітям у майбутньому більш усвідомлено ставитись до придбання речей."
        />
      </Helmet>
      <HeroSection />
      <AboutSection />
      <Mission />
      <JoinUsSection />
    </>
  );
};

export default AboutUs;
