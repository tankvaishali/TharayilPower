import React from "react";
const images = [

  {
    img:require("../../Assets/Images/profile/fcertificate2.JPEG")
  },
 
  {
    img:require("../../Assets/Images/profile/certificatef.JPEG")
  },
  {
    img:require("../../Assets/Images/profile/certificate03.JPEG")
  },
  {
    img:require("../../Assets/Images/profile/IMG_20240926_105237539.jpg")
  },
  {
    img:require("../../Assets/Images/profile/IMG_20240926_105229508.jpg")
  },
  {
    img:require("../../Assets/Images/profile/Awards (2).jpg")
  },
  {
    img:require("../../Assets/Images/profile/Awards (5).jpg")
  },

  {
    img:require("../../Assets/Images/profile/Awards (4).jpg")
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
              <div className="pera w-75 mx-auto pt-2" data-aos="fade-up" data-aos-duration="1800"  data-aos-once="true" data-aos-delay="400">
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
                  <img src={src.img} className="certi-image img-fluid object-fit-fill" alt="" />
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
