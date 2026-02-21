import React from "react";
import HOC from "../HOC";
import Projecthighlit from "./Projecthighlit";
import Homeabout from "./Homeabout";
import Whychooseus from "./Whychooseus";
import Testimonial from "./Testimonial";
import HighlitesImage from "../Productpage/HighlitesImage.jsx";
import Serviceredirect from "./Serviceredirect.jsx";
import BlogNews from "./BlogNews.jsx";
import ClientLogo from "../ClientLogo.jsx";
import HomeSlider from "../HomeSlider.jsx";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import HomeProduct from "./HomeProduct.jsx";

function HomePagemain() {


  return (
    <>
      <HomeSlider />

      <Homeabout />
      <Whychooseus />

      <Serviceredirect />
      <Projecthighlit />
      <div className=" w-100 mx-auto text-center" style={{ marginTop: "170px" }}>
        <Link
          to={"/project"}
          className="text-decoration-none mx-auto w-auto"
        >
          <button className="button-48 mt-3">
            <span className="btn_text fw-bold">
              Show More
              <span className="ps-1 fs-5 fw-bold">
                <MdOutlineArrowOutward />
              </span>
            </span>
          </button>
        </Link>
      </div>
      <HomeProduct />
      <Testimonial />
      <BlogNews />
      <ClientLogo />
      <HighlitesImage />
    </>
  );
}

export default HOC(HomePagemain);
