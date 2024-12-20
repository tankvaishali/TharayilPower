import React from 'react';
import HOC from '../HOC';
import Certificate from './Certificate';
import "../../Assets/Css/Profilecss.css";
import SolarVideo from './SolarVideo';
import Brochures from './Brochures';
import Gallery from './Gallery';
import ClientLogo from '../ClientLogo';
import CeoMessage from './CeoMessage';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';
function ProfilePage() {
  return (
    <>
      <div className="landingimage_profile d-flex justify-content-center align-items-center align-content-center">
        <div className="container">
          <h1 className="textsizehead text-white text-center lh-base text_size fw-bold text-capitalize"
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-once="true"
            style={{ letterSpacing: "1px" }}>
            Tharayil Power – Kerala's Trusted Leader in Sustainable Solar Solutions

          </h1>
        </div>
      </div>



      <div className='container text-center my-5 py-3'>
        <div
          className="font_stroke"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          Profile
        </div>
        <div
          className="ftittle"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          Achievements & Milestones
        </div>
        <div className="pera py-2" data-aos="fade-up" data-aos-duration="1800" data-aos-once="true" data-aos-delay="400">Tharayil Power has been at the forefront of renewable energy in Kerala, dedicated to providing top-tier solar solutions that empower homes, businesses, and communities. With a deep commitment to quality, innovation, and environmental responsibility, we offer end-to-end solar services tailored to Kerala’s unique climate and energy needs. Our expert team designs, installs, and maintains solar systems that maximize efficiency and minimize costs, making sustainable energy accessible for all.</div>
        <div data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true" data-aos-delay="400">
          <Link to={"/aboutus"} className="text-decoration-none"  >
            <button className="button-48 mt-3">
              <span className="btn_text fw-bold">
                Know More{" "}
                <span className="ps-1 fs-5 fw-bold">
                  <MdOutlineArrowOutward />
                </span>
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div style={{ marginTop: "50px" }}>
        <CeoMessage />
      </div>
      <Certificate />
      <SolarVideo />
      <Brochures />
      <Gallery />
      <ClientLogo />
    </>
  );
}

export default HOC(ProfilePage);