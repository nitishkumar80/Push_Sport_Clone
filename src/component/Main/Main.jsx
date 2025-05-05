// main.jsx

import React from 'react';
import Banner from '../banner/Banner';
import WhyPushSports from '../WhyPush/WhyPushSports';
import BestInClass from '../BestInClass/BestInClass';
import SportsInfrastructure from '../SportsInfra/SportsInfrastructure';
import Footer from '../Footer/Footer';
import AdmissionFloatingButton from '../Admisssion/AdmissionFloatingButton';

// Named export
export function MainPage() {
  return (
    <div>
      <Banner />
      <WhyPushSports />
      <BestInClass />
      <SportsInfrastructure />
      <Footer />
      <AdmissionFloatingButton />
    </div>
  );
}

// Default export
export default MainPage;
