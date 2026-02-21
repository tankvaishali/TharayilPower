import React, { useState } from "react";

function HomeProduct() {
  const [activeTab, setActiveTab] = useState("tabs-tab-1");

  const departments = [
    {
      id: "tabs-tab-1",
      title: "Solar PV Modules",
      image1: require("../../Assets/Images/blog.jpg"),
      image2: require("../../Assets/Images/product/solarpvmodule.jpg"),
      image3: require("../../Assets/Images/product/solarpvmodule2.jpg"),
      image4: require("../../Assets/Images/IMG-20240917-WA0008.jpg"),
    },
    {
      id: "tabs-tab-2",
      title: "Battery Storage Systems ",
      image1: require("../../Assets/Images/product/batterystorage01.jpg"),
      image2: require("../../Assets/Images/product/batterystorage02.jpg"),
      image3: require("../../Assets/Images/product/batterystorage03.jpg"),
      image4: require("../../Assets/Images/product/batterystorage04.jpg"),
    },
    {
      id: "tabs-tab-3",
      title: "Home Inverters  ",
      image1: require("../../Assets/Images/product/homeinverter.jpg"),
      image2: require("../../Assets/Images/product/homeinverter02.jpg"),
      image3: require("../../Assets/Images/product/homeinverter03.jpg"),
      image4: require("../../Assets/Images/product/homeinverter04.jpg"),
    },
    {
      id: "tabs-tab-4",
      title: "E-Mobility Solutions  ",
      image1: require("../../Assets/Images/mobilityimage.png"),
      image2: require("../../Assets/Images/product/emobility.jpg"),
      image3: require("../../Assets/Images/product/mobility2.jpg"),
      image4: require("../../Assets/Images/product/mobility3.jpg"),
    },
    {
      id: "tabs-tab-5",
      title: "Solar Water Heaters  ",
      image1: require("../../Assets/Images/waterheater.jpg"),
      image2: require("../../Assets/Images/product/solar-water-heater-2.jpg"),
      image3: require("../../Assets/Images/product/solar-water-heater-systems.jpg"),
      image4: require("../../Assets/Images/product/solar-water-heater-3.jpg"),
    },
    {
      id: "tabs-tab-6",
      title: "Solar Street Lights  ",
      image1: require("../../Assets/Images/Solar-Street-Lights.jpg"),
      image2: require("../../Assets/Images/product/Solar-Street-Lights-1.jpg"),
      image3: require("../../Assets/Images/product/Solar-Street-Lights-2.jpg"),
      image4: require("../../Assets/Images/product/Solar-Street-Lights-3.jpg"),
    },
    {
      id: "tabs-tab-7",
      title: "BLDC Fans",
      image1: require("../../Assets/Images/bldcfan.jpg"),
      image2: require("../../Assets/Images/product/bldc-1.png"),
      image3: require("../../Assets/Images/product/bldc-2.jpg"),
      image4: require("../../Assets/Images/product/bldc-3.png"),
    },
  ];
  // const generateWhatsAppURL = (productName) => {
  //   const message = `Hello, I'm interested in the product: ${productName}`;
  //   return `https://wa.me/8129151266/?text=${encodeURIComponent(message)}`;
  // };
  return (
    <>
      <div style={{ marginTop: "130px" }}>
        <section
          id="departments"
          className="tabs section my-lg-5 py-5 my-sm-2 py-lg-5 product_high overflow-hidden"
        >
          <div className="container">
            <div className="py-3 pb-5 text-center">
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Popular Products
              </div>
              <div
                className="ftittle text-white"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Our Featured Products
              </div>
            </div>
          </div>

          <div
            className="container pb-3 pb-lg-5"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <div className="row ">
              <div className="col-lg-3">
                <ul
                  className=" nav nav-tabs flex-column justify-content-between bg_tab pb-2 h-100"
                  data-aos="fade-right"
                  data-aos-duration="1800"
                  data-aos-once="true"
                >
                  <div
                    className="fw-bold p-3 fs-4 text-white"
                    style={{ backgroundColor: "var(--green--)" }}
                  >
                    {" "}
                    Our Products
                  </div>
                  {departments.map((department) => (
                    <li className="nav-item mx-2 mt-1" key={department.id}>
                      <div
                        className={`nav-link ${activeTab === department.id ? "active show" : ""
                          }`}
                        onClick={() => setActiveTab(department.id)}
                      >
                        {department.title}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="col-lg-9 mt-4 mt-lg-0 shadow_green p-md-2 p-0 py-5 p-lg-5 bg-white"
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                {departments
                  .filter((department) => department.id === activeTab)
                  .map((department) => (
                    <div
                      className="tab-pane active show "
                      id={department.id}
                      key={department.id}
                    >
                      <div className="row">
                        <div className="col-lg-6 col-9 mx-auto text-center order-1 order-lg-2 mt-4">
                          <div style={{ width: "100%", height: 250 }}>
                            <img
                              src={department.image1}
                              alt={department.title}
                              className="img-fluid h-100 object-fit-fill w-100 shadow"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-9 mx-auto text-center order-1 order-lg-2 mt-4">
                          <div style={{ width: "100%", height: 250 }}>
                            <img
                              src={department.image2}
                              alt={department.title}
                              className="img-fluid h-100 object-fit-fill w-100 shadow"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-9 mx-auto text-center order-1 order-lg-2 mt-4">
                          <div style={{ width: "100%", height: 250 }}>
                            <img
                              src={department.image3}
                              alt={department.title}
                              className="img-fluid h-100 object-fit-fill w-100 shadow"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-9 mx-auto text-center order-1 order-lg-2 mt-4">
                          <div style={{ width: "100%", height: 250 }}>
                            <img
                              src={department.image4}
                              alt={department.title}
                              className="img-fluid h-100 object-fit-fill w-100 shadow"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomeProduct;
