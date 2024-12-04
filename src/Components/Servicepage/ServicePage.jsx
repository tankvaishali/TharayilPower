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
      <div className="bg_main">
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center flex-column jr_tittle"
            style={{ height: "65vh" }}
          >
            <h2
              className="text-white text-center lh-base text_size fw-bold text-capitalize"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-once="true"
              style={{ letterSpacing: "1px" }}
            >
              Expert Support for Superior Solar Operation
            </h2>
            <div
              className="text-white mt-2 fs-6 fw-semibold"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <Link
                to={"/"}
                className="text-decoration-none text-white bgtittle"
              >
                Home
              </Link>{" "}
              <MdKeyboardDoubleArrowRight /> <span>Service</span>
            </div>
          </div>
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