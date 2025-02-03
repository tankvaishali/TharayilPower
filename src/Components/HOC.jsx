import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { SiWhatsapp } from 'react-icons/si';

function HOC(Components) {
  function Newcomponent() {
    const [showWhatsapp, setShowWhatsapp] = useState(false);

  
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowWhatsapp(true);
      } else {
        setShowWhatsapp(false);
      }
    };

   
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

   
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const handleWhatsappClick = () => {
      const phoneNumber = "8129331577"; 
      const message = "Hi, I would like to inquire about your Tharayil Power."; 
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank");
    };
    return (
      <>
        <Header />
        {showWhatsapp && (
          <div
            className="whatsappicon text-white bg-success fs-2 fw-bold rounded-circle d-flex justify-content-center align-items-center p-2 animated-image"
            onClick={handleWhatsappClick}
          >
            <SiWhatsapp />
          </div>
        )}
        <Components />
 
        <Footer />
      </>
    )
  }
  return (
    Newcomponent
  )
}

export default HOC

