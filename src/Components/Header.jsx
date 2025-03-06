import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaSolarPanel } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { MdWifiCalling3 } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiSolarPower } from "react-icons/gi";

function Header() {
  return (
    <>
      <nav
        className={`container navbar navbar-expand-lg position-sticky bg_color shadow  top-0 mt-2 mt-lg-3 rounded-pill `}
        style={{ zIndex: 1000 }}
      >
        <div className="container ">
          <div className="rounded-pill  ">
            {" "}
            <Link
              to={"/"}
              className="nav-link  fw-bold ps-2 " style={{ marginTop: "-7px" }}
            >
              <img
                src={require("../Assets/Images/logo.png")}
                alt="not found"
                className="img-fluid logoset  d-flex align-content-center align-items-center"
              />
            </Link>
          </div>

          <button
            className="btn order-2 d-lg-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            {" "}
            <span className="navbar-toggler-icon fs-5 shadow"></span>
          </button>

          <div className="collapse navbar-collapse lg_header" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item m-1">
                <div className="sec h-100 mx-2  text-center">
                  <NavLink
                    to={"/"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeclassname="active"
                  >
                    Home
                  </NavLink>
                </div>
              </li>
              <li className="nav-item m-1">
                <div className="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/aboutus"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeclassname="active"
                  >
                    About Us
                  </NavLink>
                </div>
              </li>

              <li className="nav-item m-1">
                <div className="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/project"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeclassname="active"
                  >
                    Projects
                  </NavLink>
                </div>
              </li>
              <li className="nav-item m-1">
                <div className="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/product"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeclassname="active"
                  >
                    Products
                  </NavLink>
                </div>
              </li>
              <li className="nav-item m-1">
                <div className="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/service"}
                    className="nav-link headmenu maincolor fw-medium  p-2 py-3 text-center"
                    aria-current="page"
                    activeclassname="active"
                  >
                    Services
                  </NavLink>
                </div>
              </li>
              <li className="nav-item m-1">
                <div className="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/career"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeclassname="active"
                  >
                    Career
                  </NavLink>
                </div>
              </li>
              <li className="nav-item m-1">
                <div className="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/profile"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeclassname="active"
                  >
                    Profile
                  </NavLink>
                </div>
              </li>
              <li className="nav-item m-1">
                <div className="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/contactus"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeclassname="active"
                  >
                    Contact
                  </NavLink>
                </div>
              </li>
            </ul>
            <div className="  text-white fw-bolder h-100 d-flex align-content-center align-items-center px-2">
         
            
              <Link to={"tel:8129331577"} className="text-decoration-none text-white fs-4 bg-success p-2 rounded-circle d-flex align-content-center align-itmes-center justify-content-center">  <MdWifiCalling3 /></Link>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start overflow-hidden "
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header ">
          <Link
            to={"/"}
            className="nav-link headmenu maincolor fw-medium pe-2"
          >
            <img
              src={require("../Assets/Images/logo.png")}
              alt="not found"
              className="img-fluid object-fit-contain"
              style={{ width: "180px" }}
            />

          </Link>
          <button
            type="button"
            className="btn-close p-3 capbg_color rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body px-3 overflow-x-hidden ofcv_header ">
          <NavLink
            to={"/"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            aria-current="page"
            activeclassname="active"
          >
            <span className="fs-2 pe-2">
              <FaHome />
            </span>{" "}
            Home
          </NavLink>

          <NavLink
            to={"/aboutus"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeclassname="active"
          >
            <span className="fs-2 pe-2">
              <IoPersonCircle />
            </span>{" "}
            About Us
          </NavLink>

          <NavLink
            to={"/project"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeclassname="active"
          >
            <span className="fs-2 pe-2">
              <FaSolarPanel />
            </span>{" "}
            Projects
          </NavLink>
          <NavLink
            to={"/product"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeclassname="active"
          >
            <span className="fs-2 pe-2">
              <GiSolarPower />
            </span>{" "}
            Products
          </NavLink>
          <NavLink
            to={"/service"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeclassname="active"
          >
            <span className="fs-2 pe-2">
              <GrServices />
            </span>{" "}
            Services
          </NavLink>
          <NavLink
            to={"/career"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeclassname="active"
          >
            <span className="fs-2 pe-2">
              <BsGraphUpArrow />
            </span>{" "}
            Career
          </NavLink>
          <NavLink
            to={"/profile"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeclassname="active"
          >
            <span className="fs-2 pe-2">
              <CgProfile />
            </span>{" "}
            Profile
          </NavLink>
          <NavLink
            to={"/contactus"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeclassname="active"
          >
            <span className="fs-2 pe-2">
              <MdWifiCalling3 />
            </span>{" "}
            Contact Us
          </NavLink>
       
        </div>

      </div>
    </>
  );
}

export default Header;
