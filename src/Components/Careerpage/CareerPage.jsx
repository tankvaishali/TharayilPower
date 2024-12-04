import React from 'react'
import HOC from '../HOC'
import Whujoinus from './Whujoinus'
import "../../Assets/Css/Careercss.css"
import Position from './Position'
import ClientLogo from '../ClientLogo'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

function CareerPage() {
  return (
    <>
      <div className="bg_main">
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center flex-column jr_tittle"
            style={{ height: "75vh" }}
          >
            <h2
              className="text-white text-center lh-base text_size fw-bold text-capitalize"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-once="true"
              style={{ letterSpacing: "1px" }}
            >
              Powering a Sustainable Future Together – Join Tharayil Power!
            </h2>
            <div
              className="text-white mt-2 fs-6 fw-semibold"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-once="true"
              data-aos-duration="1800"
            >
              <Link
                to={"/"}
                className="text-decoration-none text-white bgtittle"
              >
                Home
              </Link>{" "}
              <MdKeyboardDoubleArrowRight /> <span>Career</span>
            </div>
          </div>
        </div>
      </div>
      <Whujoinus />
      <Position />
      <ClientLogo />
    </>
  );
}

export default HOC(CareerPage)