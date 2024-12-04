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
             Reach Out Now – We're Here to Power Your Solar Journey!
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
              <MdKeyboardDoubleArrowRight /> <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <div className="map mb-5">
        <div className="container-xxl">
          <div
            class="w-100 overflow-hidden"
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3720.032335796444!2d72.73968857526117!3d21.190874380499274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDExJzI3LjIiTiA3MsKwNDQnMzIuMiJF!5e0!3m2!1sen!2sin!4v1720333542765!5m2!1sen!2sin"
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