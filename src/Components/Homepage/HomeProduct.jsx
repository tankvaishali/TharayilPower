import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

function HomeProduct() {
    const [activeTab, setActiveTab] = useState("tabs-tab-1");

    const departments = [
        {
            id: "tabs-tab-1",
            title: "Solar PV Modules",
            image1:
                require("../../Assets/Images/blog.jpg"),
            image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTXZF-fv0FZNHbsW4HduzvRakmjYo9epWCwQ&s",
            image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1q4yxrdchJufS-_dW9H2WNYibaXMIX_ESRA&s",
            image4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwwI_v76o6IezxCyeROodHlChegQZXT2OhQ&s"
            // description:
            //   "Our solar PV modules are engineered for durability and optimal performance, perfect for both residential and commercial installations. Designed to harness the sun's energy efficiently, these modules deliver consistent power output, helping you reduce electricity bills while contributing to a sustainable future. With advanced technology and a commitment to quality, our PV modules ensure reliable performance under various environmental conditions.  ",
            // details01: "Durable & Long-Lasting",
            // pera1: " Built to withstand harsh weather conditions, providing reliable energy year-round.",
            // details02: "High Efficiency",
            // pera2: "Maximizes energy output, reducing reliance on the grid and lowering electricity costs.",
            // details03: "Sustainable & Eco-Friendly",
            // pera3: " Contribute to a greener planet by using renewable solar power and reducing carbon footprints.",
        },
        {
            id: "tabs-tab-2",
            title: "Battery Storage Systems ",
            image1:
                require("../../Assets/Images/IMG-20231018-WA0037.jpg"),
            image2: "https://www.hefeisunrise.com/photo/pl179290754-single_phase_on_grid_string_inverter_for_solar_system_deye_sun_4k_g05p1_eu_am2_4kw_5kw_6kw.jpg",
            image3: "https://5.imimg.com/data5/SELLER/Default/2022/11/TO/OA/YP/77722644/polycab-solar-inverter-10kw-three-phase-500x500.jpeg",
            image4: "https://5.imimg.com/data5/SELLER/Default/2022/1/TX/VK/TL/145409010/on-grid-solar-inverter-500x500.jpg"

            // description:
            // "Experience the convenience of uninterrupted energy supply with our cutting-edge battery storage systems. These solutions store excess solar energy generated during the day for use at night or during power outages. By ensuring consistent power availability, our battery systems enhance energy independence and reduce reliance on the grid, offering peace of mind even in unpredictable weather conditions. ",
            // details01: "Reliable Power Supply",
            // pera1: "Store excess solar energy for consistent use day or night, even in emergencies.",
            // details02: "Energy Independence",
            // pera2: "Reduce dependence on the grid and increase self-sufficiency for your home or business.",
            // details03: "Space-Efficient Design",
            // pera3: "Compact, easy-to-install systems suitable for residential and commercial properties.",
        },
        {
            id: "tabs-tab-3",
            title: "Home Inverters  ",
            image1:
                require("../../Assets/Images/inverter.png"),
            image2: "https://5.imimg.com/data5/SELLER/Default/2021/11/LE/AA/RH/47790758/abb-7-5kw-three-phase-grid-tie-inverter-with-dc-switch-500x500.jpg",
            image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-CvMG9RVwHKDDP9SfJnHpPeeEaCatxDd9bJAxrZcSv3dJkvu9rGIwZPtoPMVMt-ntdkg&usqp=CAU",
            image4: "https://5.imimg.com/data5/FX/PI/OG/SELLER-13497585/solar-grid-tie-inverter-1-to-80-kw-abb-500x500.jpg"

            // description:
            // "Transform solar energy into usable electricity with our smart home inverters. Designed for maximum efficiency, these devices enable seamless power conversion, ensuring that your solar energy system operates at peak performance. Compatible with various solar setups, our inverters combine reliability with intelligent features to simplify energy management for homeowners.  ",
            // details01: "Maximum Efficiency",
            // pera1: "Optimizes energy conversion to ensure maximum output from your solar system.",
            // details02: "Smart Energy Management",
            // pera2: " Intelligent features that adjust settings for improved power control and efficiency.",
            // details03: "Wide Compatibility",
            // pera3: "Works seamlessly with most solar setups, ensuring flexibility and ease of integration.",
        },
        {
            id: "tabs-tab-4",
            title: "E-Mobility Solutions  ",
            image1:
                require("../../Assets/Images/mobilityimage.png"),
            image2: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSt21IqdIweu1o4wuhpFi6aaf8zV6Cn9x3XpsIvRymGHtOlvq8Q",
            image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4YHB6yFAfkWRZETfldeYahoMKp1CXWVYIpdAbpYsSLCXh_B4XHqcVkcwu7we-m5YQ4I&usqp=CAU",
            image4: "data:image/jpeg;base64,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"

            // description:
            // "Embrace eco-friendly transportation with our range of e-mobility solutions, including solar-powered EV charging stations. These solutions not only support the adoption of electric vehicles but also integrate renewable energy to reduce your carbon footprint. Be part of the movement toward sustainable mobility while ensuring convenience and efficiency.  ",
            // details01: "Eco-Friendly Charging",
            // pera1: " Utilize renewable energy for charging electric vehicles, reducing your environmental impact.",
            // details02: "Efficient & Fast",
            // pera2: " High-performance stations designed to provide quick, reliable charging for various EV models.",
            // details03: "Seamless Integration",
            // pera3: "Compatible with existing solar systems, offering an integrated green mobility solution.",
        },
        {
            id: "tabs-tab-5",
            title: "Solar Water Heaters  ",
            image1: require("../../Assets/Images/waterheater.jpg"),
            image2: "https://5.imimg.com/data5/SELLER/Default/2021/4/RN/IV/IU/15756170/solar-water-heater-ss-500x500.jpeg",
            image3: "https://tiimg.tistatic.com/fp/7/004/399/phoenix-solar-water-heater-systems-207.jpg",
            image4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQEPjF0xPY_0kRGMTC6YU3ATRbyiV_EyGs_-pfR7BGxnxyVNTCvJgo4zJRZRTXYQpFiI&usqp=CAU"

            // description:
            // "Optimize energy usage by switching to solar water heaters, an eco-friendly way to meet your household or business water heating needs. These systems use solar power to deliver hot water efficiently, cutting down on electricity consumption and saving costs while minimizing environmental impact.  ",
            // details01: "Energy-Efficient",
            // pera1: "Solar-powered to significantly reduce electricity consumption and costs.",
            // details02: "Environmentally Friendly",
            // pera2: " Reduce your carbon footprint by utilizing the sun’s energy for water heating.",
            // details03: "Durable & Low Maintenance",
            // pera3: "Designed for long-term performance with minimal upkeep required.",
        },
        {
            id: "tabs-tab-6",
            title: "Solar Street Lights  ",
            image1: require("../../Assets/Images/Solar-Street-Lights.jpg"),
            image2: "https://5.imimg.com/data5/SELLER/Default/2023/8/336157343/LZ/DB/AI/16537029/9-watt-solar-led-street-light.jpg",
            image3: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtBIHfmak8NVx4VvBNYCFXiDMQPgnjyVn9DdvBf3Xia4hXFfsz",
            image4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1p_dQ-M-4DjeuOrZg0ond0Die_MJ5MkXdbtQhwK_1ttbl1HPRYZTAczyg35VivO-r2ug&usqp=CAU"

            // description:
            // "Light up your outdoor spaces sustainably with our solar-powered street lights. These lights are ideal for residential, commercial, and public areas, offering energy efficiency and dependable illumination. Designed for minimal maintenance and easy installation, our solar street lights are a cost-effective way to enhance safety and aesthetics. ",
            // details01: "Cost-Effective",
            // pera1: "Powered by solar energy, eliminating the need for electricity consumption and reducing costs.",
            // details02: "Low Maintenance",
            // pera2: "Durable design with minimal upkeep requirements, providing long-term reliability.",
            // details03: "Easy Installation",
            // pera3: " Simple to set up, making them ideal for homes, businesses, and public areas.",
        },
        {
            id: "tabs-tab-7",
            title: "BLDC Fans",
            image1: require("../../Assets/Images/bldcfan.jpg"),
            image2: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSzYJ1m9L7qmfz5ojFTvpXq98QKoYubhfLOhjG8FO2Lu1Z8O3_Q",
            image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQIdni0VSjOQyaBEjHDwQBwJ_JggMPnq2qTJxFovxfAFRlLCdWLHXq3mxP_lUnr9DC34&usqp=CAU",
            image4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9D6YCfoOdFalOhVBXwyYP0RnvYGgUpddkzcGVpRliXom1s89M497G5Sa4K4g67oZ_AQ&usqp=CAU"

            // description:
            // "Achieve energy efficiency and comfort with our Brushless Direct Current (BLDC) fans. These advanced fans consume significantly less electricity compared to traditional models, making them an economical and eco-conscious choice for cooling. Whether at home or work, our BLDC fans ensure silent, high-performance operation year-round.   ",
            // details01: "Energy-Efficient",
            // pera1: " Uses less power, reducing your energy consumption and costs.",
            // details02: "Whisper Quiet Operation",
            // pera2: "Enjoy a peaceful environment with silent, smooth fan performance.",
            // details03: "Durable & Long-Lasting",
            // pera3: "  Engineered to last, delivering reliable cooling year after year.",
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
                                        Our Products
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
                            <div className="col-lg-9 mt-4 mt-lg-0 shadow_green p-md-2 p-0 py-5 p-lg-5 bg-white" data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">
                                {departments
                                    .filter((department) => department.id === activeTab)
                                    .map((department) => (
                                        <div
                                            className="tab-pane active show "
                                            id={department.id}
                                            key={department.id}

                                        >
                                            <div className="row">
                                                {/* <div className="col-lg-8 details order-2 order-lg-1">
                          <h3 className="fw-bold pt-3 pt-lg-0">{department.title}</h3>
                          <p className="pera">{department.description}</p>
                          <div>
                            <div className="fw-bold text-success fs-5 pb-1">Key Features :</div>
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
                        </div> */}
                                                <div className="col-lg-5 col-9 mx-auto text-center order-1 order-lg-2 mt-4">
                                                    <div className="h-100">
                                                        <img
                                                            src={department.image1}
                                                            alt={department.title}
                                                            className="img-fluid h-100 object-fit-cover w-100 shadow"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-9 mx-auto text-center order-1 order-lg-2 mt-4">
                                                    <div className="h-100">
                                                        <img
                                                            src={department.image2}
                                                            alt={department.title}
                                                            className="img-fluid h-100 object-fit-cover w-100 shadow"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-9 mx-auto text-center order-1 order-lg-2 mt-4">
                                                    <div className="h-100">
                                                        <img
                                                            src={department.image3}
                                                            alt={department.title}
                                                            className="img-fluid h-100 object-fit-cover w-100 shadow"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-9 mx-auto text-center order-1 order-lg-2 mt-4">
                                                    <div className="h-100">
                                                        <img
                                                            src={department.image4}
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

export default HomeProduct;
