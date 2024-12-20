import React, { useEffect, useRef } from "react";
// import videoSourceMP4 from "../../Assets/video/05.mp4";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import { CiPlay1 } from "react-icons/ci";
import { Link } from "react-router-dom";

function Testimonial() {
  const progressBars = [
    { label: "Total No of projects Completed", percentages: "1200+", percentage: 100 },
    { label: "Total Megawatts Created", percentages: " 5 MW", percentage: 40 },
    { label: "Carbon Print Reduced", percentages: "7,590 Metric Tons of CO₂ per year ", percentage: 50 },
    { label: "Co2 Emission Reduced", percentages: "7,590 Metric Tons of CO₂ per year", percentage: 50 }, // Remove JSX from here
    { label: "Security Advices", percentages: "400+", percentage: 90 },
  ];

  const progressRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const percentage = bar.getAttribute("data-percentage");
            bar.style.width = `${percentage}%`;
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // return () => {
    // progressRefs.current.forEach((ref) => {
    // if (ref) {
    // observer.unobserve(ref);
    // }
    // });
    // };
  }, []);

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
              className="col-12 col-md-6 p-0 m-0 order-1 order-lg-0"
              data-aos="fade-right"
              data-aos-duration="1600"
              data-aos-once="true"
            >
              <div className="h-100 allimg">
                <div className="desc1"></div>
                <img
                  // src="https://media.istockphoto.com/id/1473638950/photo/technicians-carrying-photovoltaic-solar-module-while-installing-solar-panel-system-on-roof-of.jpg?s=612x612&w=0&k=20&c=BHP3woa9yO0Em-dbAOkDSAy1x78D2wpXaKV9pOH18CU="
                  src={require("../../Assets/Images/testimonial1.jpg")}
                  alt=""
                  className="img-fluid w-100 h-100  object-fit-cover"
                />
              </div>
            </div>

            <div
              className="col-12 col-md-6 p-0 m-0 product_high order-0 order-lg-1"
              data-aos="fade-left"
              data-aos-duration="1600"
              data-aos-once="true"
            >
              <div className="h-100 p-5 d-flex flex-column justify-content-between">
                <div className="pt-1">
                  {progressBars.map((bar, index) => (
                    <div key={index} className="mb-4 text-white">
                      <div className="d-flex justify-content-between">
                        <div>
                          {/* Handling JSX for CO2 emissions */}
                          {bar.label === "CO2 emissions reduced" ? (
                            <>
                              <span className="fw-bold pe-1">
                                {" "}
                                CO<sub>2</sub>
                              </span>{" "}
                              emissions reduced
                            </>
                          ) : (
                            bar.label
                          )}
                        </div>
                        <div className="text-end">{bar.percentages}</div>
                      </div>
                      <div
                        className="progress rounded-0"
                        style={{ height: "20px" }}
                      >
                        <div
                          ref={(el) => (progressRefs.current[index] = el)}
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "0%",
                            backgroundImage:
                              "linear-gradient(to right, var(--darkgreen--), var(--green--), var(--white--))",
                            transition: "width 1s ease-in-out",
                          }}
                          aria-valuenow={bar.percentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          data-percentage={bar.percentage}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

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
                            alt=""
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
                    alt=""
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
                {/* <video autoPlay loop muted className="h-100 w-100 object-fit-cover">
                  <source src={videoSourceMP4} type="video/mp4" />
                </video> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
