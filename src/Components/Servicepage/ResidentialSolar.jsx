import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import HOC from '../HOC';
import { Link } from 'react-router-dom';

const images = [
  require("../../Assets/Images/residential solar (2.jpg"),
  require("../../Assets/Images/residential solar (3).jpg"),
  require("../../Assets/Images/residential solar (4).jpg")
];

function ResidentialSolar() {
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
              Residential Solar Solution

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
                Energy
              </div>
              <div
                className="ftittle "
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Power your home with solar energy
              </div>
            </div>

            <div className="row d-flex align-items-center">
              <div className="col-12 col-lg-7 mb-4 ">
                <div className="pera" style={{ textAlign: "justify" }}>
                  At Tharayil Power, we offer custom residential solar panel installations designed to meet the unique energy needs of homeowners. Solar energy helps you save on electricity bills and allows you to take control of your energy consumption.We understand that every home is different, which is why we provide tailored solar solutions that are care


                </div>
                <div className="py-3 pera" style={{ textAlign: "justify" }}>
                  fully planned to maximize energy generation. Whether you need a small-scale solar setup or a larger system to power your entire home, our team of experts will guide you through the process. We also offer battery storage systems to ensure that you have access to energy throughout the day and night, even during power outages or cloudy days.
                </div>
                <div className="pera">
                  <div>
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    With a solar energy solution from Tharayil Power, you'll experience a significant reduction in energy costs, contribute to a cleaner planet, and reduce your reliance on grid power.
                  </div>
                  <div className="py-3">
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    Our systems are designed for long-term durability, minimal maintenance, and optimal performance, ensuring that your home is powered by clean, renewable energy for years to come.

                  </div>

                </div>
              </div>
              <div className="col-12 col-lg-5 mb-4 ">
                <div className="solarinfoimg">
                  <div className="descr"></div>
                  <img
                    src={
                      require("../../Assets/Images/residential solar (1).jpg")
                    }
                    className="w-100 h-100 object-fit-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

       

          <div className="my-2 my-lg-4 mx-auto text-center" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
              <Link to={"/service"} className="text-decoration-none">
                <button className="button-48 mt-3" role="button">
                  <span className="btn_text fw-bold">
                  Back To Home
                   
                  </span>
                </button>
              </Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default HOC(ResidentialSolar);
