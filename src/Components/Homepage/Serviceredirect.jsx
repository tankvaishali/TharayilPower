import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Serviceredirect() {
    let service = [
      {
        icon: "https://media.istockphoto.com/id/1455686956/vector/solar-panel-with-sun-icon-with-reflection-on-white-background.jpg?s=612x612&w=0&k=20&c=vkLyFDaoDXj2pv7X0a4QSYCGUPuf_tuM3YPsJmin-a0=",
        name: "Residential Solar Solutions  ",
        pera: "    Power your home with solar energy. Save on electricity bills with our custom solar panel installations and battery storage systems.",
        classnameadd: "",
        aos:"fade-down",
      },
      {
        icon: "https://static.vecteezy.com/system/resources/previews/014/557/359/non_2x/take-hybrid-energy-icon-simple-style-vector.jpg",
        name: "Commercial Solar Solutions  ",
        pera: " Tailor-made solar systems to help businesses reduce operational costs and improve energy efficiency.",
        classnameadd: "margint",
        aos:"fade-up",
      },
      {
        icon: "https://t3.ftcdn.net/jpg/08/94/60/56/360_F_894605696_8woeaUfuqt2AivMPBhnDkwuPvhLxMnbO.jpg",
        name: " Government and Institutional Solutions  ",
        pera: "    We provide solar solutions for government buildings, educational institutions, and non-profits, helping them achieve sustainability goals.",
        classnameadd: "",
        aos:"fade-down",
      },
      {
        icon: "https://cdn.icon-icons.com/icons2/3405/PNG/512/renewable_energy_icon_216052.png",
        name: " Design Consultancy",
        pera: " Our experts conduct feasibility studies and create engineering drawings to ensure your solar project is optimized for performance.",
        classnameadd: "margint",
        aos:"fade-up",
      },
    ];
  return (
    <>
      <div className="service_bg overflow-hidden">
        <div className="container py-3 py-lg-5">
          <div className="row p-0 m-0 g-4 d-flex align-items-center align-content-center ">
            <div className="col-12  col-lg-6">
              <div className="h-100">
                <div
                  className="font_stroke"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Best Solar Solutions
                </div>
                <div
                  className="ftittle "
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                The Best in Renewable Energy Solutions
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="h-100 pera" data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">
              Tharayil Power offers a comprehensive range of services for residential, commercial, and institutional solar projects, along with expert design consultancy to bring your vision to life. Our solutions are tailored to meet diverse energy needs while helping reduce costs and environmental footprint.
              </div>
            </div>
          </div>
          <div className="row p-0  g-5 sapce_top ">
            {service.map((x, i) => {
              return (
                <>
                  <div className="col-12 col-md-6 col-lg-3 " key={i}  data-aos={x.aos} data-aos-duration="1800" data-aos-once="true"> 
                    <div
                      className={`h-100 p-3 text-center shadow-lg bg_sercard ${x.classnameadd}`}
                     
                    >
                      <div
                        className="text-center mx-auto my-2"
                        style={{ width: "100px", height: "100px" }}
                      >
                        <img
                          src={x.icon}
                          alt=""
                          className="img-fluid w-100 h-100 object-fit-contain bg-white"
                        />
                      </div>
                      <div className="py-2 pt-4  fw-bold  ">{x.name}</div>
                      <div className="py-2 pera text-secondary fw-bold " style={{fontSize:13}}>
                        {x.pera}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            <div className="my-5 w-100 mx-auto text-center">
              <Link
                to={"/service"}
                className="text-decoration-none mx-auto w-auto"
              >
                <button className="button-48 mt-3" role="button">
                  <span className="btn_text fw-bold">
                  Explore Solutions{" "}
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

export default Serviceredirect