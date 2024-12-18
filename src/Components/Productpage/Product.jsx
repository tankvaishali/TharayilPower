import React from 'react'
import ProductPage from './ProductPage'
import HighlitesImage from './HighlitesImage'
import HOC from '../HOC'
import "../../Assets/Css/Productcss.css";
import WorkProcess from './WorkProcess';
import GreenPlanet from './GreenPlanet';
import ClientLogo from '../ClientLogo';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import Calculator from '../Calculator';
import CalculatorMail from '../CalculatorMail';

function Product() {
  return (
    <>
        <div className="landingimage_product d-flex justify-content-center align-items-center align-content-center">
      <div className="container">
        <h1   className="textsizehead text-white text-center lh-base text_size fw-bold text-capitalize"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-once="true"
              style={{ letterSpacing: "1px" }}>
        Innovative Solar Projects That Shine
        </h1>
      </div>
      </div>
      <WorkProcess />
      
      {/* <ProductPage /> */}
      <GreenPlanet />
      {/* <Calculator/> */}
      <CalculatorMail/>
      <ClientLogo />
      <div className="highlite_image">
        <HighlitesImage />
      </div>
    </>
  );
}

export default HOC(Product);