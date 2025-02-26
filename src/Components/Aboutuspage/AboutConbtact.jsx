import React from 'react';
import { Link } from 'react-router-dom';

function AboutConbtact() {
  return (
    <>
      <div className="aboutcontactbg w-100  overflow-hidden">
        <div
          className="container overflow-hidden"
          data-aos="zoom-out"
          data-aos-duration="1800"
          data-aos-once="true"
        >
          <div
            className="d-flex align-items-center align-content-center justify-content-center  w-100"
            style={{ height: 450 }}
          >
            <div className="video-overlay-content text-center text-white p-4 p-md-5 ">
              <h1 className="py-3  jr_tittle text-capitalize fs-1">
                Contact Us for Any Assistance
              </h1>
              <p className="py-3 pera kjh">
                Our team is here to answer your questions and guide you through the process of switching to solar.
              </p>

              <div>
                <Link to={"/contactus"} className="text-decoration-none">
                  <button className="button-48 mt-3" >
                    <span className="btn_text fw-bold">
                      Contact Us

                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutConbtact