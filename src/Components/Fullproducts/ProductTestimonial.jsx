import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import { CiPlay1 } from "react-icons/ci";
import { Link } from "react-router-dom";

function productTestimopnial() {
 

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };

  let ProductItemlist = [
    {
      img: require("../../Assets/Images/profile/Gallery (3).jpg"),
      name: "Alappuzha",
      tittle: "Kerala",
      description:
        " I’m so happy we did. Unbelievable service, great product, and they took care of everything. It’s amazing",
    },
    {
      img: require("../../Assets/Images/profile/Gallery (5).jpg"),

      name: "Mannanchery",
      tittle: "Delhi",
      description:
        "I'm so pleased with Tharayil Power. I was a Community Solar customer for years and I've recently put panels on my roof. ",
    },
    {
      img: require("../../Assets/Images/profile/Gallery (8).jpg"),

      name: "Komalapuram",
      tittle: "Kerala",
      description: " Their experience and professionalism stands out. ",
    },
  ];

  return (
    <>
      <div className="py-3 py-lg-5 mb-0 my-lg-5 overflow-hidden"  >
        <div className="container mt-5">
          <div className="row">
        

            <div
              className="col-12 col-md-6 p-0 m-0 order-2 product_high"
              style={{ backgroundColor: "var(--darkgreen--)" }}
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div className="h-100 p-5">
                <div>
                  <div
                    className="dark_stroke text-center"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    Testimonial
                  </div>
                  <div
                    className="ftittle text-white text-center"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    What They Say
                  </div>
                </div>
                <Slider {...settings}>
                  {ProductItemlist.map((x, i) => {
                    return (
                      <div key={i} className="mt-3 text-center">
                        <div className="pt-3 fs-1 text-secondary">
                          <FaQuoteRight />
                        </div>
                        <div className="py-3 text-white">{x.description}</div>
                        <div
                          className="rounded-circle mx-auto mt-4"
                          style={{ width: "80px", height: "80px" }}
                        >
                          <img
                            src={x.img}
                            alt="not found"
                            className="img-fluid w-100 h-100 rounded-circle object-fit-cover"
                          />
                        </div>
                        <div className="py-1 pt-2">
                          <div className="text-white py-1 fw-medium fs-5">
                            {x.name}
                          </div>
                          <div className="text-secondary fw-medium pb-2">
                            {x.tittle}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>

            <div
              className="col-12 col-md-6 p-0 m-0 order-3"
              data-aos="fade-left"
              data-aos-duration="1600"
              data-aos-once="true"
            >
              <div className="h-100 w-100 ">
                <div className="video_image position-relative "   >
                  <img
                    src={require("../../Assets/Images/testimonial.jpg")}
                    className="img-fluid object-fit-cover h-100 w-100"
                    alt="not found"
                  />
                  <div className="play-icon-overlay d-flex justify-content-center align-items-center">
                    <Link
                      to={"https://www.youtube.com/watch?v=ciOQC_CtcOU&t=3s"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="play-icon-wrapper d-flex justify-content-center align-items-center"

                    >
                      <CiPlay1 className="play_icon text-white fs-3" />
                    </Link>
                  </div>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default productTestimopnial;
