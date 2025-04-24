import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PushNavbar from './component/navbar/PushNavbar';
import WhyPushSports from './component/WhyPush/WhyPushSports';
import BestInClass from './component/BestInClass/BestInClass';
import SportsInfrastructure from './component/SportsInfra/SportsInfrastructure';
import Footer from './component/Footer/Footer';
import AdmissionFloatingButton from './component/Admisssion/AdmissionFloatingButton';
import Banner from './component/banner/Banner';
import JoinTheTribe from './component/about/JoinTheTribe';
import ContactUs from './component/contactus/contact';



function App() {
  return (
    <Router>
      <PushNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <WhyPushSports />
              <BestInClass />
              <SportsInfrastructure />
              <Footer />
              <AdmissionFloatingButton />
            </>
          }
        />
        <Route path="/about" element={<JoinTheTribe />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
