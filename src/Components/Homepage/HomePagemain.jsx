import React from "react";
import HOC from "../HOC";
import Projecthighlit from "./Projecthighlit";
import Homeabout from "./Homeabout";
import Whychooseus from "./Whychooseus";
import Testimonial from "./Testimonial";
import HighlitesImage from "../Productpage/HighlitesImage.jsx";
import Serviceredirect from "./Serviceredirect.jsx";
import BlogNews from "./BlogNews.jsx";
import ClientLogo from "../ClientLogo.jsx";
import HomeSlider from "../HomeSlider.jsx";
import ProductPage from "../Productpage/ProductPage.jsx";

function HomePagemain() {


  return (
    <>
      <HomeSlider />
 
      {/* <ImageGallery/> */}
      <Homeabout />
      <Whychooseus />
      {/* <Homeservice /> */}
      <Serviceredirect />
      <Projecthighlit />
      <ProductPage/>
      <Testimonial />
      <BlogNews />
      <ClientLogo />
      <HighlitesImage />
    </>
  );
}

export default HOC(HomePagemain);
