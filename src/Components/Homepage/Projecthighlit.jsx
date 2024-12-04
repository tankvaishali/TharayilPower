import React from "react";
import Slider from "react-slick";
import "../../Assets/Css/Home.css";
import { Link } from "react-router-dom";
import { TbCircleArrowUpRight, TbCircleArrowUpRightFilled } from "react-icons/tb";

function Projecthighlit() {
  let ProductItemlist = [
    {
      img: require("../../Assets/Images/Chennai LIC 15kW_3.JPG"),
      name: "   Reduced annual energy costs by 35%.",
      tittle: "Lorem, ipsum dolor. ",
    },
    {
      img: require("../../Assets/Images/projects.jpg"),

      name: "   Improved operational efficiency and minimized energy waste.",
      tittle: "Lorem, ipsum dolor. ",
    },
    {
      img: require("../../Assets/Images/project.jpg"),

      name: "   Empowered sustainable energy adoption at scale.",
      tittle: "Lorem, ipsum dolor. ",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Adjust the speed as needed
    pauseOnHover: true,
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
      <div className="product_high ">
        <div className="container ">
          <div className="row pt-5 ">
            <div className="col-12  col-lg-9 overflow-hidden">
              <div
                className="dark_stroke"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Projects
              </div>
              
              <div
                className="ftittle text-white"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
             Explore how Tharayil Power has helped clients achieve their energy goals.
              </div>

        
            </div>
            <div className="col-12  col-lg-3 pera text-white"></div>

            <div className="py-5 px-0" style={{ marginBottom: "-200px" }}>
              <Slider
                {...settings}
                className="p-0 m-0 text-white header_slickslider pt-3 pt-lg-5"
              >
                {ProductItemlist.map((x, i) => {
                  return (
                    <>
                      {/* <Link key={i} to={"/"}> */}
                      <div class="container_sec" key={i}>
                        <img
                          src={x.img}
                          alt="Avatar"
                          class="pro_image img-fluid h-100 object-fit-cover"
                        />
                        <div class="overlay_sec">
                          <div class="text text-center h-100 px-2 d-flex flex-column justify-content-center">
                            {/* <div className=" icon_color ">
                              <TbCircleArrowUpRight
                                className="text-white  rounded-circle"
                                style={{
                                  backgroundColor: "var(--darkgreen--)",
                                }}
                              />
                            </div> */}
                            <div className="p-3 px-2">
                              <div className="fw-bold fs-4">{x.tittle}</div>
                              <div className="pera fs-6 pt-2" >{x.name}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* </Link> */}
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
          </div>
    
    </>
  );
}

export default Projecthighlit;
