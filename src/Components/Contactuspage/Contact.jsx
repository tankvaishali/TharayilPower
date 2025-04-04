
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMailBulk } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

function Contact() {

  return (
    <>
      <div className="contact-service-area overflow-hidden pb-sm-0 pb-5">
        <div className="container my-3 my-lg-5">
          <div className="row">
 
            <div className="col-lg-4 col-sm-12">
              <div
              
                className="text-decoration-none text-dark"
                target="_blank"
              >
                <div
                  className="contact-service-box text-center my-4 my-lg-5 hover-border-6"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-delay="400"
                  data-aos-once="true"
                >
                  <div className="contact-service-icon mb-4 text-white fs-3 d-inline-block lh-lg align-items-center justify-content-center align-content-center ">
                    <FaMapLocationDot />
                  </div>
                  <div className="contact-inform-title ">
                    <h4 className="jr_tittle fs-4 fw-semibold text-capitalize ">
                      Address
                    </h4>
                    <div className="pera pt-2 px-5">
                      Tharayil House, Kalath Ward, Avalukkunnu.P.O, Alappuzha, Kerala 688006.
                    </div>
                  </div>
                  <span className="hover-element"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div
                className="contact-service-box text-center my-4 my-lg-5 hover-border-6"
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-delay="800"
                data-aos-once="true"
              >
                <div className="contact-service-icon mb-4 text-white fs-3 d-inline-block align-items-center justify-content-center align-content-center lh-lg">
                  <BiSolidPhoneCall />
                </div>
                <div className="contact-inform-title pb-5">
                  <h4 className="jr_tittle fs-4 fw-semibold text-capitalize">
                    Phone no.
                  </h4>
                  <div>
                    {" "}
                    <div
                     
                      className="text-decoration-none text-dark"
                    >
                      (+91) 9074353623
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div
                    
                      className="text-decoration-none text-dark"
                    >
                      (+91) 8943895436
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div
                   
                      className="text-decoration-none text-dark"
                    >
                      (+91) 8129331577
                    </div>
                  </div>
                </div>
                <span className="hover-element"></span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-12">
              <div
            
                className="text-decoration-none text-dark"
         
              >
                <div
                  className="contact-service-box text-center my-4 my-lg-5 hover-border-6"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  <div className="contact-service-icon mb-4 text-white fs-3 d-inline-block lh-lg align-items-center justify-content-center align-content-center ">
                    <FaMailBulk />
                  </div>
                  <div className="contact-inform-title pb-5">
                    <h4 className="jr_tittle fs-4 fw-semibold text-capitalize pt-1">
                      E-mail
                    </h4>
                    <div className="pera pt-2">info@tharayilpower.com</div>
                  </div>
                  <span className="hover-element"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
