import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

function ProductPage() {
  const [activeTab, setActiveTab] = useState("tabs-tab-1");

  const departments = [
    {
      id: "tabs-tab-1",
      title: "Solar PV Modules",
      image:
        require("../../Assets/Images/blog.jpg"),
      description:
        "Our solar PV modules are engineered for durability and optimal performance, perfect for both residential and commercial installations. Designed to harness the sun's energy efficiently, these modules deliver consistent power output, helping you reduce electricity bills while contributing to a sustainable future. With advanced technology and a commitment to quality, our PV modules ensure reliable performance under various environmental conditions.  ",
      details01: "Durable & Long-Lasting",
      pera1: " Built to withstand harsh weather conditions, providing reliable energy year-round.",
      details02: "High Efficiency",
      pera2: "Maximizes energy output, reducing reliance on the grid and lowering electricity costs.",
      details03: "Sustainable & Eco-Friendly",
      pera3: " Contribute to a greener planet by using renewable solar power and reducing carbon footprints.",
    },
    {
      id: "tabs-tab-2",
      title: "Battery Storage Systems ",
      image:
        require("../../Assets/Images/IMG-20231018-WA0037.jpg"),

      description:
        "Experience the convenience of uninterrupted energy supply with our cutting-edge battery storage systems. These solutions store excess solar energy generated during the day for use at night or during power outages. By ensuring consistent power availability, our battery systems enhance energy independence and reduce reliance on the grid, offering peace of mind even in unpredictable weather conditions. ",
      details01: "Reliable Power Supply",
      pera1: "Store excess solar energy for consistent use day or night, even in emergencies.",
      details02: "Energy Independence",
      pera2: "Reduce dependence on the grid and increase self-sufficiency for your home or business.",
      details03: "Space-Efficient Design",
      pera3: "Compact, easy-to-install systems suitable for residential and commercial properties.",
    },
    {
      id: "tabs-tab-3",
      title: "Home Inverters  ",
      image:
        require("../../Assets/Images/inverter.png"),
      description:
        "Transform solar energy into usable electricity with our smart home inverters. Designed for maximum efficiency, these devices enable seamless power conversion, ensuring that your solar energy system operates at peak performance. Compatible with various solar setups, our inverters combine reliability with intelligent features to simplify energy management for homeowners.  ",
        details01: "Maximum Efficiency",
        pera1: "Optimizes energy conversion to ensure maximum output from your solar system.",
        details02: "Smart Energy Management",
        pera2: " Intelligent features that adjust settings for improved power control and efficiency.",
        details03: "Wide Compatibility",
        pera3: "Works seamlessly with most solar setups, ensuring flexibility and ease of integration.",
    },
    {
      id: "tabs-tab-4",
      title: "E-Mobility Solutions  ",
      image:
      require("../../Assets/Images/mobilityimage.png"),

      description:
        "Embrace eco-friendly transportation with our range of e-mobility solutions, including solar-powered EV charging stations. These solutions not only support the adoption of electric vehicles but also integrate renewable energy to reduce your carbon footprint. Be part of the movement toward sustainable mobility while ensuring convenience and efficiency.  ",
        details01: "Eco-Friendly Charging",
        pera1: " Utilize renewable energy for charging electric vehicles, reducing your environmental impact.",
        details02: "Efficient & Fast",
        pera2: " High-performance stations designed to provide quick, reliable charging for various EV models.",
        details03: "Seamless Integration",
        pera3: "Compatible with existing solar systems, offering an integrated green mobility solution.",    },
    {
      id: "tabs-tab-5",
      title: "Solar Water Heaters  ",
      image: require("../../Assets/Images/waterheater.jpg"),
      description:
        "Optimize energy usage by switching to solar water heaters, an eco-friendly way to meet your household or business water heating needs. These systems use solar power to deliver hot water efficiently, cutting down on electricity consumption and saving costs while minimizing environmental impact.  ",
        details01: "Energy-Efficient",
        pera1: "Solar-powered to significantly reduce electricity consumption and costs.",
        details02: "Environmentally Friendly",
        pera2: " Reduce your carbon footprint by utilizing the sun’s energy for water heating.",
        details03: "Durable & Low Maintenance",
        pera3: "Designed for long-term performance with minimal upkeep required.",  
        },
    {
      id: "tabs-tab-6",
      title: "Solar Street Lights  ",
      image: require("../../Assets/Images/Solar-Street-Lights.jpg"),
      description:
        "Light up your outdoor spaces sustainably with our solar-powered street lights. These lights are ideal for residential, commercial, and public areas, offering energy efficiency and dependable illumination. Designed for minimal maintenance and easy installation, our solar street lights are a cost-effective way to enhance safety and aesthetics. ",
        details01: "Cost-Effective",
        pera1: "Powered by solar energy, eliminating the need for electricity consumption and reducing costs.",
        details02: "Low Maintenance",
        pera2: "Durable design with minimal upkeep requirements, providing long-term reliability.",
        details03: "Easy Installation",
        pera3: " Simple to set up, making them ideal for homes, businesses, and public areas.",  
       },
    {
      id: "tabs-tab-7",
      title: "BLDC Fans",
      image: require("../../Assets/Images/bldcfan.jpg"),
      description:
        "Achieve energy efficiency and comfort with our Brushless Direct Current (BLDC) fans. These advanced fans consume significantly less electricity compared to traditional models, making them an economical and eco-conscious choice for cooling. Whether at home or work, our BLDC fans ensure silent, high-performance operation year-round.   ",
        details01: "Energy-Efficient",
        pera1: " Uses less power, reducing your energy consumption and costs.",
        details02: "Whisper Quiet Operation",
        pera2: "Enjoy a peaceful environment with silent, smooth fan performance.",
        details03: "Durable & Long-Lasting",
        pera3: "  Engineered to last, delivering reliable cooling year after year.",  
        },
  ];
  const generateWhatsAppURL = (productName) => {
    const message = `Hello, I'm interested in the product: ${productName}`;
    return `https://wa.me/8129151266/?text=${encodeURIComponent(message)}`;
  };
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
              Popular  Products
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

          <div className="container pb-3 pb-lg-5" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
            <div className="row ">
              <div className="col-lg-3">
                <ul
                  className=" nav nav-tabs flex-column justify-content-between bg_tab pb-2 h-100"
                  data-aos="fade-right" data-aos-duration="1800" data-aos-once="true"
                >
                  <div className="fw-bold p-3 fs-4 text-white" style={{ backgroundColor: "var(--green--)" }}>
                    {" "}
                    Our projects
                  </div>
                  {departments.map((department) => (
                    <>
                      <li className="nav-item mx-2 mt-2" key={department.id}>
                        <div

                          className={`nav-link ${activeTab === department.id ? "active show" : ""
                            }`}
                          onClick={() => setActiveTab(department.id)}
                        >
                          {department.title}
                        </div>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <div className="col-lg-9 mt-4 mt-lg-0 shadow_green p-5 bg-white" data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">
                {departments
                  .filter((department) => department.id === activeTab)
                  .map((department) => (
                    <div
                      className="tab-pane active show "
                      id={department.id}
                      key={department.id}

                    >
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3 className="fw-bold">{department.title}</h3>
                          <p className="pera">{department.description}</p>
                          <div>
                            <div className="fw-bold text-success fs-5 pb-1">Key Features:</div>
                            <div className="row">
                              <div className="fw-bold col-3">{department.details01}</div>
                              <div className="fw-medium col-1">:</div>
                              <div className="pera ps-2 col-8"> {department.pera1}</div>
                            </div>
                            <div className="row">
                              <div className="fw-bold col-3">{department.details02}</div>
                              <div className="fw-medium col-1">:</div>
                              <div className="pera ps-2 col-8"> {department.pera2}</div>
                            </div>
                            <div className="row">
                              <div className="fw-bold col-3">{department.details03}</div>
                              <div className="fw-medium col-1">:</div>
                              <div className="pera ps-2 col-8"> {department.pera3}</div>
                            </div>
                          </div>
                          <div className="mt-2" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                            <Link to={"/"} className="text-decoration-none">
                              <button
                                className="button-48 mt-3"
                                onClick={() =>
                                  window.open(
                                    generateWhatsAppURL(department.title),
                                    "_blank"
                                  )
                                }
                              >
                                <span className="btn_text fw-bold">
                                  Get Quotes{" "}
                                  <span className="ps-1 fs-5 fw-bold">
                                    <MdOutlineArrowOutward />
                                  </span>
                                </span>
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <div className="h-100">
                            <img
                              src={department.image}
                              alt={department.title}
                              className="img-fluid h-100 object-fit-cover w-100 shadow"
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

export default ProductPage;
