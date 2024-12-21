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
import Blog01 from './Components/Homepage/Blog01';
import Blog02 from './Components/Homepage/Blog02';
import Blog03 from './Components/Homepage/Blog03';
import Blog04 from './Components/Homepage/Blog04';
import Designconsultancy from './Components/Servicepage/Designconsultancy';
import FullproductPage from './Components/Fullproducts/FullproductPage';


function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePagemain />} />
          <Route path='/aboutus' element={<AboutusPage />} />
          <Route path='/product' element={<Product />} />
          <Route path='/fullproducts' element={<FullproductPage />} />
          <Route path='/service' element={<ServicePage />} />
          <Route path='/residentialsolar' element={<ResidentialSolar />} />
          <Route path='/commercialsolar' element={<CommercialSolar />} />
          <Route path='/governmentalsolar' element={<GovernmentandInstitutional />} />
          <Route path='/designconsultancy' element={<Designconsultancy />} />
          <Route path='/career' element={<CareerPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/contactus' element={<ContactusPage />} />
          <Route path='/blog01' element={<Blog01 />} />
          <Route path='/blog02' element={<Blog02 />} />
          <Route path='/blog03' element={<Blog03 />} />
          <Route path='/blog04' element={<Blog04 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
