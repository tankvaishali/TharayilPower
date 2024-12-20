import React from "react";

import { FaGraduationCap, FaHandsHelping, FaLightbulb } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { GiLaurelCrown } from "react-icons/gi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";


function Whujoinus() {
  let join = [
    {
      aos: "flip-up",
      icon: <FaGraduationCap />,
      tittle: "Career Development Opportunities",
      pera: "We invest in our people, offering training, mentorship, and opportunities to grow within the company. You’ll have access to cutting-edge industry knowledge and the chance to build a long-term career in renewable energy.",
    },
    {
      aos: "fade-left",
      icon: <FaLightbulb />,
      tittle: "Leading Solar Innovation",
      pera: "As one of Kerala’s top solar energy providers, Tharayil Power leverages advanced technologies to deliver top-notch solar solutions. Join us, and work alongside industry experts on projects that push the boundaries of sustainable technology.",
    },

    {
      aos: "fade-right",

      icon: <FiGlobe />,
      tittle: "Inclusive & Collaborative Environment",
      pera: "We believe that great ideas come from collaboration. Our inclusive culture values diverse perspectives and promotes open communication, fostering a workplace where everyone can contribute and thrive.",
    },


    {
      aos: "flip-up",

      icon: <GiLaurelCrown />,
      tittle: "Rewards & Recognition",
      pera: "We appreciate hard work and dedication. Tharayil Power offers competitive salaries, performance-based rewards, and regular recognition programs to celebrate our team’s achievements.",
    },
    {
      aos: "fade-left",

      icon: <FaHandsHelping />,
      tittle: "Impactful Work",
      pera: "At Tharayil Power, every project contributes to a cleaner, more sustainable Kerala. Be a part of a team whose work reduces carbon footprints, lowers energy costs, and builds a better future.",
    },

  ];

  return (
    <div className="py-2 py-lg-5 service_bg overflow-hidden">
      <div className="container py-3 py-lg-5">
        <div className="row p-0 m-0 g-3 pb-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="h-100"
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Join Us
              </div>
              <div
                className="ftittle"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Why People Join Us?
              </div>
              <div className="text-secondary border-4 border-start border-success ps-3 pera mt-2" data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true">
                At Tharayil Power, we’re not just creating solar solutions; we’re
                building a community of forward-thinkers, innovators, and
                environmental advocates dedicated to transforming Kerala’s
                energy landscape.
              </div>
            </div>
          </div>
          {join.map((x, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <div
                className="h-100"
                data-aos={x.aos}
                data-aos-duration="1800"
                data-aos-once="true"
              >
                <div className=" h-100 ag-courses_item">
                  <div className="h-100 ag-courses-item_link overflow-hidden position-relative d-block p-4">
                    <div className="ag-courses-item_bg"></div>
                    <div className="text-white position-relative z-2">

                      <div
                        className="fs-5 fw-bold  pb-1 d-flex align-items-center "
                      // style={{ width: "fit-content" }}
                      >
                        <div className="fs-2 joinicon">{x.icon}</div>    <div className="ps-2 pt-1"> {x.tittle}</div>
                      </div>
                      <div className="pera py-2 pt-3 pera_color fw-medium">
                        {x.pera}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center my-2">
          <Link to={"/aboutus"} className="text-decoration-none">
            <button className="button-48 mt-3">
              <span className="btn_text fw-bold">
                Read More{" "}
                <span className="ps-1  fw-bold">
                  <MdOutlineArrowOutward />
                </span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Whujoinus;
