import React, { useState, useEffect } from "react";
import HOC from "../HOC";
import Projecthighlit from "./Projecthighlit";
import Homeabout from "./Homeabout";
import Whychooseus from "./Whychooseus";
import Testimonial from "./Testimonial";
import { SiWhatsapp } from "react-icons/si";
import HighlitesImage from "../Productpage/HighlitesImage.jsx";
import Serviceredirect from "./Serviceredirect.jsx";
import BlogNews from "./BlogNews.jsx";
import ClientLogo from "../ClientLogo.jsx";
import HomeSlider from "../HomeSlider.jsx";
import ProductPage from "../Productpage/ProductPage.jsx";

function HomePagemain() {
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  // Handle scroll event to show/hide WhatsApp icon
  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowWhatsapp(true);
    } else {
      setShowWhatsapp(false);
    }
  };

  // Add scroll event listener on component mount and clean it up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWhatsappClick = () => {
    const phoneNumber = "8129151266"; // Replace with your WhatsApp number
    const message = "Hi, I would like to inquire about your Tharayil Power."; // Customize your message here
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <HomeSlider />
      {showWhatsapp && (
        <div
          className="whatsappicon text-white bg-success fs-2 fw-bold rounded-circle d-flex justify-content-center align-items-center p-2 animated-image"
          onClick={handleWhatsappClick}
        >
          <SiWhatsapp />
        </div>
      )}
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
