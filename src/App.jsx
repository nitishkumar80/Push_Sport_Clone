import { useState } from 'react';
import './App.css';
import PushNavbar from './component/navbar/PushNavbar';
import WhyPushSports from './component/WhyPush/WhyPushSports';
import BestInClass from './component/BestInClass/BestInClass';
import SportsInfrastructure from './component/SportsInfra/SportsInfrastructure';
import Footer from './component/Footer/Footer';
import AdmissionFloatingButton from './component/Admisssion/AdmissionFloatingButton';
import Contact from './component/contactus/contact';
import Banner from './component/banner/Banner';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <PushNavbar />
        <Banner/>
        <WhyPushSports />
        <BestInClass />
        <SportsInfrastructure />
        <Footer />
        <AdmissionFloatingButton />
      
      </div>
    </>
  );
}

export default App;
