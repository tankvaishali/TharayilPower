import React from "react";
import HOC from "../HOC";
import Aboutus from "./Aboutus";
import Expertist from "./Expertist";
import "../../Assets/Css/Aboutuscss.css";
import Profatible from "./Profatible";
import OurTeam from "./OurTeam";
import MissionVission from "./MissionVission";
import AboutConbtact from "./AboutConbtact";
import ClientLogo from "../ClientLogo";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Whatmakeus from "./Whatmakeus";


function AboutusPage() {
  return (
    <>
      <div className="bg_main">
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center align-content-center flex-column jr_tittle "
            style={{ height: "75vh" }}
          >
            <h4
              className="text-white text-center lh-base text_size fw-bold text-capitalize"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-once="true"
              style={{ letterSpacing: "1px" }}
            >
   Empowering Kerala with Best Solar Solutions - Transforming Homes, Businesses, and Communities with Reliable, Cost-Saving Energy.
            </h4>
            <div
              className="text-white mt-2 fs-6 fw-semibold"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <Link
                to={"/"}
                className="text-decoration-none text-white bgtittle"
              >
                Home
              </Link>{" "}
              <MdKeyboardDoubleArrowRight /> <span>About</span>
            </div>
          </div>
        </div>
      </div>
      <Aboutus />
      <Expertist />
      <Whatmakeus/>
      <MissionVission />
      <Profatible />
      <AboutConbtact />
      <OurTeam />

      <ClientLogo />
    </>
  );
}

export default HOC(AboutusPage);
