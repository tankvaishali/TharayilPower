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
import Whatmakeus from "./Whatmakeus";


function AboutusPage() {
  return (
    <>

      <div className="landingimage d-flex justify-content-center align-items-center align-content-center">
        <div className="container">
          <h1 className="textsizehead text-white text-center lh-base text_size fw-bold text-capitalize"
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-once="true"
            style={{ letterSpacing: "1px" }}>
            Empowering Kerala with Best Solar Solutions - Transforming Homes, Businesses, and Communities with Reliable, Cost-Saving Energy.


          </h1>
        </div>
      </div>

      <Aboutus />
      <Expertist />
      <Whatmakeus />
      <MissionVission />
      <Profatible />
      <AboutConbtact />
      <OurTeam />

      <ClientLogo />
    </>
  );
}

export default HOC(AboutusPage);
