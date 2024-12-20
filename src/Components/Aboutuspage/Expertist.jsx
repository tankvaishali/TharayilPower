import React from "react";
import CountUp from "react-countup";
import { MdCheckBox } from "react-icons/md";
import { Link } from "react-router-dom";

function Expertist() {
  let experts = [
    {
      name: "Customized solar designs for maximum efficiency",
    },
    {
      name: "Expert engineering and precision installation",
    },
   
    {
      name: "Scalable solutions for long-term growth",
    },
    {
      name: "Energy storage options for enhanced reliability",
    },
    {
      name: "Regular maintenance and support to ensure optimal performance",

    },
    {
      name: "Government subsidy guidance for affordability",

    },

  ];
  return (
    <>
      <div className="ex_bg mt-3 mt-lg-5 pb-0 pb-lg-5 overflow-hidden">
        <div className="container pb-5">
          <div className="row p-0 m-0 g-5 py-0 py-lg-5 mb-4">
            <div className="col-12 col-lg-7 pt-3 pt-lg-5">
              <div className="h-100">
                <div
                  className="font_stroke"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
              
                  Expertise & Experience  


                </div>
                <div
                  className="ftittle "
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
               Bringing Expertise to Every Project
                </div>

                <div className="mt-4 text-secondary fw-medium pera" 
                 data-aos="fade-up"
                 data-aos-duration="1500"
                 data-aos-once="true"
                 data-aos-delay="200"
                >
                With decades of experience in solar energy, our team at Tharayil Power specializes in designing and implementing effective solar solutions tailored to individual needs. Our portfolio spans residential, commercial, and institutional projects across Kerala. 
                </div>
                <div className="row p-0 m-0 g-4">
                  {experts.map((x, i) => {
                    return (
                      <>
                        <div className="col-12 col-lg-6 ps-0 ps-lg-3" key={i}>
                          <div
                            className="h-100 shadow bg-white   "
                            data-aos="zoom-in"
                            data-aos-duration="1800"
                            data-aos-once="true"
                            data-aos-delay="500"
                          >
                            <div className="d-flex align-items-center align-items-lg-stretch  ps-2  p-1 ">
                              <div className=" text-success fs-5">
                                <MdCheckBox />
                              </div>
                              <div className="ps-2 fw-bold pera pt-1">{x.name}</div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="text-center mt-2"
                
                data-aos="zoom-in"
                            data-aos-duration="1800"
                            
                         
                        data-aos-once="true">
                        <Link to={"/service"} className="text-decoration-none ">
                          <button className="button-48 mt-3" role="button">
                            <span className="btn_text fw-bold fs-6">
                            Explore Solutions {" "}
                  
                            </span>
                          </button>
                        </Link>
                      </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 pt-5">
              <div
                className="h-100 position-relative"
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                <img
                src={require("../../Assets/Images/highlits4.jpg")}
                  // src="https://english.news.cn/20240103/46e63f8f2b1a4739bc31cb2419991447/601ade44cb6445a3a38332e9020efc61.jpg"
                  alt=""
                  className="img-fluid w-100 h-100 object-fit-cover rounded-circle rounded-bottom-0"
                  style={{ zIndex: 0 }}
                />
                <div className="fs-4 bg-white rounded-pill shadow p-1 p-lg-2 px-4 client position-absolute">
                  <div className="d-flex justify-content-between align-items-center align-content-center">
                    <div>
                      <img
                        src={require("../../Assets/Images/icon_certi.png")}
                        alt=""
                        className="img-fluid rounded-circle"
                        height={60}
                        width={60}
                      />
                    </div>
                    <div
                      className="px-3 "
                      data-aos="zoom-in"
                      data-aos-duration="1800"
                      data-aos-once="true"
                    >
                      <div className="fw-bold ">
                        <CountUp end={1200} separator=""  enableScrollSpy={true} />+
                      </div>
                      <div className="fw-medium "> Expertise</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expertist;
