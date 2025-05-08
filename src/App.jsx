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
import SportsAcademyPage from './component/SportsAcademy/SportsAcademyPage';
import Cricket from './component/All-Sport/ Cricket';
import Swimming from './component/All-Sport/Swimming/Swimming';
import Basketball from './component/All-Sport/Basketball/Basketball';
import Badminton from './component/All-Sport/Badminton/Badminton';
import Football from './component/All-Sport/Football/Football';
import Volleyball from './component/All-Sport/Volleyball/Volleyball';
import Yoga from './component/All-Sport/Yoga/Yoga';
import Gym from './component/All-Sport/Gym/Gym';
import FeeStructure from './component/FeeStructure/FeeStructure';


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
        <Route path="/sports-academy" element={<SportsAcademyPage />} />
        <Route path="/Cricket" element={<Cricket />} />

        <Route path="/swimming" element={<Swimming />} />  
        <Route path="/Basketball" element={<Basketball />} />  
        <Route path="/Badminton" element={<Badminton />} />  
        <Route path="/Football" element={<Football />} />  
        <Route path="/Volleyball" element={<Volleyball />} />  
        <Route path="/Yoga" element={<Yoga />} />  
        <Route path="/Gym" element={<Gym />} />  
        <Route path="/fee" element={<FeeStructure />} />  

        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
