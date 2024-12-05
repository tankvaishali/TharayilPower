import React from 'react'
import HOC from '../HOC'
import Benefits from './Benefits';
import "../../Assets/Css/Servicecss.css"
import ServiceWork from './ServiceWork';
import Faq from './Faq';
import Homeservice from '../Homepage/Homeservice';
import ClientLogo from '../ClientLogo';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

function ServicePage() {
  return (
    <>
        <div className="landingimage_service d-flex justify-content-center align-items-center align-content-center">
      <div className="container">
        <h1   className="text-white text-center lh-base text_size fw-bold text-capitalize"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-once="true"
              style={{ letterSpacing: "1px" }}>
                     Expert Support for Superior Solar Operation
        </h1>
      </div>
      </div>
      <Homeservice />
      <Benefits />
      <ServiceWork />
      <Faq />
      <ClientLogo />
    </>
  );
}

export default HOC(ServicePage);