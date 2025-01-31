import React from "react";
import CountUp from "react-countup";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

function Profatible() {
  return (
    <>
      <div className=" work_bg py-3 py-lg-5 overflow-hidden">
        <div className="container py-3 py-lg-5">
          <div className="row p-0 m-0 g-5 mb-5">
            <div className="col-12 col-lg-6">
              <div
                className="h-100 img_profatible d-flex flex-column justify-content-end allimg"
                data-aos="fade-right"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                <div className="desc1 z-0"></div>
                <div
                  className=" ms-auto z-1 bg-success  p-4 fw-bold profit_cont text-white text-center"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  performance, quality and realiability
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div className="h-100">
                <div
                  className="font_stroke"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  High-Profitable
                </div>
                <div
                  className="ftittle "
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Proven Renewable Energy Solution
                </div>
                <div className="py-3 pb-2 text-secondary pera"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  Tharayil Power’s solar systems offer a high return on
                  investment, combining energy savings with increased property
                  value. Designed for Kerala’s climate, our solar solutions are
                  optimized for durability, reliability, and
                  efficiency—empowering our clients to achieve long-term savings
                  and energy independence.
                </div>
                <div className=" my-2">
                  <Link to={"/project"} className="text-decoration-none " data-aos="zoom-in"
                    data-aos-duration="1500"
                    data-aos-once="true">
                    <button className="button-48 mt-3">
                      <span className="btn_text fw-bold fs-6">
                        Check Out Project {" "}
                        <span className="ps-1 fs-5 fw-bold">
                          <MdOutlineArrowOutward />
                        </span>
                      </span>
                    </button>
                  </Link>
                </div>
                <div className="row p-0 m-0">
                  <div className="col-12 col-md-6 p-0 m-0 pt-2">
                    <div className="h-100 fw-bold "
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                      data-aos-once="true"
                    >
                      <div className=" fs-1 text-success">
                        {" "}
                        <CountUp
                          end={1200}
                          enableScrollSpy={true}
                          separator=""
                        />{" "}
                        +
                      </div>
                      <div className=" fs-4 "> Project Completed</div>
                      <div className="pera text-secondary">
                        Delivering innovative and reliable solar solutions
                        across Kerala.
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 p-0 m-0 pt-2">
                    <div className="h-100 fw-bold" data-aos="zoom-in"
                      data-aos-duration="1500"
                      data-aos-once="true">
                      <div className=" fs-1 text-success">
                        {" "}
                        <CountUp
                          end={1200}
                          enableScrollSpy={true}
                          separator=""
                        />{" "}
                        +
                      </div>
                      <div className=" fs-4 ">Client Served</div>
                      <div className="pera text-secondary">
                        Trusted by a growing community of residents and
                        businesses.
                      </div>
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

export default Profatible;
