import React from "react";
import { Link } from "react-router-dom";

function Brochures() {
  return (
    <>
      <div className="brouchers_bg overflow-hidden">
        <div className="container py-1 py-lg-5 pb-5 mb-0 mb-lg-5">
          <div className="row p-2 p-lg-5 py-5 overflowX-hidden d-flex align-content-center align-items-center">
            <div
              className="col-12 col-lg-6 py-3"
              data-aos="fade-right"
              data-aos-duration="1700"
              data-aos-once="true"
            >
              <div className="h-100 text-white pt-3">
                <div
                  className="dark_stroke font_stroke "
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Brochures
                </div>
                <div
                  className="ftittle text-white "
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Select Your Solar Engineering Solution
                </div>
                <div
                  className="pera pt-4 p-0 py-lg-3 p-lg-2"
                  style={{ color: "var(--lightgray--)" }}
                >
                  Download our brochures to learn more about our specialized solar solutions, designed to meet diverse energy needs. From residential systems to large-scale commercial installations, our solutions are engineered for performance, cost-effectiveness, and sustainability.
                </div>
                <div
                  className="pera pt-4 p-0 p-lg-2 ps-0 "
                  style={{ color: "var(--lightgray--)" }}
                >
                  Our brochures offer a detailed look into Tharayil Power’s solar services, providing valuable insights into our approach, technology, and commitment to green energy.
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 p-0 p-lg-5 pt-3">
              <div
                className="mx-auto"
                style={{ height: "250px", width: "250px" }}
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                <Link
                  to={require("../../Assets/pdf/Brochures_pdf.pdf")}
                  target="_blank"
                >
                  <div className="test-shine" style={{ height: "250px" }}>
                    <img
                      src={require("../../Assets/Images/brouchuresimage.png")}
                      alt="not found"
                      className="img-fluid w-100 h-100 object-fit-fill"
                    />
                  </div>
                  <div className="text-center">
                    {/* Updated download logic */}
                    <a
                      href={require("../../Assets/pdf/Brochures_pdf.pdf")}
                      download="Brochures_pdf.pdf"
                    >
                      <button className="button-48 mt-4">
                        <span className="btn_text fw-bold">Download Now</span>
                      </button>
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brochures;
