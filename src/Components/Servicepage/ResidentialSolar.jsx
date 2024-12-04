import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import HOC from '../HOC';
import { Link } from 'react-router-dom';

const images = [
    "https://demo.rstheme.com/wordpress/solaren/wp-content/uploads/2024/06/portfolio_06.jpg",
    "https://demo.rstheme.com/wordpress/solaren/wp-content/uploads/2024/06/portfolio_03.jpg",
    "https://demo.rstheme.com/wordpress/solaren/wp-content/uploads/2024/06/portfolio_07.jpg"
];

function ResidentialSolar() {
    return (
      <>
        <div className="my-5">
          <div className="container">
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
              <div className="py-3 py-lg-5">
                <div
                  className="font_stroke"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Installation
                </div>
                <div
                  className="ftittle "
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Solar panel installation
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-7 mb-4">
                  <div className="pera" style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Atque fuga aperiam reprehenderit, ea, repellendus impedit
                    libero pariatur modi, nisi numquam culpa? Eligendi a
                    voluptatibus, tenetur sint deleniti consequuntur aperiam
                    vitae perferendis officiis rem dolorem dolor voluptas dicta
                    magni cupiditate blanditiis.
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

            {/* {/ Battery storage solutions /} */}
            <div>
              <div className="py-3 py-lg-5">
                <div
                  className="font_stroke"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Storage
                </div>
                <div
                  className="ftittle "
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Battery Storage Solutions
                </div>
              </div>

              <div className="row d-flex align-items-center">
                <div className="col-12 col-lg-5 mb-4">
                  <div className="solarinfoimg">
                    <div className="descr"></div>
                    <img
                      src={
                        "https://img.freepik.com/premium-photo/solar-panel-with-green-plant-top-it_1204564-85127.jpg?size=626&ext=jpg&ga=GA1.1.949763891.1720709653&semt=ais_hybrid"
                      }
                      className="w-100 h-100 object-fit-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-7 mb-4">
                  <div className="pera" style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, eum ratione. Ipsam iste ab aperiam omnis cumque maxime
                    reprehenderit architecto harum earum aliquam, nisi
                    inventore, vero excepturi? Placeat possimus eius amet
                    doloremque culpa cumque aut distinctio harum illum fugiat
                    dolor dolores ad beatae pariatur, vero saepe minus! Facilis
                    deserunt accusantium aperiam, nulla accusamus velit officia
                    molestiae, nisi possimus ratione recusandae.
                  </div>
                  <div className="pera py-3" style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, eum ratione. Ipsam iste ab aperiam omnis cumque maxime
                    reprehenderit architecto harum earum aliquam, nisi
                    inventore, vero excepturi? Placeat possimus eius amet
                    doloremque culpa cumque aut distinctio harum illum fugiat
                    dolor dolores ad beatae pariatur, vero saepe minus! Facilis
                    deserunt accusantium aperiam, nulla accusamus velit officia
                    molestiae, nisi possimus ratione recusandae.
                  </div>
                  <div className=" pera" style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Expedita, sapiente animi rem dolore molestiae voluptatum ut
                    voluptate nesciunt quibusdam excepturi dignissimos maxime
                    quidem aspernatur odio! Facilis doloribus pariatur, a atque,
                    exercitationem corrupti fuga quibusdam numquam vel corporis
                    tempora maiores animi.
                  </div>
                  <div className="pera py-3">
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

            {/* {/  Energy efficiency audits /} */}
            <div>
              <div className="pt-3 pt-lg-5">
                <div
                  className="font_stroke"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Efficiency
                </div>
                <div
                  className="ftittle "
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Energy Efficiency Audits
                </div>
              </div>

              <div className="row d-flex align-items-center">
                <div className="col-12 col-lg-7 mb-4 order-1 order-lg-0">
                  <div className="pera" style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, eum ratione. Ipsam iste ab aperiam omnis cumque maxime
                    reprehenderit architecto harum earum aliquam, nisi
                    inventore, vero excepturi? Placeat possimus eius amet
                    doloremque culpa cumque aut distinctio harum illum fugiat
                    dolor dolores ad beatae pariatur, vero saepe minus! Facilis
                    deserunt accusantium aperiam, nulla accusamus velit officia
                    molestiae, nisi possimus ratione recusandae.
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
                        "https://img.freepik.com/free-photo/medium-shot-engineers-chatting-about-wind-power-plant_23-2149352230.jpg?ga=GA1.1.949763891.1720709653&semt=ais_hybrid"
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
