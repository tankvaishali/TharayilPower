import React, { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

import { ImYoutube } from "react-icons/im";

import { Link } from "react-router-dom";
import Slider from "react-slick";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  let ProductItemlist = [
    {
      img: require("../Assets/Images/IMG-20230616-WA0034.jpg"),
      name: "solar panel",
      tittle: "solar panel technology",
    },
    {
      img: require("../Assets/Images/IMG-20231018-WA0037.jpg"),

      name: "solar panel",
      tittle: "solar panel technology",
    },
    {
      img: require("../Assets/Images/IMG-20240123-WA0036.jpg"),

      name: "solar panel",
      tittle: "solar panel technology",
    },
    {
      img: require("../Assets/Images/IMG-20240705-WA0025.jpg"),

      name: "solar panel",
      tittle: "solar panel technology",
    },
    {
      img: require("../Assets/Images/IMG-20240902-WA0006.jpg"),

      name: "solar panel",
      tittle: "solar panel technology",
    },
    {
      img: require("../Assets/Images/IMG-20240917-WA0008.jpg"),

      name: "solar panel",
      tittle: "solar panel technology",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Adjust the speed as needed
    pauseOnHover: true,
  };
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ProductItemlist.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ProductItemlist.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <div className="footer_bg">
        <div className="container ">
          <div className="row p-0 m-0 g-3 g-lg-5 overflow-hidden">
            <div
              className="col-12 col-md-6 col-lg-4 pt-4 order-0"
              data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div>
                <img
                  src={require("../Assets/Images/logo.png")}
                  alt=""
                  className="img-fluid w-75"
                // width={"180px"}
                />
              </div>
              <div className="pera lightgray py-2 pt-3">
                Tharayil Power helps you save on energy costs with sustainable solar solutions, reliable backup systems, and tailored power solutions for homes and businesses.

              </div>
              <div className="d-flex fs-4 my-3">
                <Link
                  to={"https://www.facebook.com/tharayilpower/"}
                  target="_blank"
                  className="footericon text-center p-2 mx-1  ms-0 d-flex text-decoration-none text-white facebookicon"
                >
                  <FaFacebookF />
                </Link>

                <Link
                  to={"https://www.instagram.com/tharayilpower/"}
                  className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white instaicon"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to={"https://in.linkedin.com/company/tharayil-power-energy-solutions-p-ltd"}
                  target="_blank"
                  className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white linkicon"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to={
                    "https://www.youtube.com/channel/UClrE3swlKsfnqkhzn8sqJLw"
                  }
                  target="_blank"
                  className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white twittericon"
                >
                  <ImYoutube />
                </Link>
              </div>
            </div>
            <div
              className="col-6 col-md-6 col-lg-3 pt-0 pt-lg-3 order-2 order-md-1"
              data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div className="fw-medium fs-4 text-white py-2">Contact Us</div>
              <div className="d-flex    py-2">
                <div className="text-success text-decoration-none fs-4">
                  <FaMapLocationDot />
                </div>
                <div className="lightgray ps-3 pera">
                  <Link
                    to={"https://www.google.com/maps/place/Tharayil+Power+%26+Energy+Solutions+(P)+Ltd/@9.5126451,76.3380907,17z/data=!3m1!4b1!4m6!3m5!1s0x3b088571b9c23145:0x6e2e6b8c22fe8ba4!8m2!3d9.5126451!4d76.3380907!16s%2Fg%2F11f6xzf99_?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"}
                    className="text-decoration-none lightgray link_hover py-1"
                    target="_blank"

                  >
                    Tharayil House, Kalath Ward, Avalukkunnu.P.O, Alappuzha, Kerala 688006.
                  </Link>
                </div>
              </div>

              <div className="py-2 d-flex ">
                <div className="text-success text-decoration-none fs-4">
                  <BiSolidPhoneCall />
                </div>
                <div>
                  <div className="lightgray ps-3">
                    <Link
                      to={"tel:9074353623"}
                      className="text-decoration-none lightgray link_hover py-1 pera"
                    >
                      +(91) 9074353623
                    </Link>
                  </div>
                  <div className="lightgray ps-3 pt-2">
                    {" "}
                    <Link
                      to={"tel:8129151266"}
                      className="text-decoration-none lightgray link_hover py-1 pera"
                    >
                      +(91) 8129151266
                    </Link>
                  </div>
                  <div className="lightgray ps-3 pt-2">
                    {" "}
                    <Link
                      to={"tel:8129257524"}
                      className="text-decoration-none lightgray link_hover py-1 pera"
                    >
                      +(91) 8129257524
                    </Link>
                  </div>
                </div>
              </div>
              <div className="py-2 d-flex align-content-center ">
                <div>
                  <Link
                    to={"mailto:info@tharayilpower.com"}
                    className="text-success text-decoration-none fs-4"
                  >
                    <FaMailBulk />
                  </Link>
                </div>
                <div>
                  <div className="lightgray ps-3">
                    <Link
                      to={"mailto:info@tharayilpower.com"}
                      className="text-decoration-none lightgray link_hover py-1 pera "
                    >
                      info@tharayilpower.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-md-6 col-lg-2 pt-0 pt-lg-3 ps-4 order-1 order-md-2"
              data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-once="true"            >
              <div className="fw-medium fs-4 text-white py-2">Useful Link</div>

              <div className="py-0 py-md-1 pt-0 pt-md-2">
                <Link
                  to={"/"}
                  className="text-decoration-none lightgray pera link_hover py-1"
                >
                  Home
                </Link>
              </div>
              <div className="py-1">
                <Link
                  to={"/aboutus"}
                  className="text-decoration-none lightgray pera link_hover py-1"
                >
                  About Us
                </Link>
              </div>
              <div className="py-1">
                <Link
                  to={"/project"}
                  className="text-decoration-none lightgray pera link_hover py-1"
                >
                  Projects
                </Link>
              </div>
              <div className="py-1">
                <Link
                  to={"/service"}
                  className="text-decoration-none lightgray pera link_hover py-1"
                >
                  Services
                </Link>
              </div>
              <div className="py-1">
                <Link
                  to={"/career"}
                  className="text-decoration-none lightgray pera link_hover py-1"
                >
                  Career
                </Link>
              </div>
              <div className="py-1">
                <Link
                  to={"/profile"}
                  className="text-decoration-none lightgray pera link_hover py-1"
                >
                  Profile
                </Link>
              </div>
              <div className="py-1">
                <Link
                  to={"/contactus"}
                  className="text-decoration-none lightgray pera link_hover py-1"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-lg-3  pt-0 pt-lg-3  pb-5 pb-lg-3 order-3"
              data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div className="fw-medium fs-4 text-white py-2">Gallery</div>
              <div className="h-100 " id="footer_slick">
                <Slider {...settings} className="p-0 m-0 text-white pt-2 ">
                  {ProductItemlist.map((x, i) => {
                    return (
                      <>
                        <Link key={i} onClick={() => openModal(i)}>
                          <div style={{ height: "150px" }}>
                            <img
                              src={x.img}
                              alt=""
                              class=" img-fluid h-100 object-fit-cover w-100"
                            />
                          </div>
                        </Link>
                      </>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
          <div className=" border-top border-secondary border-1 text-center lightgray mt-2 mt-md-3 p-1 p-md-3">
            Copyright © 2024 &#128154; Solar Energy Power, All rights Reserved.
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="close-modal close-modal p-3 fw-bold bg-success rounded-circle  d-flex align-content-center align-items-center justify-content-center position-fixed top-0 m-3"
              style={{ width: "40px", height: "40px" }}
            >
              X
            </button>
            <button onClick={showPrevImage} className="prev-btn">
              ❮
            </button>
            <img
              src={ProductItemlist[currentIndex].img}
              alt=""
              className="modal-image"
            />
            <button onClick={showNextImage} className="next-btn">
              ❯
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
