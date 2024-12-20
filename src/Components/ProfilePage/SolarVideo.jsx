import React from 'react'
import CountUp from 'react-countup';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdPlayCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

function SolarVideo() {
  return (
    <>
      <div className="my-2 my-lg-5 overflow-hidden">
        <div className="container">
          <div className="row py-lg-5 py-3 p-0 m-0 g-4 d-flex align-items-center align-content-center ">
            <div className="col-12  col-lg-6">
              <div className="h-100">
                <div
                  className="font_stroke"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Videos
                </div>
                <div
                  className="ftittle "
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                 Our success
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div
                className="h-100 pera"
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-once="true"
              >
              Explore our journey and client success stories through videos showcasing Tharayil Power’s impact across Kerala. Each video highlights our commitment to quality and the satisfaction of our customers.


              </div>
            </div>
          </div>
          <div class="parent" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
            <div class="div1 overflow-hidden vmainbox">
              <Link
                to={"https://www.youtube.com/watch?v=mOHHK8cQdAE"}
                target="_blank"
              >
                <img
                  src={
                  require("../../Assets/Images/profile/videoimage (1).jpg")
                  }
                  className="w-100 h-100 object-fit-cover"
                  alt=""
                />
                <div className="vbody">
                  <MdPlayCircle
                    className="display-5 blink rounded-circle"
                    style={{ background: "white", color: "#0c1c0a" }}
                  />
                </div>
              </Link>
            </div>
            <div class="div2 vmainbox">
              <Link
                to={"https://www.youtube.com/watch?v=bvc9RVQn9dM"}
                target="_blank"
              >
                <img
                  src={
                    require("../../Assets/Images/profile/videoimage (7).jpg")
                    }
                  className="w-100 h-100 img-fluid object-fit-cover"
                  alt=""
                />
                <div className="vbody">
                  <MdPlayCircle
                    className="display-5 blink rounded-circle"
                    style={{ background: "white", color: "#0c1c0a" }}
                  />
                </div>
              </Link>
            </div>
            <div class="div3">
              <div className="div3box py-5 px-5 px-md-3 px-lg-3">
              <div className="grid-item">
                  <h4 className="fw-bold">
                    0<CountUp end={6} enableScrollSpy={true} />+
                  </h4>
                  <div className="pera">Years in Business</div>
                </div>
                {/* <div className="grid-item">
                  <h4 className="fw-bold">
                    <CountUp end={10} enableScrollSpy={true} />+
                  </h4>
                  <div className="pera">State in india</div>
                </div> */}
             
                <div className="grid-item">
                  <h4 className="fw-bold">
                    <CountUp end={1200} enableScrollSpy={true} separator=''/>+
                  </h4>
                  <div className="pera">Happy Clients</div>
                </div>

                <div className="grid-item">
                  <h4 className="fw-bold">
                    <CountUp end={1200} enableScrollSpy={true} separator=''/>+
                  </h4>
                  <div className="pera">Successfull projects</div>
                </div>
              </div>
            </div>
            <div class="div4 overflow-hidden vmainbox">
              <Link
                to={"https://www.youtube.com/watch?v=I4vyLWjAegQ"}
                target="_blank"
              >
                <img
                  src={
                    require("../../Assets/Images/profile/videoimage.jpg")
                    }
                  className="w-100 h-100 img-fluid object-fit-cover"
                  alt=""
                />
                <div className="vbody">
                  <MdPlayCircle
                    className="display-5 blink rounded-circle"
                    style={{ background: "white", color: "#0c1c0a" }}
                  />
                </div>
              </Link>
            </div>
            <div class="div5 text-center py-5">
              <h2 className="">Step into the spotlight</h2>
              <Link to={"/service"} className="text-decoration-none">
                <button className="button-48 mt-4" role="button">
                  <span className="btn_text fw-bold">
                    DISCOVER NOW{" "}
                    <FaArrowRightLong style={{ color: "#4aab3d" }} />
                  </span>
                </button>
              </Link>
            </div>
            <div class="div7 vmainbox">
              <Link
                to={"https://www.youtube.com/watch?v=ciOQC_CtcOU"}
                target="_blank"
              >
                <img
                   src={
                    require("../../Assets/Images/profile/videoimage (4).jpg")
                    }
                  className="w-100 h-100 img-fluid object-fit-cover"
                  alt=""
                />
                <div className="vbody">
                  <MdPlayCircle
                    className="display-5 blink rounded-circle"
                    style={{ background: "white", color: "#0c1c0a" }}
                  />
                </div>
              </Link>
            </div>
            <div class="div8 overflow-hidden vmainbox">
              <Link
                to={"https://www.youtube.com/watch?v=GkV4PyFnmMQ"}
                target="_blank"
              >
                <img
                 src={
                  require("../../Assets/Images/profile/videoimage (5).jpg")
                  }
                  className="w-100 h-100 img-fluid object-fit-cover"
                  alt=""
                />
                <div className="vbody">
                  <MdPlayCircle
                    className="display-5 blink rounded-circle"
                    style={{ background: "white", color: "#0c1c0a" }}
                  />
                </div>
              </Link>
            </div>
            <Link to={"/career"} className="text-decoration-none div9 p-3 py-5">
              <div>
                <div className="pera text-dark fw-medium text-white">
                  LOOKING FOR YOUR DREAM CAREER?
                </div>
                <h4
                  className="py-4  d-flex align-items-center align-content-center"
                  style={{ color: "var(--green--)" }}
                >
                  JOIN US <FaArrowRightLong className="ps-2" />
                </h4>
              </div>
            </Link>
            <div class="div10 overflow-hidden vmainbox">
              <Link
                to={"https://www.youtube.com/watch?v=zjSwaZFnBxw"}
                target="_blank"
              >
                <img
                  src={
                    require("../../Assets/Images/profile/IMG-20240614-WA0022.jpg")
                    }
                  className="w-100 h-100 img-fluid object-fit-cover "
                  alt=""
                />
                <div className="vbody">
                  <MdPlayCircle
                    className="display-5 blink rounded-circle"
                    style={{ background: "white", color: "#0c1c0a" }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolarVideo