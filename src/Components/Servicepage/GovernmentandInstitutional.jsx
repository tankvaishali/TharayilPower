import React from 'react'
import HOC from '../HOC';
import { Link } from 'react-router-dom';

const images = [
  require("../../Assets/Images/CFSC PUBLIC INSTITUTION.jpeg"),
  require("../../Assets/Images/GHSS MUTHUVALLUR.jpg"),
  require("../../Assets/Images/LIC.jpeg"),
];

function Covernmentandlinstitutional() {
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
              Government and Institutional Solutions


            </div>
          </div>

    
          <div>
            <div className="row justify-content-center mt-4">
              {images.map((image, index) => (
                <div className="col-12 col-md-6 col-lg-4 mt-4" key={index}>
                  <div className="solarinfoimg mb-4 h-100">
                    <div className="descr"></div>
                    <img
                      src={image}
                      className="w-100 h-100 object-fit-cover"
                      alt="not found"
                    />
                  </div>
                </div>
              ))}
            </div>



          </div>

          <div>
            <div className="pt-3 pt-lg-5">
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                buildings and institutions
              </div>
              <div
                className="ftittle "
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Solar solutions for government buildings and institutions
              </div>
            </div>

            <div className="row d-flex align-items-center my-2">
              <div className="col-12 col-lg-7 ">
                <div className="pera" style={{ textAlign: "justify" }}>
                  At Tharayil Power, we understand the growing importance of sustainability in public and institutional spaces. We specialize in providing solar energy solutions for government buildings, educational institutions, and non-profit organizations that align with their sustainability goals.

                </div>
                <div className="py-3 pera" style={{ textAlign: "justify" }}>
                  Our solar systems help reduce energy consumption, lower operational costs, and minimize the environmental footprint of government and institutional facilities. We provide comprehensive solar installations for campuses, administrative buildings, schools, and other institutional spaces. These solutions not only provide energy cost savings but also serve as practical, green energy models for communities and students to learn from and adopt in their own lives.

                </div>
                <div className="py-3 pera" style={{ textAlign: "justify" }}>
                  By implementing solar power solutions, government bodies and institutions can reduce their carbon footprint, and achieve greater energy self-sufficiency, all while making a significant contribution to national and global sustainability targets.

                </div>

              </div>
              <div className="col-12 col-lg-5 ">
                <div className="solarinfoimg">
                  <div className="descr"></div>
                  <img
                    src={
                      require("../../Assets/Images/CFSC PUBLIC INSTITUTION.jpeg")
                    }
                    className="w-100 h-100 object-fit-cover"
                    alt="not found"
                  />
                </div>
              </div>
            </div>
          </div>


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

export default HOC(Covernmentandlinstitutional);
