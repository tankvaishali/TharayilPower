import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function CeoMessage() {
  return (
    <>
      <div className="container overflow-hidden">
        <div className="row pt-3 pt-lg-0 m-0 g-4 align-items-center">
        <div className="col-12 col-lg-6  p-3 p-lg-5 pt-0" data-aos="zoom-in" data-aos-duration="1800"  data-aos-once="true" data-aos-delay="400">
        <div className="h-100">
              <div className="profile_bg h-100">
                <img
                  src={require("../../Assets/Images/STAFF PHOTOS/parul image.png")}
                  alt=""
                  className="img-fluid w-100 h-100 object-fit-contain image_rad ceoprofileimage p-4"
                 
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 " data-aos="fade-right" data-aos-duration="1800"  data-aos-once="true" data-aos-delay="400">
            <div className="h-100">
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                MD Message
              </div>
              <div
                className="ftittle"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                - Muniya Thulsidas
              </div>
              <div className="pt-4 pera">
                "At Tharayil Power, we’re not just creating solar solutions;
                we’re pioneering a movement towards a cleaner, greener Kerala.
                Our mission is to provide innovative solar solutions that
                empower communities and future-proof businesses. Every project
                we undertake reflects our commitment to sustainable energy and a
                brighter, more eco-friendly future."{" "}
              </div>
              <div className=" text-success fw-bold py-2">
                — Muniya Thulsidas, MD, Tharayil Power
              </div>
              <div style={{ width: 50 }} >
                {" "}
                <Link
                  to={
                    "https://in.linkedin.com/company/tharayil-power-energy-solutions-p-ltd"
                  }
                  target="_blank"
                  className="footericon text-center p-2 justify-content-center mx-1 d-flex text-decoration-none text-white linkicon"
                  style={{backgroundColor:"#0077b5"}}
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>

        </div>
        <div className="row p-0 m-0 g-4  mt-3 align-items-center">
       
          <div className="col-12 col-lg-6 pt-0 pt-lg-3 order-1 order-lg-0" data-aos="fade-left" data-aos-duration="1800"  data-aos-once="true" data-aos-delay="400">
            <div className="h-100">
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                CEO Message  
              </div>
              <div
                className="ftittle"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                - Thulsidas N
              </div>
              <div className="pt-4 pera">
              "Our goal at Tharayil Power is to make solar power simple, accessible, and valuable for every client we serve. From residential installations to large-scale commercial projects, we leverage cutting-edge technology and an expert team to deliver solutions that enhance efficiency, reduce costs, and support Kerala’s environmental goals."  {" "}
              </div>
              <div className=" text-success fw-bold py-2">
                — Thulsidas N, CEO, Tharayil Power
              </div>
              <div style={{ width: 50 }} >
                {" "}
                <Link
                  to={
                    "https://in.linkedin.com/company/tharayil-power-energy-solutions-p-ltd"
                  }
                  target="_blank"
                  className="footericon text-center p-2 justify-content-center mx-1 d-flex text-decoration-none text-white linkicon"
                  style={{backgroundColor:"#0077b5"}}
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 p-5 pt-0 pb-0 pb-lg-5 order-0 order-lg-1" data-aos="fade-right" data-aos-duration="1800"  data-aos-once="true" data-aos-delay="400">
            <div className="h-100">
              <div className="profile_bg h-100">
                <img
                  src={require("../../Assets/Images/STAFF PHOTOS/CEO-removebg-preview.png")}
                  alt=""
                  className="img-fluid w-100 h-100 object-fit-contain image_rad ceoprofileimage p-4"
                 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CeoMessage;
