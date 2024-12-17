import React from "react";
import HOC from "../HOC";
import Projecthighlit from "./Projecthighlit";
import Homeabout from "./Homeabout";
import Whychooseus from "./Whychooseus";
import Testimonial from "./Testimonial";
import { SiWhatsapp } from "react-icons/si";
import HighlitesImage from "../Productpage/HighlitesImage.jsx"
import Serviceredirect from "./Serviceredirect.jsx";
import BlogNews from "./BlogNews.jsx";
import ClientLogo from "../ClientLogo.jsx";
import HomeSlider from "../HomeSlider.jsx";



function HomePagemain() {
  return (
    <>
      <HomeSlider/>
      <div><SiWhatsapp/></div>
      {/* <ImageGallery/> */}
      <Homeabout />
      <Whychooseus />
      {/* <Homeservice /> */}
      <Serviceredirect/>

      <Projecthighlit />
      <Testimonial />
      <BlogNews />
      <ClientLogo/>
      <HighlitesImage/>
    </>
  );
}

export default HOC(HomePagemain);
