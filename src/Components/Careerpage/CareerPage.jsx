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
        <div className="landingimage_career d-flex justify-content-center align-items-center align-content-center">
      <div className="container">
        <h1   className="textsizehead text-white text-center lh-base text_size fw-bold text-capitalize"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-once="true"
              style={{ letterSpacing: "1px" }}>
                     Powering a Sustainable Future Together – Join Tharayil Power!

        </h1>
      </div>
      </div>
  
      <Whujoinus />
      <Position />
      <ClientLogo />
    </>
  );
}

export default HOC(CareerPage)