import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react'
import { MdCheckBox, MdOutlineArrowOutward, MdOutlineEqualizer } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Aboutus() {
  return (
    <>
      <div className="container py-5 pb-0 pb-lg-5 overflow-hidden">
        <div className="row p-0 m-0">
          <div className="col-12 col-lg-6">
            <div className="h-100"  data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">
              <div>
                <img
                  src={require("../../Assets/Images/choose_us-removebg-preview.png")}
                  alt=""
                  className="img-fluid w-100 h-100"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="h-100">
              <div>
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
                   Welcome to Tharayil Power
                  </div>
                  <div className="my-3  ps-3 border-4 border-start border-success pera">
                  As a trusted name in renewable energy solutions in Kerala, Tharayil Power is dedicated to transforming how homes, businesses, and institutions harness solar energy. We believe in delivering energy solutions that are not only efficient and reliable but also accessible to our community. With a commitment to sustainability and energy independence, we offer solar systems designed to meet Kerala's unique needs while saving costs and contributing to a greener future.
                  </div>
                  <div className="pb-2">
                    <div className="d-flex  py-1 fs-5">
                      <div className=" text-success ">
                        <MdCheckBox />
                      </div>
                      <div className="ps-2 fw-medium pera pt-1">
                      Reduced energy costs: Save significantly on monthly power bills with custom-designed solar solutions.
                      </div>
                    </div>
                    <div className="d-flex  py-1 fs-5">
                      <div className=" text-success ">
                        <MdCheckBox />
                      </div>
                      <div className="ps-2 fw-medium pera pt-1">
                      Expert project management: Each project is backed by precise planning and skilled execution.
                      </div>
                    </div>
                    <div className="d-flex  py-1 fs-5">
                      <div className=" text-success ">
                        <MdCheckBox />
                      </div>
                      <div className="ps-2 fw-medium pera pt-1">
                      Reliable service: From initial consultation to long-term maintenance, we support you every step of the way.
                      </div>
                    </div>

                    <div className="my-2 pera">
                    Experience the benefits of solar energy today, and let us show you how Tharayil Power can help build a sustainable future for Kerala.
                    </div>

                    <div className="mt-3 d-block d-lg-flex align-content-center align-items-center justify-content-between"  data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                      <div>
                        <Link to={"/product"} className="text-decoration-none">
                          <button className="button-48 mt-3" role="button">
                            <span className="btn_text fw-bold">
                              Read More{" "}
                              <span className="ps-1 fs-5 fw-bold">
                                <MdOutlineArrowOutward />
                              </span>
                            </span>
                          </button>
                        </Link>
                      </div>
                      <div >
                        <Link to={"tel:8129151266"} className="mt-3 mt-lg-0 text-decoration-none d-flex align-content-center align-items-center">
                          <div>
                            <Player
                              autoplay
                              loop
                              src="https://lottie.host/8d511f5d-1d72-4d09-9496-ad537f6a3e34/Urcfl9rkq8.json"
                              style={{ width: "80px", height: "80px" }}
                              className=" d-flex align-content-center align-items-center px-2"
                            ></Player>
                          </div>
                          <div>
                            <div className="text-secondary  fw-medium">
                              Call For Help
                            </div>
                            <div className="fw-bold fs-4 text-success">+(91)81291 51266</div>
                          </div>
                        </Link>
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

export default Aboutus