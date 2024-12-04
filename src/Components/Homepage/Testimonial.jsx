import React, { useEffect, useRef } from "react";
// import videoSourceMP4 from "../../Assets/video/05.mp4";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import { CiPlay1 } from "react-icons/ci";
import { Link } from "react-router-dom";

function Testimonial() {
  const progressBars = [
    { label: "total no. of projects completed", percentage: 95 },
    { label: "Megawatts Created", percentage: 75 },
    { label: "Carbon print reduced", percentage: 85 },
    { label: "CO2 emissions reduced", percentage: 90 }, // Remove JSX from here
    { label: "Security Advices", percentage: 80 },
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

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
  };

  let ProductItemlist = [
    {
      img: "https://img.freepik.com/free-photo/confident-black-haired-young-man-pointing-himself_1262-14882.jpg?ga=GA1.1.1772879955.1732685969&semt=ais_hybrid",
      name: "Mayur Tank",
      tittle: "Atlanta",
      description:
        " I’m so happy we did. Unbelievable service, great product, and they took care of everything. It’s amazing",
    },
    {
      img: "https://img.freepik.com/free-photo/happy-business-man-standing-smiling-isolated-gray-space-beautiful-male-half-length-portrait-young-satisfy-man_155003-26695.jpg?ga=GA1.1.1772879955.1732685969&semt=ais_hybrid",
      name: "Rob Fontain",
      tittle: "Delhi",
      description:
        "I'm so pleased with Tharayil Power. I was a Community Solar customer for years and I've recently put panels on my roof. ",
    },
    {
      img: "https://img.freepik.com/free-photo/satisfied-bearded-male-customer-show-thumbs-up-approval_176420-19984.jpg?ga=GA1.1.1772879955.1732685969&semt=ais_hybrid",
      name: "peter messner",
      tittle: "Kerala",
      description: " their experience and professionalism stands out. ",
    },
  ];

  return (
    <>
      <div className="py-3 py-lg-5 mb-0 mb-lg-5 overflow-hidden"  style={{ marginTop: "200px" }}>
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
                  src="https://media.istockphoto.com/id/1473638950/photo/technicians-carrying-photovoltaic-solar-module-while-installing-solar-panel-system-on-roof-of.jpg?s=612x612&w=0&k=20&c=BHP3woa9yO0Em-dbAOkDSAy1x78D2wpXaKV9pOH18CU="
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
                        <div>{bar.percentage}%</div>
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
                    src={require("../../Assets/Images/Chennai LIC 15kW_3.JPG")}
                    className="img-fluid object-fit-cover h-100 w-100"
                    alt=""
                  />
                  <div className="play-icon-overlay d-flex justify-content-center align-items-center">
                    {/* <Link
                      to={videoSourceMP4}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="play-icon-wrapper d-flex justify-content-center align-items-center"
                    
                    >
                      <CiPlay1 className="play_icon text-white fs-3" />
                    </Link> */}
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
