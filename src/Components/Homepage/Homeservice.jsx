import React from 'react'
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

function Homeservice() {

  let servicedata = [
    {
      img: require("../../Assets/Images/blog.jpg"),
      no: "01 Service",
      name: "Residential Solar Solutions",
      pera: " Power your home with solar energy. Save on electricity bills with our custom solar panel installations and battery storage systems.",
      aos: "fade-right",
      to: "/residentialsolar",
    },
    {
      img: require("../../Assets/Images/commercial.jpg"),
      no: "02 Service",
      name: "Commercial Solar Solutions",
      pera: " Tailor-made solar systems to help businesses reduce operational costs and improve energy efficiency.",
      aos: "fade-up",
      to: "/commercialsolar",
    },
    {
      img: require("../../Assets/Images/CFSC PUBLIC INSTITUTIONN.jpeg"),
      no: "03 Service",
      name: "Government And Institutional Solutions",
      pera: "We provide solar solutions for government buildings, educational institutions, and non-profits, helping them achieve sustainability goals.",
      aos: "fade-down",
      to: "/governmentalsolar",
    },
    {
      img: require("../../Assets/Images/residential.jpg"),
      no: "04 Service",
      name: "Design Consultancy",
      pera: "Our experts conduct feasibility studies and create engineering drawings to ensure your solar project is optimized for performance.",
      aos: "fade-left",
      to: "/designconsultancy",
    },
  ];
  return (
    <div className="py-5 my-3 overflow-hidden">
      <div className="container">
        <div className="row p-0 m-0 g-5">
          {
            servicedata.map((x, i) => {
              return (
                <>
                  <div className="col-12 col-md-6 col-lg-6" key={i} data-aos={x.aos}
                    data-aos-duration="1800"
                    data-aos-once="true">
                    <Link
                      to={x.to}
                      className="text-decoration-none"
                    >
                      <div
                        className="h-100 shadow rounded-4 d-flex flex-column justify-content-between card_service"


                      >
                        <div className="p-4">
                          <div className="py-1 text-secondary fw-medium ">
                            {x.no}
                          </div>
                          <div className="py-1 fs-4 fw-bold text-dark">
                            {x.name}
                          </div>
                          <div className="py-2 text-secondary fw-medium pera">
                            {" "}
                            {x.pera}
                          </div>
                        </div>

                        <div className="mt-auto">
                          <div
                            className="position-relative "
                            style={{ height: "254px" }}
                          >

                            <img
                              src={x.img}
                              alt="not found"
                              className="img-fluid rounded-bottom-4 w-100 h-100 object-fit-cover"
                              style={{ objectPosition: "top center" }}
                        
                            />
                            <div
                              className="position-absolute top-0"
                              style={{
                                marginTop: "-25px",
                                width: "fit-content",
                              }}
                            >
                              <Link
                                to={x.to}
                                className="text-white text-decoration-none fs-1 fw-bold z-3"
                              >
                                <div className="service_icon h-100 d-flex align-content-center justify-content-center p-1  ms-4">
                                  <GoChevronRight />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Homeservice