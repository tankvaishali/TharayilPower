import React from "react";

function WorkProcess() {
  return (
    <div className=" py-0 py-lg-2 overflow-hidden">
      <div className="container py-3 py-lg-5">
        <div className="row p-0 m-0 g-5">
          <div className="col-12 pb-0 pb-lg-5">
            <div className="row align-items-center ">
              <div className="col-12 col-lg-6">
                <div className="h-100">
                  <div className=" work fw-bolder text-center text-lg-start" data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">
                    WORK
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="row p-0 m-0 g-4 ">
                  <div className="col-12 col-lg-6">
                    <div
                      className="h-100 text-center shadow  pt-4 px-2 d-flex flex-column justify-content-between"
                      style={{ backgroundColor: "#3f74382a" }}
                      data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true"
                    >
                      <div
                        className="fw-bold fs-5"
                        style={{ color: "var(--green--)" }}
                      >
                        Briefing & Research
                      </div>
                      <div className="text-secondary pt-2 pera px-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Praesentium, aliquid.
                      </div>
                      <div className="fw-bold ms-auto opacity_font fs-1 text-end">
                        01
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div
                      className="h-100 text-center shadow pt-4 px-2 d-flex flex-column justify-content-between"
                      style={{ backgroundColor: "#3f74382a" }}
                      data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true"

                    >
                      <div
                        className="fw-bold fs-5"
                        style={{ color: "var(--green--)" }}
                      >
                        Brainstroming
                      </div>
                      <div className="text-secondary pt-2 pera px-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Praesentium, aliquid.
                      </div>
                      <div className="fw-bold ms-auto opacity_font fs-1 w-100 text-end">
                        02
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <hr></hr> */}
          <div className="col-12 mt-lg-0 border-2 border-top pt-lg-4 pt-0">
            <div className="row align-items-center ">
              <div className="col-12 col-lg-6 order-lg-0 order-1">
                <div className="row p-0 m-0 g-4">
                  <div className="col-12 col-lg-6 ">
                    <div
                      className="h-100 text-center shadow  pt-4 px-2  d-flex flex-column justify-content-between"
                      style={{ backgroundColor: "#3f74382a" }}
                      data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true"
                    >
                      <div
                        className="fw-bold fs-5"
                        style={{ color: "var(--green--)" }}


                      >
                        production
                      </div>
                      <div className="text-secondary pt-2 pera px-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Praesentium, aliquid.
                      </div>
                      <div className="fw-bold ms-auto opacity_font fs-1 text-end mt-auto">
                        03
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div
                      className="h-100 text-center shadow  pt-4 px-2  d-flex flex-column justify-content-between"
                      style={{ backgroundColor: "#3f74382a" }}
                      data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true"

                    >
                      <div
                        className="fw-bold fs-5"
                        style={{ color: "var(--green--)" }}
                      >
                        Quality Assurance
                      </div>
                      <div className="text-secondary pt-2 pera px-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Praesentium, aliquid.
                      </div>
                      <div className="fw-bold ms-auto opacity_font fs-1 w-100 text-end mt-auto">
                        04
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 order-lg-1 order-0">
                <div className="h-100">

                  <div className=" work fw-bolder text-center text-lg-end" data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">
                    Process
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
