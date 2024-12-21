import React from "react";
import HOC from "../HOC";
import ProductPage from "../Productpage/ProductPage";
import Whytharayilpower from "./Whytharayilpower";
import Fullfaq from "./Fullfaq";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import ProductTestimonial from "./ProductTestimonial";
import ClientLogo from "../ClientLogo";

function FullProductPage() {


  return (
    <>
      <div className="landingimage_fullproducts d-flex justify-content-center align-items-center align-content-center">
        <div className="container">
          <h1 className="textsizehead text-white text-center lh-base text_size fw-bold text-capitalize"
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-once="true"
            style={{ letterSpacing: "1px" }}>
            Powering Dreams, Empowering Sustainability

          </h1>
        </div>
      </div>
      <Whytharayilpower />
      <ProductPage />
      <Fullfaq />
      <div className="container text-center">
        <div
          className="font_stroke"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          Energy Solutions

        </div>
        <div
          className="ftittle"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          Take the Next Step Towards Sustainable Energy Solutions

        </div>

        <div className="pera pt-4">With our range of durable, efficient products and unmatched customer support, Tharayil Power is here to help you transition to a greener future. Whether you’re looking to reduce energy costs or embrace clean energy, we’ve got you covered.
        </div>
        <div className="pera pt-4">We're here to make your energy journey simple and efficient.

        </div>
        <div className="my-5 mt-3">
          <Link to={"/Contactus"} className="text-decoration-none ">
            <button className="button-48 mt-3">
              <span className="btn_text fw-bold">
                Get In Touch Today
                <span className="ps-1 fs-5 fw-bold">
                  <MdOutlineArrowOutward />
                </span>
              </span>
            </button>
          </Link>
        </div>
      </div>
<ProductTestimonial/>
<ClientLogo/>
    </>
  )
}

export default HOC(FullProductPage);
