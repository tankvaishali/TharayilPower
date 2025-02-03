import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

function GreenPlanet() {
  let energy = [
    {
      img: require("../../Assets/Images/green-energy4.png"),
      name: "Comprehensive Knowledge ",
      lorem:
        "Expert guidance on renewable energy solutions tailored to maximize efficiency and sustainability.  ",
    },
    {
      img: require("../../Assets/Images/technology_3.png"),
      name: "Community Engagement  ",
      lorem:
        "Promoting clean energy awareness through educational initiatives and partnerships for a greener tomorrow. ",
    },
    {
      img: require("../../Assets/Images/ecosystem_1.png"),
      name: "Exceptional Customer Support  ",
      lorem:
        "Reliable assistance and maintenance services ensuring long-term performance and customer satisfaction. ",
    },
  ];

  return (
    <>
      <div className="work_bg overflow-hidden">
        <div className="container py-5">
          <div className="row p-0 m-0 g-5">
            <div className="col-12 col-lg-7 order-1 order-lg-0">
              <div className="h-100 d-flex flex-column justify-content-between">
                <div className="py-3 ">
                  <div
                    className="font_stroke"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    Solar Energy
                  </div>
                  <div
                    className="ftittle"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    Solar Energy lighting the path to a greener planet
                  </div>
                </div>
                <div className="text-secondary border-4 border-start border-success ps-3 pera">
                Experience our expertise in solar energy solutions, delivering reliable, eco-friendly systems with seamless installation and dedicated customer support, lighting the way to a sustainable and greener future.


                </div>
                <div className="row g-4 mt-1">
                  {energy.map((x, i) => {
                    return (
                      <div className="col-12 col-md-12 col-lg-4" key={i}>
                        <div className="h-100 shadow p-4 d-flex flex-column justify-content-between bg-white position-relative energy-container">
                          <div className="energy_icon rounded-circle p-3 ">
                            <img
                              src={x.img}
                              alt="not found"
                              className="img-fluid w-100 h-100 "
                            />
                          </div>
                          <div className="     pt-4 fw-bold  text-black energy-text">
                            {x.name}
                          </div>
                          <div className="pera energy text-white d-flex align-items-center align-content-center justify-content-center p-3 text-center">
                            {x.lorem}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div
                    className="mt-3  d-block d-lg-flex align-content-center align-items-center "
                    data-aos="zoom-in"
                    data-aos-duration="1800"
                    data-aos-once="true"
                  >
                    <div>
                      <Link to={"/service"} className="text-decoration-none">
                        <button className="button-48 mt-3">
                          <span className="btn_text fw-bold">
                            More Detail
                            <span className="ps-1 fs-5 fw-bold">
                              <MdOutlineArrowOutward />
                            </span>
                          </span>
                        </button>
                      </Link>
                    </div>
                    <div >
                      <Link to={"tel:8129331577"} className="mt-3 mt-lg-0 text-decoration-none d-flex align-content-center align-items-center">
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
                          <div className="fw-bold fs-4 text-success">+(91)81293 31577</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 order-0 order-lg-1">
              <div
                className="h-100 allimg"
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                <div className="desc2"></div>
                <img
                  src={require("../../Assets/Images/greenplanet.jpg")}
                  alt="not found"
                  className="img-fluid w-100 h-100 object-fit-cover image_energy_round"
                  style={{ objectPosition: "bottom center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GreenPlanet;
