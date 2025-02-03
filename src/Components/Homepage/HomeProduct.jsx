import React, { useState } from "react";


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
            image4: require("../../Assets/Images/IMG-20240917-WA0008.jpg")

        },
        {
            id: "tabs-tab-2",
            title: "Battery Storage Systems ",
            image1:
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQObJMDtggc8A5gOgNFpstUsaZw6zhw26MPrA&s",
            image2: "https://www.genuineautoelectricals.com/wp-content/uploads/Exide-SolaTubular-LL-6LMS150L-Solar-Battery.jpg",
            image3: "https://www.moxikart.com/assets/images/fairdealbattery/battery/22_exide-instabrite-ib1500-150ah-flate-plate-battery.jpg",
            image4: "https://glazeimpex.com/cdn/shop/products/ExideIT500Plus150ahBattery.jpg?v=1604770497"


        },
        {
            id: "tabs-tab-3",
            title: "Home Inverters  ",
            image1:
                "https://i.ibb.co/9mcpJp2j/download-2.jpg",
            image2: "https://i.ibb.co/DDyQmdry/images.jpg",
            image3: "https://i.ibb.co/sJX5T4Jj/download-1.jpg",
            image4: "https://i.ibb.co/Q3BBn27z/download.jpg"


        },
        {
            id: "tabs-tab-4",
            title: "E-Mobility Solutions  ",
            image1:
                require("../../Assets/Images/mobilityimage.png"),
            image2: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSt21IqdIweu1o4wuhpFi6aaf8zV6Cn9x3XpsIvRymGHtOlvq8Q",
            image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4YHB6yFAfkWRZETfldeYahoMKp1CXWVYIpdAbpYsSLCXh_B4XHqcVkcwu7we-m5YQ4I&usqp=CAU",
            image4: "https://t3.ftcdn.net/jpg/05/59/65/32/360_F_559653235_uWyqOK8rY0UG15KEsDaLr2dSxKDPLUux.jpg"


        },
        {
            id: "tabs-tab-5",
            title: "Solar Water Heaters  ",
            image1: require("../../Assets/Images/waterheater.jpg"),
            image2: "https://5.imimg.com/data5/SELLER/Default/2021/4/RN/IV/IU/15756170/solar-water-heater-ss-500x500.jpeg",
            image3: "https://tiimg.tistatic.com/fp/7/004/399/phoenix-solar-water-heater-systems-207.jpg",
            image4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQEPjF0xPY_0kRGMTC6YU3ATRbyiV_EyGs_-pfR7BGxnxyVNTCvJgo4zJRZRTXYQpFiI&usqp=CAU"


        },
        {
            id: "tabs-tab-6",
            title: "Solar Street Lights  ",
            image1: require("../../Assets/Images/Solar-Street-Lights.jpg"),

            image2: " https://media.istockphoto.com/id/1282295271/photo/alternative-solar-energy-solar-device-with-street-lamp-on-background-of-blue-sky-and-green.jpg?s=612x612&w=0&k=20&c=v5QH8RZx_MOZordZWwfURMVIAvp4x7-1FUuumi1K05w=",
            image3: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtBIHfmak8NVx4VvBNYCFXiDMQPgnjyVn9DdvBf3Xia4hXFfsz",
            image4: "https://5.imimg.com/data5/SELLER/Default/2023/8/336157343/LZ/DB/AI/16537029/9-watt-solar-led-street-light.jpg"


        },
        {
            id: "tabs-tab-7",
            title: "BLDC Fans",
            image1: require("../../Assets/Images/bldcfan.jpg"),
            image2: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSzYJ1m9L7qmfz5ojFTvpXq98QKoYubhfLOhjG8FO2Lu1Z8O3_Q",
            image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQIdni0VSjOQyaBEjHDwQBwJ_JggMPnq2qTJxFovxfAFRlLCdWLHXq3mxP_lUnr9DC34&usqp=CAU",
            image4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9D6YCfoOdFalOhVBXwyYP0RnvYGgUpddkzcGVpRliXom1s89M497G5Sa4K4g67oZ_AQ&usqp=CAU"


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
                                            <li className="nav-item mx-2 mt-1" key={department.id}>
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
                                                    <div style={{ width: "100%", height: 250 }} >
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
