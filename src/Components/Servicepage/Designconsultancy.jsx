import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import HOC from '../HOC';

const images = [
  require("../../Assets/Images/design consultancy (1).jpg"),
  require("../../Assets/Images/design consultancy (2).jpg"),
  require("../../Assets/Images/design consultancy (3).jpg")
];

function Designconsultancy() {
  return (
    <>
      <div className="my-5">
        <div className="container pb-5">
          <div className="text-center ">
            <div
              className="font_stroke"
              data-aos="fade-up"
              data-aos-duration="1500"

              data-aos-once="true"
            >
              solar Solution
            </div>
            <div
              className="ftittle "
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Design Consultancy


            </div>
          </div>

          {/* {/ Solar Panel Installation /} */}
          <div>
            <div className="row justify-content-center mt-4">
              {images.map((image, index) => (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                  <div className="solarinfoimg mb-4">
                    <div className="descr"></div>
                    <img
                      src={image}
                      className="w-100 h-100 object-fit-cover"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* {/ Battery storage solutions /} */}
          <div>
            <div className="pt-3 pt-lg-5">
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Expert design
              </div>
              <div
                className="ftittle "
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Expert design consultancy for optimized solar projects
              </div>
            </div>

            <div className="row d-flex align-items-center my-2">
              <div className="col-12 col-lg-7 ">
                <div className="pera" style={{ textAlign: "justify" }}>
                  At Tharayil Power, we provide design consultancy services that ensure your solar project is both efficient and effective. Our team of engineers and energy specialists conducts feasibility studies, detailed analysis, and tailored recommendations to guide the optimal design of your solar energy system.


                </div>
                <div className="py-3 pera" style={{ textAlign: "justify" }}>
                  Through our engineering expertise, we create precise engineering drawings and system blueprints that ensure each solar installation achieves maximum energy efficiency, performance, and longevity. Whether you're installing solar panels for your home, business, or government building, our consultants ensure that every component of the project is designed for optimal energy output.


                </div>
                <div className="pera">
                  <div>
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    Our design consultancy services extend to evaluating structural conditions, shade analysis, site preparation, and energy usage forecasting to determine the best positioning of panels and battery systems for your project.
                  </div>
                  <div className="py-3">
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    From initial planning to final installation, we are committed to ensuring that your project is delivered smoothly and maximizes the return on investment.

                  </div>

                </div>
              </div>
              <div className="col-12 col-lg-5 ">
                <div className="solarinfoimg">
                  <div className="descr"></div>
                  <img
                    src={
                      require("../../Assets/Images/design consultancy (4).jpg")
                    }
                    className="w-100 h-100 object-fit-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* {/  Energy efficiency audits /} */}

          {/* <div className="my-2 my-lg-4 mx-auto text-center" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
              <Link to={"/service"} className="text-decoration-none">
                <button className="button-48 mt-3" role="button">
                  <span className="btn_text fw-bold">
                  Back To Home
                   
                  </span>
                </button>
              </Link>
            </div> */}
        </div>
      </div>
    </>
  );
}

export default HOC(Designconsultancy);
