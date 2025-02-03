import React from 'react';
import { FaCheckCircle, FaHandsHelping, FaShieldAlt, FaTag, FaWrench } from 'react-icons/fa';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Whychooseus() {
  let chooseus = [
    {
      icon: <FaShieldAlt />,
      name: "Long-lasting, high-quality systems",
      pera: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iusto.",
    },
    {
      icon: <  FaHandsHelping />,
      name: "Tailored solar designs for every need",
      pera: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iusto.",
    },
    {
      icon: <FaWrench />,
      name: "Exceptional customer support",
      pera: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iusto.",
    },
    {
      icon: <FaTag />,
      name: "Competitive pricing",
      pera: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iusto.",
    },
  ];
  return (
    <>
      <div>
        <div className="container pb-3 pb-lg-5 my-5 overflow-hidden">
          <div className="row p-0 m-0 pt-4">
            <div className="col-12 col-lg-6">
              <div>
                <div
                  className="font_stroke"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  why Choose Us
                </div>
                <div
                  className="ftittle"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  People are Choosing Us for Superior Solar
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div
                className="h-100 text-start  pera pt-2 pt-lg-5"
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                Tharayil Power stands out for its commitment to high-quality, reliable, and cost-effective solar solutions. Join our growing community of customers benefiting from trusted renewable energy services designed to maximize savings and environmental impact.
              </div>
            </div>

            <div className="col-12 col-lg-4 mt-3 mt-lg-5 ">
              <div
                className="h-100 "
                data-aos="fade-right"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                <div>
                  <div className="fw-bold text-success"> What Sets Us Apart:</div>
                  <div className="pera ">

                    With over a decade of expertise, Tharayil Power blends advanced technology with customized solar solutions to suit every client’s unique energy needs. Our mission is to ensure that each project delivers the best possible outcome in terms of performance, savings, and environmental impact.

                  </div>

                  <div className="pt-2">
                    <div className="d-flex align-content-center align-items-center  py-1">
                      <div className=" text-success fs-5">
                        <FaCheckCircle />
                      </div>
                      <div className="ps-2 fw-medium ">
                        Rigorous quality assurance
                      </div>
                    </div>
                    <div className="d-flex align-content-center align-items-center  py-1">
                      <div className=" text-success fs-5">
                        <FaCheckCircle />
                      </div>
                      <div className="ps-2 fw-medium ">
                        Professional installation and setup
                      </div>
                    </div>
                    <div className="d-flex align-content-center align-items-center  py-1">
                      <div className=" text-success fs-5">
                        <FaCheckCircle />
                      </div>
                      <div className="ps-2 fw-medium ">
                        Sustainable, eco-friendly solutions
                      </div>
                    </div>
                    <div className="d-flex align-content-center align-items-center align-items-lg-stretch  py-1">
                      <div className=" text-success fs-5">
                        <FaCheckCircle />
                      </div>
                      <div className="ps-2 fw-medium ">
                        Custom solar systems for maximum efficiency
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link to={"/service"} className="text-decoration-none">
                      <button className="button-48 mt-3">
                        <span className="btn_text fw-bold">
                          Learn More{" "}
                          <span className="ps-1 fs-5 fw-bold">
                            <MdOutlineArrowOutward />
                          </span>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4  mt-3 mt-lg-5 ">
              <div
                className="h-100 py-3 py-lg-0"
                data-aos="fade-down"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                <img
                  src={require("../../Assets/Images/Screenshot_2024-08-30_160049-removebg-preview.png")}
                  alt="not found"
                  className="img-fluid w-100 h-100 object-fit-contain object-fit-xxl-cover animated-image_slow"
                />
              </div>
            </div>
            <div className="col-12 col-lg-4 mt-3 ps-0 ps-lg-5">
              <div
                className="h-100 d-flex flex-column justify-content-around"
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                {chooseus.map((x, i) => {
                  return (
                    <>
                      <div className=" mt-2 " key={i}>
                        <div className="d-flex    py-1 align-content-center  align-items-center">
                          <div className=" text-white bg-success icon_circle fs-2  p-3 d-flex align-items-center justify-content-center align-content-center  ">
                            {x.icon}
                          </div>
                          <div>
                            <div className="ps-3 fw-semibold " style={{ fontSize: 17 }}>{x.name}</div>
                         
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whychooseus