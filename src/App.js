import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePagemain from './Components/Homepage/HomePagemain';
import ScrollToTop from './Components/ScrollToTop';
import AboutusPage from './Components/Aboutuspage/AboutusPage';
import ServicePage from './Components/Servicepage/ServicePage';
import CareerPage from './Components/Careerpage/CareerPage';
import ContactusPage from './Components/Contactuspage/ContactusPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import Product from './Components/Productpage/Product';
import ResidentialSolar from './Components/Servicepage/ResidentialSolar';
import CommercialSolar from './Components/Servicepage/CommercialSolar';
import GovernmentandInstitutional from './Components/Servicepage/GovernmentandInstitutional';
import Designconsultancy from './Components/Servicepage/Designconsultancy';
import FullproductPage from './Components/Fullproducts/FullproductPage';
import Error404 from './Components/Error404';


function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePagemain />} />
          <Route path='/aboutus' element={<AboutusPage />} />
          <Route path='/project' element={<Product />} />
          <Route path='/product' element={<FullproductPage />} />
          <Route path='/service' element={<ServicePage />} />
          <Route path='/residentialsolar' element={<ResidentialSolar />} />
          <Route path='/commercialsolar' element={<CommercialSolar />} />
          <Route path='/governmentalsolar' element={<GovernmentandInstitutional />} />
          <Route path='/designconsultancy' element={<Designconsultancy />} />
          <Route path='/career' element={<CareerPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/contactus' element={<ContactusPage />} />
          <Route path='*' element={<Error404 />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
