import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import HOC from '../HOC';
import { Link } from 'react-router-dom';

const images = [
  require("../../Assets/Images/milma 1.jpeg"),
  require("../../Assets/Images/WhatsApp Image 2025-01-31 at 12.02.53 PM.jpeg"),
  require("../../Assets/Images/WhatsApp Image 2025-01-31 at 12.02.52 PM.jpeg")
];

function CommercialSolar() {
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
              Commercial Solar Solutions

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
                Businesses
              </div>
              <div
                className="ftittle "
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Tailored solar systems for businesses
              </div>
            </div>

            <div className="row d-flex align-items-center my-2">
              <div className="col-12 col-lg-7 ">
                <div className="pera" style={{ textAlign: "justify" }}>
                  Tharayil Power specializes in providing commercial solar solutions that are designed to reduce operational costs and improve energy efficiency for businesses. Whether you are a small business or a large enterprise, our solar installations offer a reliable and cost-effective way to meet your energy needs while contributing to a more sustainable future.



                </div>
                <div className="py-3 pera" style={{ textAlign: "justify" }}>
                  Our team of experts works with businesses to design custom solar systems that integrate seamlessly with your operations. By harnessing the power of the sun, we help businesses lower their energy costs, reduce dependency on grid electricity, and improve their sustainability profile.

                </div>
                <div className="pera">
                  <div>
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    In addition to saving money, installing solar power systems enhances your company’s green credentials and attracts eco-conscious clients and partners.
                  </div>
                  <div className="py-3">
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    Whether it's rooftop solar installations or ground-mounted systems, we ensure that your business is positioned for success with advanced monitoring and energy management solutions that allow you to track and optimize energy usage, maximizing your savings.

                  </div>

                </div>
              </div>
              <div className="col-12 col-lg-5 ">
                <div className="solarinfoimg">
                  <div className="descr"></div>
                  <img
                    src={
                      require("../../Assets/Images/commercial solar (1).jpg")
                    }
                    className="w-100 h-100 object-fit-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* {/  Energy efficiency audits /} */}

          <div className="my-2 my-lg-4 mx-auto text-center" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
            <Link to={"/service"} className="text-decoration-none">
              <button className="button-48 mt-3">
                <span className="btn_text fw-bold">
                  Back

                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HOC(CommercialSolar);
