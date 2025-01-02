import React from 'react'
import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import videoSourceMP4 from "../../Assets/Images/solar.mp4";


function Counter() {
  const progressBars = [
    { label: "Trusted Professionals", percentage: 85 },
    { label: "Innovative Solutions", percentage: 75 },
    { label: "Security Advices", percentage: 85 },
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
  return (
    <div className=" overflow-hidden" style={{ marginTop: "200px" }}>
      <div className="container">
        <div className="row p-0 m-0">
          <div className="col-12 col-lg-6 p-0 m-0">
            <div
              className="h-100 d-flex flex-column justify-content-between"
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div className="row p-0 m-0 h-100">
                <div className="col-12 col-lg-6 p-0 m-0">
                  <div
                    className="h-100 p-3 d-flex flex-column justify-content-center"
                    style={{ backgroundColor: "var(--green--)" }}
                  >
                    <div className="text-center pt-1 ">
                      <img
                        src={require("../../Assets/Images/icon_certi.png")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="fs-3 text-center fw-bold text-white pt-3">
                      <CountUp end={20} />+ Years Experience in solar energy
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 p-0 m-0">
                  <div className="h-100 allimg">
                    <div className="desc1"></div>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0518/2557/4043/files/solarroofinstal_1024x1024.jpg?v=1675848096"
                      alt=""
                      className="img-fluid h-100 w-100"
                      style={{ objectFit: "cover" }}
                    />
                   
                  </div>
                </div>
                <div className="col-12  p-0 m-0">
                
                  <div className="h-100 w-100 allimg">
                    <div className="desc1"></div>
                    <video
                      autoPlay
                      loop
                      muted
                      className="h-100 w-100 object-fit-cover"
                    >
                      <source src={videoSourceMP4} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 p-0 m-0">
            <div
              className="h-100 d-flex flex-column justify-content-between product_high text-white p-4 px-5"
              data-aos="fade-left"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div className="py-3">
                <div
                  className="font_stroke"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  More Benefits
                </div>
                <div
                  className="ftittle text-white"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Achieve Next Renewable Energy Revolution
                </div>
              </div>

              <div className="pt-1">
                {progressBars.map((bar, index) => (
                  <div key={index} className="mb-4">
                    <div className="d-flex justify-content-between">
                      <div>{bar.label}</div>
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
                            "linear-gradient(to right, var(--darkgreen--),var(--green--), var(--white--))",
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
        </div>
      </div>
    </div>
  )
}

export default Counter