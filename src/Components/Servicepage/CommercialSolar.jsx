import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import HOC from "../HOC";
import { Link } from "react-router-dom";

const images = [
  "https://img.freepik.com/premium-photo/engineer-working-floating-solar-farmchecking-maintenance-with-solar-batteries-near-solar-panelssupervisor-check-system-solar-power-station_44277-28053.jpg?ga=GA1.1.949763891.1720709653&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/man-with-white-helmet-near-solar-panel_1157-29969.jpg?ga=GA1.1.949763891.1720709653",
  "https://img.freepik.com/free-photo/foreman-businessman-solar-energy-station_1157-35710.jpg?ga=GA1.1.949763891.1720709653",
];

function CommercialSolar() {
  return (
    <>
      <div className="my-5">
        <div className="container">
          <div className="py-3 py-lg-5 text-center">
            <div
              className="font_stroke"
              data-aos="fade-up"
              data-aos-duration="1500" data-aos-once="true"
            >
              solar solution
            </div>
            <div
              className="ftittle "
              data-aos="fade-down"
              data-aos-duration="1500" data-aos-once="true"
            >
              Commercial Solar Solutions
            </div>
          </div>

          {/* {/ Custom solar energy systems /}
          
          */}
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
            <div className="py-3 py-lg-5">
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500" data-aos-once="true"
              >
                Energy
              </div>
              <div
                className="ftittle "
                data-aos="fade-down"
                data-aos-duration="1500" data-aos-once="true"
              >
                Custom Solar Energy Systems
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-7 mb-4">
                <div className="pera" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque fuga aperiam reprehenderit, ea, repellendus impedit
                  libero pariatur modi, nisi numquam culpa? Eligendi a
                  voluptatibus, tenetur sint deleniti consequuntur aperiam vitae
                  perferendis officiis rem dolorem dolor voluptas dicta magni
                  cupiditate blanditiis.
                </div>
                <div className="py-3 pera">
                  <div>
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, quis.
                  </div>
                  <div className="py-2">
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, quis.
                  </div>
                  <div>
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, quis.
                  </div>
                </div>
                <div className="pera" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis rem, magnam beatae eveniet cupiditate quisquam
                  aperiam excepturi fugiat corporis nam ducimus, soluta facere
                  porro aut aliquid eum numquam sapiente, debitis ipsam!
                  Mollitia magni dolor placeat vero amet nobis consequatur
                  voluptates!
                </div>
              </div>
              <div className="col-12 col-lg-5 mb-4">
                <div className="solarinfotbl text-white rounded-3">
                  <table className="w-100">
                    <tbody>
                      <tr className="border border-1 border-white">
                        <td className="fw-bold p-3">VOLTAGE:</td>
                        <td className="p-3">
                          <span>23.56</span>
                        </td>
                      </tr>
                      <tr className="border border-1 border-white">
                        <td className="fw-bold p-3">MODULE EFFICIENCY:</td>
                        <td className="p-3">
                          <span>18.70</span>
                        </td>
                      </tr>
                      <tr className="border border-1 border-white">
                        <td className="fw-bold p-3">CAPACITY:</td>
                        <td className="p-3">
                          <span>1kW</span>
                        </td>
                      </tr>
                      <tr className="border border-1 border-white">
                        <td className="fw-bold p-3">WARRANTY:</td>
                        <td className="p-3">
                          <span>10 Years</span>
                        </td>
                      </tr>
                      <tr className="border border-1 border-white">
                        <td className="fw-bold p-3">PANEL:</td>
                        <td className="p-3">
                          <span>Mono PERC</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* {/ Rooftop solar installations /} */}
          <div>
            <div className="py-3 py-lg-5">
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500" data-aos-once="true"
              >
                Installations
              </div>
              <div
                className="ftittle "
                data-aos="fade-down"
                data-aos-duration="1500" data-aos-once="true"
              >
                Rooftop Solar Installations
              </div>
            </div>

            <div className="row d-flex align-items-center">
              <div className="col-12 col-lg-5 mb-4">
                <div className="solarinfoimg">
                  <div className="descr"></div>
                  <img
                    src={
                      "https://img.freepik.com/free-photo/specialist-technician-professional-engineer-with-laptop-tablet-maintenance-checking-installing-solar-roof-panel-factory-rooftop-sunlight-engineers-team-survey-check-solar-panel-roof_609648-2178.jpg?ga=GA1.1.949763891.1720709653&semt=ais_hybrid"
                    }
                    className="w-100 h-100 object-fit-cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-lg-7 mb-4">
                <div className="pera" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  eum ratione. Ipsam iste ab aperiam omnis cumque maxime
                  reprehenderit architecto harum earum aliquam, nisi inventore,
                  vero excepturi? Placeat possimus eius amet doloremque culpa
                  cumque aut distinctio harum illum fugiat dolor dolores ad
                  beatae pariatur, vero saepe minus! Facilis deserunt
                  accusantium aperiam, nulla accusamus velit officia molestiae,
                  nisi possimus ratione recusandae.
                </div>
                <div className="py-3 pera" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita, sapiente animi rem dolore molestiae voluptatum ut
                  voluptate nesciunt quibusdam excepturi dignissimos maxime
                  quidem aspernatur odio! Facilis doloribus pariatur, a atque,
                  exercitationem corrupti fuga quibusdam numquam vel corporis
                  tempora maiores animi.
                </div>
                <div className="pera">
                  <div>
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, quis.
                  </div>
                  <div className="py-2">
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, quis.
                  </div>
                  <div>
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, quis.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {/ Commercial energy management /} */}
          <div>
            <div className="pt-3 pt-lg-5">
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500" data-aos-once="true"
              >
                Management
              </div>
              <div
                className="ftittle "
                data-aos="fade-down"
                data-aos-duration="1500" data-aos-once="true"
              >
                Commercial Energy Management
              </div>
            </div>

            <div className="row d-flex align-items-center">
              <div className="col-12 col-lg-7 mb-4 order-1 order-lg-0">
                <div className="pera" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  eum ratione. Ipsam iste ab aperiam omnis cumque maxime
                  reprehenderit architecto harum earum aliquam, nisi inventore,
                  vero excepturi? Placeat possimus eius amet doloremque culpa
                  cumque aut distinctio harum illum fugiat dolor dolores ad
                  beatae pariatur, vero saepe minus! Facilis deserunt
                  accusantium aperiam, nulla accusamus velit officia molestiae,
                  nisi possimus ratione recusandae.
                </div>
                <div className="py-3 pera" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita, sapiente animi rem dolore molestiae voluptatum ut
                  voluptate nesciunt quibusdam excepturi dignissimos maxime
                  quidem aspernatur odio! Facilis doloribus pariatur, a atque,
                  exercitationem corrupti fuga quibusdam numquam vel corporis
                  tempora maiores animi.
                </div>
                <div className="pera">
                  <div>
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, quis.
                  </div>
                  <div className="py-2">
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, quis.
                  </div>
                  <div>
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, quis.
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 mb-4 order-0 order-lg-1 ">
                <div className="solarinfoimg">
                  <div className="descr"></div>
                  <img
                    src={
                      "https://img.freepik.com/free-photo/medium-shot-engineers-chatting-about-wind-power-plant_23-2149352230.jpg?ga=GA1.1.949763891.1720709653&semt=ais_hybrid"
                    }
                    className="w-100 h-100 object-fit-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="my-2 my-lg-4 mx-auto text-center"
            data-aos="zoom-in"
            data-aos-duration="1800"
            data-aos-once="true"
          >
            <Link to={"/service"} className="text-decoration-none">
              <button className="button-48 mt-3" role="button">
                <span className="btn_text fw-bold">Back To Home</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HOC(CommercialSolar);
