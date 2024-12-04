import React from "react";
import { Link } from "react-router-dom";

function BlogNews() {
  return (
    <>
      <div className="work_bg py-0 py-lg-1 pb-lg-5 overflow-hidden" id="blog_news">
        <div className="container py-1 py-lg-3">
          <div className="row p-0 m-0 g-5">
            <div className="col-12 col-lg-6">
              <div>
                <div
                  className="font_stroke"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Blog & News
                </div>
                <div
                  className="ftittle "
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Stay Informed with the Best in Renewable Energy
                </div>
                <div
                  className="py-3 pera text-secondary"
                  data-aos="fade-right"
                  data-aos-duration="1800"
                  data-aos-once="true"
                >
                Discover insights and updates on renewable energy trends, technologies, and success stories through our blog.
                </div>
              </div>
              <div>
               
                <div
                  className="m-0 m-lg-5 mt-5"
                  data-aos="fade-right"
                  data-aos-duration="1800"
                  data-aos-once="true"
                >
                  <Link to={"/blog01"} className="text-decoration-none">
                  {" "}
                  <div className="blog_height ">
                    <img
                      src={require("../../Assets/Images/footerimage.jpg")}
                      alt=""
                      className="img-fluid w-100 h-100 z-0 object-fit-cover shadow"
                    />
                  </div>
                  <div className="content-box ">
                    {" "}
                    <div
                      className="w-75 mx-auto bg-white p-4 z-1 shadow position-relative"
                      style={{ marginTop: "-55px" }}
                    >
                      <div className="text-white fw-bold ms-auto datecss p-3 border border-5 border-white">
                         03/12
                      </div>
                      <div className="py-2 fw-bold fs-5 text-dark"> Top 5 Benefits of Solar Energy for Homes</div>
                      <div className="pera py-2 text-secondary">
                      Discover the financial and environmental advantages of going solar.
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
              <div>
                <div
                  className="m-0 m-lg-5 mt-5"
                  data-aos="fade-right"
                  data-aos-duration="1800"
                  data-aos-once="true"
                >
                  {" "}
                  <Link to={"/blog02"} className="text-decoration-none">

                  <div className="blog_height">
                    <img
                      src={
                        "https://www.nationalgrid.com/sites/default/files/styles/content_embedded_image/public/images/EnergyExplained_DifferentTypesRenewableEnergy_640x360.jpg"
                      }
                      alt=""
                      className="img-fluid w-100 h-100 z-0 object-fit-cover shadow"
                    />
                  </div>
                  <div className="content-box ">
                    {" "}
                    <div
                      className="w-75 mx-auto bg-white p-4 z-1 shadow position-relative"
                      style={{ marginTop: "-55px" }}
                    >
                      <div className="text-white fw-bold ms-auto datecss p-3 border border-5 border-white">
                        27/12
                      </div>
                      <div className="py-2 fw-bold fs-5 text-dark"> How Commercial Solar Panels Improve Efficiency</div>
                      <div className="pera py-2 text-secondary">
                      Learn how solar solutions are transforming businesses.
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 pt-0 pt-lg-5 mt-0">
              <div>
                <div
                  className="m-0 m-lg-5 mt-5"
                  data-aos="fade-left"
                  data-aos-duration="1800"
                  data-aos-once="true"
                >
                  {" "}
                  <Link to={"/blog03"} className="text-decoration-none">

                  <div className="blog_height">
                    <img
                      src={
                        "https://lh3.googleusercontent.com/A0tsFTT66BnJ25wV1jgF0wl0h0PC-ly1YsHO4-WAHUUC1Wr1n6IBMSY3HNaWF-iTeoz2NmXlF415W8AjleF7XgNplsQ7aa2l"
                      }
                      alt=""
                      className="img-fluid w-100 h-100 z-0 object-fit-cover shadow"
                    />
                  </div>
                  <div className="content-box ">
                    {" "}
                    <div
                      className="w-75 mx-auto bg-white p-4 z-1 shadow position-relative"
                      style={{ marginTop: "-55px" }}
                    >
                      <div className="text-white fw-bold ms-auto datecss p-3 border border-5 border-white">
                        03/12
                      </div>
                      <div className="py-2 fw-bold fs-5 text-dark"> Government Initiatives Supporting Solar Adoption</div>
                      <div className="pera py-2 text-secondary">
                      A look at subsidies and incentives for institutional solar.
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
              <div>
                <div
                  className="m-0 m-lg-5 mt-5"
                  data-aos="fade-left"
                  data-aos-duration="1800"
                  data-aos-once="true"
                >
                  {" "}
                  <Link to={"/blog04"} className="text-decoration-none">

                  <div className="blog_height">
                    <img
                      src={
                        "https://www.irena.org/-/media/Images/IRENA/Agency/Press-Release/2020/Sep/Renewable_energy_jobs_2020.jpg"
                      }
                      alt=""
                      className="img-fluid w-100 h-100 z-0 object-fit-cover shadow"
                    />
                  </div>
                  <div className="content-box ">
                    {" "}
                    <div
                      className="w-75 mx-auto bg-white p-4 z-1 shadow position-relative"
                      style={{ marginTop: "-55px" }}
                    >
                      <div className="text-white fw-bold ms-auto datecss p-3 border border-5 border-white">
                        03/12
                      </div>
                      <div className="py-2 fw-bold fs-5 text-dark"> Designing Your Solar System: A Step-by-Step Guide</div>
                      <div className="pera py-2 text-secondary">
                      Essential tips for planning an effective solar installation.
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogNews;
