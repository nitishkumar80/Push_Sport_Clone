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
import  { MainPage } from './component/Main/Main';
import InfrastructureServices from './component/SportsInfra/Infrastructure';
import SportsFranchise from './component/Franchise/SportsFranchise';
import ServicePage from './component/service/ServicePage';
import AdmissionForm from './component/Admisssion/AdmissionForm';


function App() {
  return (
    <Router>
      <PushNavbar />
{/* <MainPage/> */}
<AdmissionFloatingButton />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <WhyPushSports />
              <BestInClass />
              <SportsInfrastructure />
           
        
            </>
          }
        />
        <Route path="/about" element={<JoinTheTribe />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/infrastructure" element={<InfrastructureServices />} />
        <Route path="/Franchise" element={<SportsFranchise />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/admission" element={<AdmissionForm />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
