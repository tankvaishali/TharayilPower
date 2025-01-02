import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";



function ServiceWork() {
  return (
    <section className="service-section overflow-hidden">

      <div className="left-bg-color"></div>

      <div className="service-container py-5">
        {/* Left Images */}
        <div className="container py-3">
          <div className="row p-0 m-0 g-5">
            <div className="col-12 col-lg-3">
              <div
                className="h-100 allimg shadow"
                data-aos="fade-down"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                <div className="desc1"></div>
                <img
                  src="https://futuresolarandelectric.com/wp-content/uploads/elementor/thumbs/Solar-Incentives-qs0nbofnd44g8f23d61d4t5z8ce63pfb1ux0udkpvc.jpg"
                  alt="Solar incentives information"
                  className="img-fluid w-100 h-100 object-fit-cover rounded-3"
                  style={{ objectPosition: "bottom center" }}
                />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div
                className="h-100 allimg shadow"
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                <div className="desc1"></div>
                <img
                  src={require("../../Assets/Images/IMG-20240902-WA0006.jpg")}
                  alt="Solar incentives information"
                  className="img-fluid w-100 h-100 object-fit-cover rounded-3"
                  style={{ objectPosition: "bottom center" }}
                />
              </div>
            </div>

            {/* Right Text Content */}
            <div className="col-12 col-lg-6 ">
              <div className="h-100 d-flex align-content-center align-items-center">
                <div>
                  <div className="py-3">
                    <div
                      className="font_stroke"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-once="true"
                    >
                      We Work For You
                    </div>
                    <div
                      className="ftittle small_sizef"
                      data-aos="fade-down"
                      data-aos-duration="1500"
                      data-aos-once="true"
                    >
                      Solar Power that Works for You
                    </div>
                  </div>

                  <div className="text-secondary  pera "
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    We work for you, providing solar power that works for you

                  </div>
                  <div className="text-secondary  my-3 border-4 border-start border-success ps-3 pera "
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    We provide solar power solutions tailored to your needs, offering cost savings, energy independence, sustainability, and reliable performance, ensuring long-term benefits for homes and businesses.


                  </div>
                  <ul className="py-2 small_sizef"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"                  >
                    <li className="pera py-1 text-capitalize fw-medium"> cost savings</li>
                    <li className="pera py-1 text-capitalize fw-medium"> energy independence</li>
                    <li className="pera py-1 text-capitalize fw-medium"> sustainability</li>
                    <li className="pera py-1 text-capitalize fw-medium">  reliable performance</li>
                  </ul>
                  <div
                    className="mt-2"
                    data-aos="zoom-in"
                    data-aos-duration="1800"
                    data-aos-once="true"
                  >
                    <Link to={"/career"} className="text-decoration-none">
                      <button className="button-48 mt-3">
                        <span className="btn_text fw-bold">
                          Know More{" "}
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceWork;
