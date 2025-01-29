import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

function OurTeam() {
const Team = [
  {
    img:require("../../Assets/Images/STAFF PHOTOS/remya.JPEG") ,
    name: "remya rajan",
    position: "	general manager sales",
    aos: "zoom-in-right",
    objectposition:"top center"
  },
  {
    img:require("../../Assets/Images/STAFF PHOTOS/Anandu Prabhan.jpeg") ,
    name: "ANANDU PRABHAN",
    position: "Digital Marketing Associate",
    aos: "zoom-in-left",
    objectposition:"top center"
  },
  {
    img:require("../../Assets/Images/STAFF PHOTOS/akhil.JPEG") ,
    name: "akhil c a",
    position: "project manager",
    aos: "zoom-in-left",
    objectposition:"top center"
  },
  {
    img:require("../../Assets/Images/STAFF PHOTOS/Sreelekshmi S.jpg") ,
    name: "SREELEKLSHMI S",
    position: "Service Manager",
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
                            Our Experience Team
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
                    <div className="col-lg-5 text-center ">
                      <img
                        src={item.img}
                        height={160}
                        width={160}
                        className="rounded-3 object-fit-cover m-4 zoom-animation shadow img-fluid "
                        style={{objectPosition:" top center"}}
                      alt=''
                      />
                    </div>
                    <div className="col-lg-7 mediaset  text-md-center  text-lg-start">
                      <h4 className="fw-bold text-success text-uppercase">{item.name}</h4>
                      <p className=' text-secondary text-capitalize'>{item.position}</p>
              
                    </div>
                  </div>
                </div>
              );
            })}

<div className="my-2 w-100 mx-auto text-center">
                     <Link
                       to={"/profile"}
                       className="text-decoration-none mx-auto w-auto"
                     >
                       <button className="button-48 mt-3" >
                         <span className="btn_text fw-bold">
                         Explore Company
                           <span className="ps-1 fs-5 fw-bold">
                             <MdOutlineArrowOutward />
                           </span>
                         </span>
                       </button>
                     </Link>
                   </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam