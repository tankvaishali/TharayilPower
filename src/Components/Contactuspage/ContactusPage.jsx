import React from 'react'

import Contact from './Contact';
import "../../Assets/Css/ContactusCss.css"
import Form from './Form';
import Footer from '../Footer';
import Header from '../Header';
import ContactFooter from './ContactFooter';
import ClientLogo from '../ClientLogo';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

function ContactusPage() {
  return (
    <>
      <Header />
 
      <div className="landingimage_contact d-flex justify-content-center align-items-center align-content-center">
      <div className="container">
        <h1   className="textsizehead text-white text-center lh-base text_size fw-bold text-capitalize"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-once="true"
              style={{ letterSpacing: "1px" }}>
              Reach Out Now – We're Here to Power Your Solar Journey!
        </h1>
      </div>
      </div>
      <Contact />
      <div className="map mb-5">
        <div className="">
          <div
            class="w-100 overflow-hidden"
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-once="true"
          >
           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.9549340240146!2d76.3380907!3d9.5126451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b088571b9c23145%3A0x6e2e6b8c22fe8ba4!2sTharayil%20Power%20%26%20Energy%20Solutions%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1734427314574!5m2!1sen!2sin"
              width="100%"
              height="500px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "-280px" }}>
        <Form />
      </div>
      {/* <ClientLogo/> */}
      <ContactFooter />
    </>
  );
}

export default ContactusPage;