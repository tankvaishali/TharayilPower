// import React from "react";
// import { BiSolidPhoneCall } from "react-icons/bi";
// import { FaMailBulk } from "react-icons/fa";
// import { FaMapLocationDot } from "react-icons/fa6";

// function Contact() {
//   return (
//     <div className="contact-service-area overflow-hidden pb-sm-0 pb-5 mb-0 mb-lg-5">
//       <div className="container mb-0 my-lg-5 mb-lg-5">
//         <div className="row">
//           {/* Email Contact Box */}
//           <div className="col-lg-4 col-sm-12">

//               <div
//                 className="contact-service-box text-center my-4 my-lg-5 hover-border-6"
//                 data-aos="zoom-in"
//                 data-aos-duration="1500"
//               >
//                 <div className="contact-service-icon mb-4 text-white fs-3 d-inline-block lh-lg">
//                   <div className="d-flex align-items-center justify-content-center align-content-center h-100">
//                     <FaMailBulk />
//                   </div>
//                 </div>
//                 <div className="contact-inform-title pb-5">
//                   <h4 className="jr_tittle fs-4 fw-semibold text-capitalize py-1">E-mail</h4>
//                   <div className="pera px-4">
//                     <span>info@tharayilpower.com</span>
//                   </div>
//                 </div>
//                 <span className="hover-element"></span>
//               </div>

//           </div>

//           {/* Address Contact Box */}
//           <div className="col-lg-4 col-sm-12">

//               <div
//                 className="contact-service-box text-center my-4 my-lg-5 hover-border-6"
//                 data-aos="zoom-in"
//                 data-aos-duration="1500"
//               >
//                 <div className="contact-service-icon mb-4 text-white fs-3 d-inline-block lh-lg">
//                   <div className="d-flex align-items-center justify-content-center align-content-center h-100">
//                     <FaMapLocationDot />
//                   </div>
//                 </div>
//                 <div className="contact-inform-title pb-5">
//                   <h4 className="jr_tittle fs-4 fw-semibold text-capitalize py-1">Address</h4>
//                   <div className="pera px-4">
//                     <span>Tharayil House, Kalath Ward, Avalukkunnu.P.O, Alappuzha</span>
//                   </div>
//                 </div>
//                 <span className="hover-element"></span>
//               </div>

//           </div>

//           {/* Phone Contact Box */}
//           <div className="col-lg-4 col-sm-12">
//             <div
//               className="contact-service-box text-center my-4 my-lg-5 hover-border-6"
//               data-aos="zoom-in"
//               data-aos-duration="1500"
//             >
//               <div className="contact-service-icon mb-4 text-white fs-3 d-inline-block lh-lg">
//                 <div className="d-flex align-items-center justify-content-center align-content-center h-100">
//                   <BiSolidPhoneCall />
//                 </div>
//               </div>
//               <div className="contact-inform-title pb-5">
//                 <h4 className="jr_tittle fs-4 fw-semibold text-capitalize py-1">Phone no.</h4>
//                 <div className="pera px-4 py-1">

//                     (+91) 9074353623

//                 </div>
//                 <div className="pera px-4 py-1">

//                     (+91) 8129151266

//                 </div>
//                 <div className="pera px-4 py-1">

//                     (+91) 98129257524

//                 </div>
//               </div>
//               <span className="hover-element"></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMailBulk } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Contact() {
  const contactdata = [
    {
      icon: <FaMailBulk />,
      title: "E-mail",
      content: "info@tharayilpower.com",
      Link: "mailto:info@tharayilpower.com",
    },
    {
      icon: <FaMapLocationDot />,
      title: "Address",
      content: "Tharayil House, Kalath Ward, Avalukkunnu.P.O, Alappuzha",
      Link: "https://www.google.com/maps?q=21.19087440,72.74226350",
      delay: "400",
    },
    {
      icon: <BiSolidPhoneCall />,
      title: "Phone no.",
      content: "(+91) 80489 71629",
      Link: "tel:8048971629",
      delay: "800",
    },
  ];

  return (
    <>
      <div class="contact-service-area overflow-hidden pb-sm-0 pb-5">
        <div class="container my-3 my-lg-5">
          <div class="row">
            {/* {contactdata.map((contact) => (
                        <div class="col-lg-4 col-sm-12">
                            <Link to={contact.Link} className="text-decoration-none text-dark" target='_blank'>
                                <div class="contact-service-box text-center my-4 my-lg-5 hover-border-6" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay={contact.delay}>
                                    <div class="contact-service-icon mb-4 text-white fs-3 d-inline-block lh-lg">
                                        {contact.icon}
                                    </div>
                                    <div class="contact-inform-title pb-5">
                                        <h4 class='jr_tittle fs-4 fw-semibold text-capitalize'>{contact.title}</h4>
                                        <div class='pera'>{contact.content}</div>
                                    </div>
                                    <span class="hover-element"></span>
                                </div>
                            </Link>
                        </div>
                    ))} */}
            <div class="col-lg-4 col-sm-12">
              <Link
                to={"mailto:info@tharayilpower.com"}
                className="text-decoration-none text-dark"
                target="_blank"
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
                    <h4 class="jr_tittle fs-4 fw-semibold text-capitalize">
                      E-mail
                    </h4>
                    <div class="pera">info@tharayilpower.com</div>
                  </div>
                  <span class="hover-element"></span>
                </div>
              </Link>
            </div>
            <div class="col-lg-4 col-sm-12">
              <Link
                to={"https://www.google.com/maps?q=21.19087440,72.74226350"}
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
                  <div class="contact-inform-title pb-5">
                    <h4 class="jr_tittle fs-4 fw-semibold text-capitalize">
                      Address
                    </h4>
                    <div class="pera">
                      Tharayil House, Kalath Ward, Avalukkunnu.P.O, Alappuzha
                    </div>
                  </div>
                  <span class="hover-element"></span>
                </div>
              </Link>
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
                    <Link
                      to={"tel:9074353623"}
                      className="text-decoration-none text-dark"
                    >
                      (+91) 9074353623
                    </Link>
                  </div>
                  <div>
                    {" "}
                    <Link
                      to={"tel:8129151266"}
                      className="text-decoration-none text-dark"
                    >
                      (+91) 8129151266
                    </Link>
                  </div>
                  <div>
                    {" "}
                    <Link
                      to={"tel:8129257524"}
                      className="text-decoration-none text-dark"
                    >
                      (+91) 8129257524
                    </Link>
                  </div>
                </div>
                <span class="hover-element"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
