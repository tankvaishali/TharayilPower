import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function OurTeam() {
const Team = [
  {
    img:require("../../Assets/Images/STAFF PHOTOS/Abhijith Sankar M.jpg") ,
    name: "Abijith Sankar M",
    position: "GENERAL MANAGER",
    aos: "zoom-in-right",
    objectposition:"top center"
  },
  {
    img:require("../../Assets/Images/STAFF PHOTOS/Anandu Prabhan.jpeg") ,
    name: "Anandu Prabhan",
    position: "PRODUCTION HEAD/COORDINATOR",
    aos: "zoom-in-left",
    objectposition:"top center"
  },
  {
    img:require("../../Assets/Images/STAFF PHOTOS/Sreelekshmi S.jpg") ,
    name: "Shreelexshmi S",
    position: "QC HEAD (RM/FINISHED GOODS)",
    aos: "zoom-in-right",
  },
  {
    img:require("../../Assets/Images/STAFF PHOTOS/Sharika Sankar.jpg") ,
    name: "Sharika Sankar",
    position: "QC HEAD (RM/FINISHED GOODS)",
    aos: "zoom-in-right",
  },
  {
    img:require("../../Assets/Images/STAFF PHOTOS/Remya Rajan.jpg") ,
    name: "Vishnu",
    position: "QC HEAD (RM/FINISHED GOODS)",
    aos: "zoom-in-right",
  },
  {
    img:require("../../Assets/Images/STAFF PHOTOS/Vidya Mol S.jpg") ,
    name: "Jishnu P",
    position: "QC HEAD (RM/FINISHED GOODS)",
    aos: "zoom-in-right",
  },
];
  return (
    <>
      <div className="team_bg py-3 py-lg-5">
        <div className="container px-4 mgtop my-5">
          <div className="text-center py-3">
            <div
              className="font_stroke "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Team
            </div>
            <div
              className="ftittle "
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Our Creative Team
            </div>
            <div className='pera py-2 w-75 mx-auto' 
             data-aos="fade-up"
             data-aos-duration="1500"
             data-aos-once="true"
            >At Tharayil Power, our team of experts brings technical skill, local expertise, and a shared passion for renewable energy. With a client-centered approach, we work closely with you to ensure your solar investment meets your energy goals while supporting Kerala’s vision for a greener future.</div>
          </div>
          <div className="row justify-content-center">
            {Team.map((item) => {
              return (
                <div
                  className="col-md-5 col-9 m-4 text-md-start text-center zoom shadow-lg zoom rounded-3 p-3 p-lg-0 bg-white"
                  data-aos={item.aos}
                  data-aos-duration="1800"
                  data-aos-once="true"
                >
                  <div className="row align-items-center ">
                    <div className="col-lg-6 text-center ">
                      <img
                        src={item.img}
                        height={150}
                        width={150}
                        className="rounded-circle object-fit-cover my-4 zoom-animation shadow object-fit-contain "
                        style={{objectPosition:" top center"}}
                        alt={item.name}
                      />
                    </div>
                    <div className="col-lg-6">
                      <h4 className="fw-bold text-success">{item.name}</h4>
                      <p className='pera text-secondary'>{item.position}</p>
                      <div>
                        <Link
                          to={"/"}
                          className="text-decoration-none linkinsta"
                        >
                          <FaFacebook className="m-2 instaface" />
                        </Link>
                        <Link
                          to={"/"}
                          className="text-decoration-none linkinsta"
                        >
                          {" "}
                          <FaInstagram className="m-2 instaface" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam