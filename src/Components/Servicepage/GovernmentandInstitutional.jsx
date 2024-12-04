import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import HOC from "../HOC";

const images = [
  "https://img.freepik.com/premium-photo/futuristic-modern-technology-renewable-energy-ai-image_526489-21067.jpg?ga=GA1.1.949763891.1720709653&semt=ais_hybrid",
  "https://img.freepik.com/premium-photo/futuristic-modern-technology-renewable-energy-ai-image_526489-20658.jpg?ga=GA1.1.949763891.1720709653",
  "https://img.freepik.com/premium-photo/solarpowered-city-sunlit-urban-landscape-with-shining-windows_1204564-99096.jpg?ga=GA1.1.949763891.1720709653",
];

function GovernmentandInstitutional() {
  return (
    <>
      <div className="my-5">
        <div className="container">
          <div className="text-center">
            <div
              className="font_stroke"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Government And Institutional
            </div>
            <div
              className="ftittle"
              data-aos="fade-down"
              data-aos-duration="1500"
            
                data-aos-once="true"
            >
              Government And Institutional Solutions
            </div>
          </div>

          {/* {/ Solar projects for government buildings /} */}
          <div>
            <div className="row justify-content-center mt-5 pt-3 pt-lg-5">
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
            <div className="my-3">
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500" data-aos-once="true"
              >
                Government Buildings
              </div>
              <div
                className="ftittle"
                data-aos="fade-down"
                data-aos-duration="1500" data-aos-once="true"
              >
                Solar Projects For Government Buildings
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

          {/* {/ Educational institution solar solutions /} */}
          <div>
            <div className="my-3">
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500" data-aos-once="true"
              >
                Institution Solar
              </div>
              <div
                className="ftittle"
                data-aos="fade-down"
                data-aos-duration="1500" data-aos-once="true"
              >
                Educational Institution Solar Solutions
              </div>
            </div>
            <div className="row d-flex align-items-center">
              <div className="col-12 col-lg-5 mb-4">
                <div className="solarinfoimg">
                  <div className="descr"></div>
                  <img
                    src={
                      "https://img.freepik.com/free-photo/young-asian-inspector-engineer-man-use-laptop-computer-working-solar-farm-technician-supervisor-male-white-helmet-checking-operation-sun-photovoltaic-solar-panel-station-copy-space_1150-57262.jpg?ga=GA1.1.949763891.1720709653&semt=ais_hybrid"
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

          {/* {/ Non-profit organization partnerships /} */}
          <div>
            <div className="mt-3">
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500" data-aos-once="true"
              >
                Organization Partnerships
              </div>
              <div
                className="ftittle"
                data-aos="fade-down"
                data-aos-duration="1500" data-aos-once="true"
              >
                Non-Profit Organization Partnerships
              </div>
            </div>
            <div className="row d-flex ">
              <div className="col-12 col-lg-7 mb-4 order-1 order-lg-0">
                <div
                  className="pera pt-0 pt-lg-5"
                  style={{ textAlign: "justify" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  eum ratione. Ipsam iste ab aperiam omnis cumque maxime
                  reprehenderit architecto harum earum aliquam, nisi inventore,
                  vero excepturi? Placeat possimus eius amet doloremque culpa
                  cumque aut distinctio harum illum fugiat dolor dolores ad
                  beatae pariatur, vero saepe minus! Facilis deserunt
                  accusantium aperiam, nulla accusamus velit officia molestiae,
                  nisi possimus ratione recusandae.
                </div>
                <div className="pera py-3" style={{ textAlign: "justify" }}>
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
              <div className="col-12 col-lg-5 mb-4 order-0 order-lg-1">
                <div className="solarinfoimg">
                  <div className="descr"></div>
                  <img
                    src={
                      "https://img.freepik.com/premium-photo/two-businessmen-shaking-hands-rooftop-solar-panel-installation_923894-48220.jpg?ga=GA1.1.949763891.1720709653&semt=ais_hybrid"
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
            data-aos-duration="1800" data-aos-once="true"
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

export default HOC(GovernmentandInstitutional);
