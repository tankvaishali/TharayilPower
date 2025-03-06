import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import HOC from "../HOC";

const images = [
  require("../../Assets/Images/blog-portfolio-1.jpg"),
  require("../../Assets/Images/blog-portfolio-2.jpg"),
  require("../../Assets/Images/blog-portfolio-3.jpg"),
];

function Blog03() {
  return (
    <>
      <div className="my-5 overflow-hidden">
        <div className="container">
          <div className="text-center ">
            <div
              className="font_stroke"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Government Support
            </div>
            <div
              className="ftittle w-75 mx-auto"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Government Initiatives Supporting Solar Adoption in Kerala
            </div>
            <div
              className="pera py-2 text-secondary  w-75 mx-auto"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
              data-aos-delay="400"
            >
              The Kerala government is championing the move to solar energy by
              offering various initiatives designed to make solar installations
              accessible for residents, businesses, and institutions alike.
              Through subsidies, tax incentives, grants, and rebates, the
              government has made it financially advantageous to invest in solar
              energy, empowering Keralites to reduce their environmental
              footprint and utility costs. This comprehensive guide explores the
              primary government programs supporting solar adoption across
              Kerala and how Tharayil Power assists clients in navigating these
              incentives to maximize their savings.
            </div>
          </div>

          <div>
            <div className="row justify-content-center mt-4">
              {images.map((image, index) => (
                <div
                  className="col-12 col-md-6 col-lg-4"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  <div className="solarinfoimg mb-4">
                    <div className="descr"></div>
                    <img
                      src={image}
                      className="w-100 h-100 object-fit-cover"
                      alt="not found"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="row">
              <div className="col-12 col-lg-7 my-4">
                <div className="py-3 py-lg-5">
                  <div
                    className="font_stroke"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    Installations
                  </div>
                  <div
                    className="ftittle "
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    Subsidies for Residential Installations
                  </div>
                </div>
                <div className="pera" style={{ textAlign: "justify" }}>
                  The Kerala government, in collaboration with the Ministry of
                  New and Renewable Energy (MNRE), offers attractive subsidy
                  programs for residential solar installations. These subsidies
                  cover a substantial portion of installation costs, making
                  solar energy affordable for homeowners. Under the MNRE subsidy
                  scheme, residents can receive up to 40% off the cost of
                  small-scale rooftop solar systems (up to 3 kW). This reduction
                  not only makes solar energy an appealing choice but also
                  reduces the initial cost barrier, encouraging more households
                  to embrace clean energy.
                </div>
                <div className="py-3 pera">
                  <div>
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    One such homeowner, a Tharayil Power client in Ernakulam,
                    installed a 3 kW solar panel system with the help of
                    government subsidies.
                  </div>
                  <div className="py-2">
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    The client reported a 35% reduction in their annual
                    electricity bills, transforming solar energy into a
                    cost-effective and sustainable solution for their household.
                  </div>
                  <div>
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    By tapping into these subsidies, Kerala residents can save
                    money while contributing to a greener future.
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-lg-5 my-4"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div className="h-100">
                  <div className="solarinfoimg my-4">
                    <div className="descr"></div>
                    <img
                      src={require("../../Assets/Images/blog-3.jpg")}
                      className="w-100 h-100 object-fit-cover"
                      alt="not found"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {/ Battery storage solutions /} */}
          <div>
            <div className="row d-flex ">
              <div
                className="col-12 col-lg-5 order-1 order-lg-0 mb-4"
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div className="h-100">
                  <div className="solarinfoimg">
                    <div className="descr"></div>
                    <img
                      src={require("../../Assets/Images/blog-3-solar-panel-with-green-plant.jpg")}
                      className="img-fluid w-100 h-100 "
                      alt="not found"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7 order-0 order-lg-1 mb-2">
                <div className=" h-100">
                  <div
                    className="font_stroke"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    Incentives
                  </div>
                  <div
                    className="ftittle "
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    Commercial Incentives for Businesses
                  </div>
                  <div className="pera pt-2" style={{ textAlign: "justify" }}>
                    For businesses, the Kerala government offers a range of tax
                    benefits and incentives that make solar installations
                    financially viable. Through accelerated depreciation,
                    businesses can claim up to 40% of the solar asset cost as a
                    depreciation expense in the first year, allowing them to
                    recover the initial investment faster. Additionally,
                    commercial solar adopters benefit from various GST
                    concessions on solar equipment, further reducing the overall
                    cost.
                  </div>
                  <div className="py-2 pt-3">
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    Tharayil Power specializes in assisting businesses with
                    navigating these incentives, helping them identify the best
                    solar financing options to maximize their savings.
                  </div>{" "}
                  <div className="py-2">
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    For example, a small business owner in Kochi partnered with
                    Tharayil Power to set up a 10 kW rooftop solar system. By
                    leveraging the government’s tax benefits and Tharayil
                    Power’s financial advisory services, the business saved over
                    20% on their energy costs within the first year.
                  </div>{" "}
                  <div className="py-2">
                    <FaCheckCircle
                      className="fs-6"
                      style={{ color: "#4aab3d" }}
                    />{" "}
                    Commercial solar incentives not only benefit individual
                    businesses but also contribute to a sustainable economic
                    environment across Kerala.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {/  Energy efficiency audits /} */}
          <div>
            <div className="row d-flex">
              <div
                className="col-12 col-lg-6 mb-4 "
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div className="">
                  <div
                    className="font_stroke"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    Institutional Support
                  </div>
                  <div
                    className="ftittle "
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    Institutional Support Programs for Public Buildings and
                    Schools
                  </div>
                </div>
                <div className="pera pt-2" style={{ textAlign: "justify" }}>
                  Government grants and funding initiatives in Kerala aim to
                  promote solar energy adoption in public institutions,
                  including schools, hospitals, and government buildings.
                  Programs like the ‘Solar for Schools’ initiative, supported by
                  the Kerala State Electricity Board (KSEB), provide funding to
                  educational institutions looking to implement solar systems.
                  These initiatives reduce energy costs for public buildings,
                  allowing funds to be redirected towards other essential
                  services.
                </div>
                <div className="py-3 pera" style={{ textAlign: "justify" }}>
                  Tharayil Power recently collaborated with a school in Thrissur
                  to secure funding for a solar project that reduced the
                  school’s energy costs by 30%. This project not only provided
                  clean energy but also served as an educational tool for
                  students, raising awareness about renewable energy.
                  Institutional support programs like these make a significant
                  impact on Kerala’s path toward a more sustainable future, and
                  Tharayil Power is dedicated to helping institutions secure the
                  resources they need to embrace solar.
                </div>
              </div>
              <div
                className="col-12 col-lg-6"
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div className="h-100">
                  <div className="">
                    <div
                      className="font_stroke"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-once="true"
                    >
                      Benefits
                    </div>
                    <div
                      className="ftittle "
                      data-aos="fade-down"
                      data-aos-duration="1500"
                      data-aos-once="true"
                    >
                      Tax Benefits and Rebates
                    </div>
                    <div className="py-3 pera" style={{ textAlign: "justify" }}>
                      Kerala offers additional tax benefits and rebates to
                      incentivize solar adoption further. In addition to the
                      benefits mentioned for commercial entities, Kerala
                      residents and businesses can take advantage of tax credits
                      and exemptions, significantly lowering the long-term cost
                      of solar energy systems. Solar adopters can also receive
                      rebates from the KSEB based on the amount of energy they
                      export back to the grid, creating a sustainable income
                      stream for residential and commercial solar users.
                    </div>
                    <div className="py-3 pera" style={{ textAlign: "justify" }}>
                      Tharayil Power’s dedicated financial advisory team assists
                      clients in Kerala in understanding and accessing these
                      benefits, ensuring that each solar project is financially
                      optimized. From navigating tax credits to taking full
                      advantage of rebates, Tharayil Power helps clients build a
                      strong financial foundation for their solar investment,
                      reinforcing solar energy as a smart and economical choice
                      for both homes and businesses.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 my-2">
                <div className="text-center pt-2">
                  <div
                    className="ftittle "
                    data-aos="fade-down"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    Let go, embrace the new
                  </div>
                </div>
                <div
                  className="pera py-3 "
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="400"
                >
                  With an array of government incentives, the adoption of solar
                  energy has never been more accessible or affordable in Kerala.
                  Tharayil Power is here to help clients make the most of these
                  opportunities, offering guidance on subsidies, tax benefits,
                  and funding programs tailored to maximize savings and impact.
                </div>
                <div
                  className="pera py-2 "
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="400"
                >
                  Ready to explore how you can benefit from Kerala’s
                  government-supported solar initiatives? Contact Tharayil Power
                  today for a personalized consultation and take your first step
                  toward sustainable energy savings.
                </div>
              </div>
            </div>
          </div>
          <div
            className="my-2 my-lg-4 mx-auto text-center"
            data-aos="zoom-in"
            data-aos-duration="1800"
            data-aos-once="true"
          >
            <a href="/#blog_news" className="text-decoration-none">
              <button className="button-48 mt-3">
                <span className="btn_text fw-bold">Back</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HOC(Blog03);
