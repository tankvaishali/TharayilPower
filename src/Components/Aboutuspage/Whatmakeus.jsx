import React from "react";
import {
  FaBatteryFull,
  FaBolt,
  FaCheckCircle,
  FaLeaf,
  FaShieldAlt,
} from "react-icons/fa";
import Slider from "react-slick";

function Whatmakeus() {
  const features = [
    {
      title: "Expertise You Can Trust",
      description:
        "Our experienced team ensures every project is customized to your needs — whether residential, commercial, or institutional.",
      icon: <FaShieldAlt />,
    },
    {
      title: "One-Stop Energy Solutions",
      description:
        "From solar panels to energy audits, battery systems, and even e-mobility solutions — we cover everything under the sun.",
      icon: <FaBolt />,
    },
    {
      title: "High-Quality Products",
      description:
        "We use only recognized brands known for safety and reliability, ensuring your systems are built to last.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Sustainable And Eco-Friendly",
      description:
        "Our solutions help you save energy and reduce carbon emissions, contributing to a greener planet.",
      icon: <FaLeaf />,
    },
    {
      title: "Exceptional After-Sales Support",
      description:
        "We're with you every step of the way, offering post-installation maintenance and support to keep your system running smoothly.",
      icon: <FaBatteryFull />,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 4000, // Adjust the speed as needed
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div>
            <div
              className="font_stroke"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Why Us
            </div>
            <div
              className="ftittle"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              What Makes Us Different
            </div>
          </div>

          <div className="row g-4 mb-3">
            <Slider {...settings}>
              {features.map((x, i) => {
                return (
                  <div
                    className="col-12 "
                    data-aos="zoom-in"
                    data-aos-duration="1800"
                    data-aos-once="true"
                    data-aos-delay="500"
                    key={i}
                  >
                    <div className="feature-box h-100 shadow m-3 p-3 py-4 d-flex flex-column align-content-center align-items-center text-center ">
                      <div className="whyusicon fs-4 text-center mx-auto rounded-circle fw-bold my-2 d-flex justify-content-center align-content-center align-items-center">
                        {x.icon}
                      </div>
                      <div className="fw-bold py-2 pt-4 text-success">
                        {x.title}
                      </div>
                      <div className="pera py-2 text-secondary">
                        {x.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whatmakeus;
