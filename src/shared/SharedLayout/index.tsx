import { Suspense } from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import ScrollToTop from '../../utils/ScrollToTop';
import { Helmet } from 'react-helmet';

const SharedLayout = () => {
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
      <div
        style={{
          minHeight: '100vh',
          maxHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <main>
          <Suspense>
            <Outlet />
            <ScrollToTop />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SharedLayout;
