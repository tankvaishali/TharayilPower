import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

function GreenPlanet() {
  let energy = [
    {
      img: require("../../Assets/Images/green-energy4.png"),
      name: "Comprehensive Knowledge",
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolore veritatis deserunt.",
    },
    {
      img: require("../../Assets/Images/technology_3.png"),
      name: "Community Engagement",
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolore veritatis deserunt.",
    },
    {
      img: require("../../Assets/Images/ecosystem_1.png"),
      name: "Exceptional Support",
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolore veritatis deserunt.",
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi voluptas, quisquam obcaecati aliquam velit quos
                  aliquid dignissimos aut sed? Itaque. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </div>
                <div className="row g-4 mt-1">
                  {energy.map((x, i) => {
                    return (
                      <div className="col-12 col-md-12 col-lg-4" key={i}>
                        <div className="h-100 shadow p-4 d-flex flex-column justify-content-between bg-white position-relative energy-container">
                          <div className="energy_icon rounded-circle p-3 ">
                            <img
                              src={x.img}
                              alt=""
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
                      <Link to={"/Contactus"} className="text-decoration-none">
                        <button className="button-48 mt-3" role="button">
                          <span className="btn_text fw-bold">
                            More Detail
                            <span className="ps-1 fs-5 fw-bold">
                              <MdOutlineArrowOutward />
                            </span>
                          </span>
                        </button>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={"telto:+(91)1234567890"}
                        className="mt-3 mt-lg-0 text-decoration-none d-flex align-content-center align-items-center ps-0 ps-lg-3"
                      >
                        <div>
                          <Player
                            autoplay
                            loop
                            src="https://lottie.host/8d511f5d-1d72-4d09-9496-ad537f6a3e34/Urcfl9rkq8.json"
                            style={{ width: "80px", height: "80px" }}
                            className=" d-flex align-content-center align-items-center "
                          ></Player>
                        </div>
                        <div>
                          <div className="text-secondary  fw-medium">
                            Call For Help
                          </div>
                          <div className="fw-bold fs-4 text-success">
                            +(91) 9074353623
                          </div>
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

                  // src="https://www.slashgear.com/img/gallery/what-can-a-400-watt-solar-panel-power/l-intro-1710092944.jpg"
                  alt=""
                  className="img-fluid w-100 h-100 object-fit-cover image_energy_round"
                  style={{objectPosition:"bottom center"}}
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
