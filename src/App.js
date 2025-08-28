import { useEffect, useState } from 'react';
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
import Blog01 from './Components/Homepage/Blog01';
import Blog02 from './Components/Homepage/Blog02';
import Blog03 from './Components/Homepage/Blog03';
import Blog04 from './Components/Homepage/Blog04';

import Sidebar from './Components/Adminpanel/Sidebar';
import AdminForm from './Components/Adminpanel/AdminForm';
import ManageData from './Components/Adminpanel/ManageData';
import LoginPage from './Components/Adminpanel/LoginPage';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndCondition from './Components/TermsAndCondition';
import LandingPage from './Components/LandingPage';
import Datayojana from './Components/Datayojana';

function App() {


  const [login, setlogin] = useState(false)

  useEffect(() => {
    setlogin((localStorage.getItem("login")))
  }, [login])

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        {
          login ?
            <><div className="main_form d-flex">

              <Sidebar />
              <div className="main-content p-4 p-lg-5 flex-grow-1">
                <Routes>
                  <Route path="/" element={<AdminForm setlogin={setlogin} />} />
                  <Route path="/add-data" element={<AdminForm setlogin={setlogin} />} />
                  <Route path="/manage-data" element={<ManageData />} />
                </Routes>
              </div>
            </div>
            </>
            :
            <>
              <Routes>
                <Route path="/admin-tharayil" element={<LoginPage setlogin={setlogin} />} />
                {/* <Route path="*" element={<LoginPage setlogin={setlogin} />} /> */}
                <Route path='/' element={<HomePagemain />} />
                <Route path='/benefits-of-solar-system' element={<Blog01 />} />
                <Route path='/commercial-solar-blog' element={<Blog02 />} />
                <Route path='/blog03' element={<Blog03 />} />
                <Route path='/design-solar-system' element={<Blog04 />} />
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
                <Route path='/privacypolicy' element={<PrivacyPolicy />} />
                <Route path='/termsconditions' element={<TermsAndCondition />} />
                <Route path='/tharayilandsuryagarh' element={<LandingPage/>}/>
                <Route path='/datayojana' element={<Datayojana/>}/>
                <Route path='*' element={<Error404 />} />
              </Routes>
            </>
        }
      </BrowserRouter>
    </>
  );
}

export default App;
