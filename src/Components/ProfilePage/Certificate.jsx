import React from "react";
const images = [
  {
    img: require("../../Assets/Images/Awards/award1.jpg"),
    fit:"object-fit-fill",
  },
  {
    img: require("../../Assets/Images/Awards/award2.jpg"),
    fit:"object-fit-fill",
  },
  {
    img: require("../../Assets/Images/Awards/award3.jpg"),
    fit:"object-fit-fill",
  },
  {
    img: require("../../Assets/Images/Awards/award4.jpg"),
    fit:"object-fit-fill",

  },
  {
    img: require("../../Assets/Images/Awards/award5.jpg"),
    fit:"object-fit-fill",

  },

  {
    img: require("../../Assets/Images/Awards/award6.jpg"),
    fit:"object-fit-contain",

  },
  {
    img: require("../../Assets/Images/Awards/award7.jpg"),
    fit:"object-fit-cover",

  },
  {
    img: require("../../Assets/Images/Awards/award8.jpg"),
    fit:"object-fit-contain",

  },
  {
    img: require("../../Assets/Images/Awards/award9.jpg"),
    fit:"object-fit-cover",

  },
  {
    img: require("../../Assets/Images/Awards/award10.jpg"),
    fit:"object-fit-cover",

  },
  {
    img: require("../../Assets/Images/Awards/award11.jpg"),
    fit:"object-fit-contain",

  },
  {
    img: require("../../Assets/Images/Awards/award12.jpg"),
    fit:"object-fit-cover",

  },
];

function Certificate() {
  return (
    <>
      <div className="my-2 my-lg-5 overflow-hidden">
        <div className="container">
          <div className="py-3">
            <div className="py-3 pb-5 text-center">
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >

                Certificates  & Awards


              </div>
              <div
                className="ftittle "
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Our Achievements
              </div>
              <div className="pera w-75 mx-auto pt-2" data-aos="fade-up" data-aos-duration="1800" data-aos-once="true" data-aos-delay="400">
                Tharayil Power is certified and recognized by leading industry bodies, reaffirming our dedication to excellence in solar energy solutions. Our accreditations reflect our compliance with the highest standards in renewable energy, ensuring our customers receive reliable and efficient solar systems.
              </div>
            </div>
          </div>
          <div className="row">
            {images.map((src, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-3 mb-4"
                data-aos="zoom-in"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                <div className="certimain">
                  <img src={src.img} className={`certi-image img-fluid ${src.fit}`} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificate;
