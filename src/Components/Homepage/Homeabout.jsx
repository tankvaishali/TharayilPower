import React from "react";
import { MdCheckBox, MdOutlineEqualizer } from "react-icons/md";
import { Link } from "react-router-dom";

function Homeabout() {
  return (
    <>
      <div className="my-5 py-5 overflow-hidden">
        <div className="container py-3 overflow-hidden">
          <div className="row g-5">
            <div
              className="col-12 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div className="h-100">
                <div className="h-100">
                  <div className="grid-container">
                    <div className="gridc1 allimg">
                      <div className="desc1"></div>
                      <img
                        src="https://www.investopedia.com/thmb/HNgIWqoqYesoBAo6zqWc9LiiWlg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1278948452-e1fdce3baef44af28f449ab36d6717f3.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="gridc2 ">
                      <img
                        src={require("../../Assets/Images/Screenshot 2024-08-29 112544.png")}
                        alt=""
                        className="img-fluid animated-image"
                      />
                    </div>
                  </div>
                  <div className="col-12 allimg">
                    <div className="desc1"></div>
                    <img
                      src="https://d2tez01fe91909.cloudfront.net/wp-content/uploads/2023/01/AdobeStock_166916488-scaled-e1683923540796.jpeg.webp"
                      className="img-fluid w-100 "
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div className="h-100 d-block d-lg-flex flex-column justify-content-between">
                <div>
                  <div
                    className="font_stroke"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    About Us
                  </div>
                  <div
                    className="ftittle"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                   Let’s Build Kerala Solar Strong Together
                  </div>
                </div>
                <div className="pera py-3 text-secondary">
                Located in Kerala, Tharayil Power is committed to making renewable energy solutions accessible for homes, businesses, and institutions. With our expertise in solar and energy-saving technologies, we aim to deliver sustainable solutions that drive savings and environmental impact for our clients.
                </div>
                <div className="pera  pb-4 text-secondary">
<div className="text-dark fw-bold fs-6 py-1">
Our USPs at a Glance:
</div>
<div className="pb-1"><span className="fw-bold">- Trusted Quality</span> : Premium products and installations.</div>
<div><span className="fw-bold ">- Reliable Support: </span> : Dedicated after-sales service.</div>


  
                </div>

                <div className="row p-0 m-0">
                  <div className="col-12 col-md-6 p-0 m-0 pt-2">
                    <div className="d-flex align-content-center align-items-center  ">
                      <div
                        className="fs-1  p-2 p-md-3 text-success"
                        style={{ backgroundColor: "#4aab3d2a" }}
                      >
                        <MdOutlineEqualizer />
                      </div>
                      <div className="fs-5 px-3 fw-medium">
                        Building quality standard
                      </div>
                    </div>
                    <div className="pt-2 pt-md-4">
                      <div className="d-flex align-items-center align-items-lg-stretch   py-1">
                        <div className=" text-success fs-5">
                          <MdCheckBox />
                        </div>
                        <div className="ps-2 fw-medium">
                        Custom-tailored installations

                        </div>
                      </div>
                      <div className="d-flex align-items-center align-items-lg-stretch   py-1">
                        <div className=" text-success fs-5">
                          <MdCheckBox />
                        </div>
                        <div className="ps-2 fw-medium">Lower energy costs</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 p-0 m-0 pt-3 pt-md-2">
                    <div className="d-flex align-content-center align-items-center  ">
                      <div
                        className="fs-1  p-2 p-md-3 text-success"
                        style={{ backgroundColor: "#4aab3d2a" }}
                      >
                        <MdOutlineEqualizer />
                      </div>
                      <div className="fs-5 px-3 fw-medium">
                        Certified engineered team
                      </div>
                    </div>
                    <div className="pt-2 pt-md-4">
                      <div className="d-flex align-items-center align-items-lg-stretch  align-content-center   py-1">
                        <div className=" text-success fs-5">
                          <MdCheckBox />
                        </div>
                        <div className="ps-2 fw-medium">
                        Eco-friendly solutions

                        </div>
                      </div>
                      <div className="d-flex align-items-center align-items-lg-stretch  align-content-center   py-1">
                        <div className=" text-success fs-5">
                          <MdCheckBox />
                        </div>
                        <div className="ps-2 fw-medium">
                        Affordable,high-quality solutions

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="pt-2"
                  data-aos="zoom-in"
                  data-aos-duration="1800"
                  data-aos-once="true"
                >
                  <Link to={"/aboutus"} className="text-decoration-none">
                    <button className="button-48 mt-3" role="button">
                      <span className="btn_text fw-bold">about us</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homeabout;
