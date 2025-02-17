import React from "react";

const ClientLogo = () => {
  const logos = [
    { img: require("../Assets/Images/partnerlogo (1).png") },
    { img: require("../Assets/Images/partnerlogo (2).png") },
    { img: require("../Assets/Images/partnerlogo (3).png") },
    { img: require("../Assets/Images/partnerlogo (4).png") },
    { img: require("../Assets/Images/partnerlogo (1).jpg") },
    { img: require("../Assets/Images/partnerlogo.png") },
  ];

  return (
    <>
      <div className="container my-5">
        <div className="text-center">
          <div
            className="font_stroke"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Our Partners
          </div>
          <div
            className="ftittle"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Distinguished Solar Solutions
          </div>
        </div>

        <div className="partners-logo-slider my-5 mt-2 py-2 py-lg-5">
          <div className="slide-track">
         
            {logos.concat(logos).map((logo, index) => (
              <div className="slide" key={index}>
                <img src={logo.img} alt="Logo" className="img-fluid p-4 d-flex slign-content-center align-items-center justify-content-center object-fit-cover" />
              </div>
            ))}
            {logos.concat(logos).map((logo, index) => (
              <div className="slide" key={index}>
                <img src={logo.img} alt="Logo" className="img-fluid p-4 d-flex slign-content-center align-items-center justify-content-center object-fit-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientLogo;
