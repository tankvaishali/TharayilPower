import React from "react";
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';


function Whytharayilpower() {


    return (
        <>
            <div className="mt-3">
                <div className="container py-3 pb-lg-5 my-5 overflow-hidden">
         
                            <div className="text-center">
                                <div
                                    className="font_stroke"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    data-aos-once="true"
                                >
                                    Why us

                                </div>
                                <div
                                    className="ftittle"
                                    data-aos="fade-down"
                                    data-aos-duration="1500"
                                    data-aos-once="true"
                                >
                                    Why Choose Tharayil Power?
                                </div>
                            </div>
                       

                    <div className="row p-0 m-0 pt-4">

                        <div className="col-12 col-lg-4 mt-3 mt-lg-5 ">
                            <div
                                className="h-100 "
                                data-aos="fade-right"
                                data-aos-duration="1800"
                                data-aos-once="true"
                            >
                                <div>
                                    <div className="fw-bold text-success fs-5">Trusted Expertise:</div>
                                    <div className="pera ">

                                        Backed by the trust of 1200+ satisfied clients, we deliver proven energy solutions.


                                    </div>
                                    <div className="fw-bold text-success fs-5 pt-2 pt-lg-3 ">Reliable Services:</div>
                                    <div className="pera ">

                                        We prioritize quality and consistency in every project we undertake.


                                    </div>
                                    <div className="fw-bold text-success fs-5 pt-2 pt-lg-3 "> Efficient Solutions:</div>
                                    <div className="pera ">

                                        Our innovative products are designed to maximize performance and reduce energy costs.


                                    </div>


                                    <div className="pt-2">
                                        <Link to={"/aboutus"} className="text-decoration-none">
                                            <button className="button-48 mt-3">
                                                <span className="btn_text fw-bold">
                                                About Us {" "}
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
                        <div className="col-12 col-lg-4  mt-3 mt-lg-5 ">
                            <div
                                className="h-100 py-3 py-lg-0"
                                data-aos="fade-down"
                                data-aos-duration="1800"
                                data-aos-once="true"
                            >
                                <img
                                    src="https://taranakisolar.nz/wp-content/uploads/revslider/slider-1/Group-134891.png"
                                    alt="not found"
                                    className="img-fluid w-100 h-100 object-fit-contain object-fit-xxl-cover "
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mt-3 ps-0 ps-lg-5">
                            <div
                                className="h-100 mt-4"
                                data-aos="fade-left"
                                data-aos-duration="1800"
                                data-aos-once="true"
                            >
                                <div>
                                    <div className="fw-bold text-success fs-5">Comprehensive Support:</div>
                                    <div className="pera ">

                                        From consultation to maintenance, we’re with you every step of the way.

                                    </div>
                                </div>
                                <div>
                                    <div className="fw-bold text-success fs-5 pt-2 pt-lg-3">Sustainability Focus:</div>
                                    <div className="pera ">

                                        Helping you embrace a greener future with eco-friendly, cutting-edge technologies.

                                    </div>
                                </div>
                                <div>
                                    <div className="fw-bold text-success fs-5 pt-2 pt-lg-3"> Custom Design:</div>
                                    <div className="pera ">

                                    A clear proposal outlines product options, system configurations, cost estimates, giving you confidence in your investment. 

                                    </div>
                                </div>
                                <div className="pt-2">
                                    <Link to={"/profile"} className="text-decoration-none">
                                        <button className="button-48 mt-3">
                                            <span className="btn_text fw-bold">
                                                Learn More{" "}
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
                </div>
            </div>
        </>
    )
}

export default Whytharayilpower;
