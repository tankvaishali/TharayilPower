import React from "react";
import HOC from "./HOC";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

function Schemebanner() {
  // ✅ List data for left & right side
  const leftList = [
    "Affordable Solar Energy for All",
    "Huge Savings on Bills",
    "Empowering Homes, Villages, Businesses, Farmers etc..",
  ];

  const rightList = [
    "Government support makes solar installation cost-effective",
    "Eco-Friendly Future",
    "Trusted and transparent initiative supported.",
  ];

  // ✅ Component to render single list item
  const ListItem = ({ text }) => (
    <div className="d-flex  align-items-center text-dark mb-0 mb-md-2">
      <h1
        className="textsizehead text-center lh-base pt-0 pt-md-2 fs-4 text_size fw-bold text-capitalize"
        style={{ color: "var(--green--)" }}
      >
        <IoCheckmarkDoneCircle />
      </h1>
      <div className="ps-2 pt-0 pt-md-2 text_size_media fw-semibold text-white ">{text}</div>
    </div>
  );

  return (
    <div>
      <div className="landingimage_scheme d-md-flex d-block justify-content-center align-items-center align-content-center pt-5 py-5 py-md-0 pt-md-0">
        <div className="container py-5 py-md-0">
          <div className="row py-5 py-md-0">
              <div className="col-12 text-center">
              <h1 className="fw-bold text-uppercase text-white display-5">
                PM Suryagrah Yojana
              </h1>
              <p className="text-light ">
                Empowering India with clean, affordable & sustainable solar energy
              </p>
            </div>
            {/* Left Column */}
            <div className="col-12 col-md-6 rounded-4  p-md-3 ">
              {leftList.map((item, index) => (
                <ListItem key={index} text={item} />
              ))}
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-6  p-md-3">
              {rightList.map((item, index) => (
                <ListItem key={index} text={item} />
              ))}
            </div>

          
               <Link
                        to={"/"}
                        className="text-decoration-none mx-auto w-auto"
                      >
                        <button className="button-48 mt-3">
                          <span className="btn_text fw-bold">
                           Apply Now
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
  );
}

export default HOC(Schemebanner);
