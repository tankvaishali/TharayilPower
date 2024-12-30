
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMailBulk } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Contact() {

  return (
    <>
      <div class="contact-service-area overflow-hidden pb-sm-0 pb-5">
        <div class="container my-3 my-lg-5">
          <div class="row">
 
            <div class="col-lg-4 col-sm-12">
              <div
              
                className="text-decoration-none text-dark"
                target="_blank"
              >
                <div
                  class="contact-service-box text-center my-4 my-lg-5 hover-border-6"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-delay="400"
                  data-aos-once="true"
                >
                  <div class="contact-service-icon mb-4 text-white fs-3 d-inline-block lh-lg align-items-center justify-content-center align-content-center ">
                    <FaMapLocationDot />
                  </div>
                  <div class="contact-inform-title ">
                    <h4 class="jr_tittle fs-4 fw-semibold text-capitalize ">
                      Address
                    </h4>
                    <div class="pera pt-2 px-5">
                      Tharayil House, Kalath Ward, Avalukkunnu.P.O, Alappuzha.
                    </div>
                  </div>
                  <span class="hover-element"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12">
              <div
                class="contact-service-box text-center my-4 my-lg-5 hover-border-6"
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-delay="800"
                data-aos-once="true"
              >
                <div class="contact-service-icon mb-4 text-white fs-3 d-inline-block align-items-center justify-content-center align-content-center lh-lg">
                  <BiSolidPhoneCall />
                </div>
                <div class="contact-inform-title pb-5">
                  <h4 class="jr_tittle fs-4 fw-semibold text-capitalize">
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
                      (+91) 8129151266
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div
                   
                      className="text-decoration-none text-dark"
                    >
                      (+91) 8129257524
                    </div>
                  </div>
                </div>
                <span class="hover-element"></span>
              </div>
            </div>

            <div class="col-lg-4 col-sm-12">
              <div
            
                className="text-decoration-none text-dark"
         
              >
                <div
                  class="contact-service-box text-center my-4 my-lg-5 hover-border-6"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  <div class="contact-service-icon mb-4 text-white fs-3 d-inline-block lh-lg align-items-center justify-content-center align-content-center ">
                    <FaMailBulk />
                  </div>
                  <div class="contact-inform-title pb-5">
                    <h4 class="jr_tittle fs-4 fw-semibold text-capitalize pt-1">
                      E-mail
                    </h4>
                    <div class="pera pt-2">info@tharayilpower.com</div>
                  </div>
                  <span class="hover-element"></span>
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
