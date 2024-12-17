import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

function ProductPage() {
  const [activeTab, setActiveTab] = useState("tabs-tab-1");

  const departments = [
    {
      id: "tabs-tab-1",
      title: "Solar water heater",
      image:
        "https://ae-solar.com/_next/image?url=%2Fimages%2FheroSectionBackground.webp&w=3840&q=100",
      description:
        "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      details:
        "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
    },
    {
      id: "tabs-tab-2",
      title: "BLDC fan",
      image:
                "https://5.imimg.com/data5/SELLER/Default/2024/8/441837977/SH/GW/SG/189567047/panasonic-mono-perc-1-500x500.png",

      description:
        "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      details:
        "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal",
    },
    {
      id: "tabs-tab-3",
      title: "Solar Street Lights",
      image:
        "https://media.licdn.com/dms/image/D4D12AQHHHGCd7Vdl6w/article-cover_image-shrink_720_1280/0/1676445878528?e=2147483647&v=beta&t=Sq5oG4tjU-FFOu597p7NqT0qNoLaLhZTbxUNSU0NHYQ",
      description:
        "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut",
      details:
        "Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae",
    },
    {
      id: "tabs-tab-4",
      title: "EV charging stations",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/441837977/SH/GW/SG/189567047/panasonic-mono-perc-1-500x500.png",
      description:
        "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
      details:
        "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
    },
    {
      id: "tabs-tab-5",
      title: "Solar Grid tied Power Plant",
      image: require("../../Assets/Images/animated.png"),
      description:
        "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      details:
        "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal",
    },
  ];
 const generateWhatsAppURL = (productName) => {
   const message = `Hello, I'm interested in the product: ${productName}`;
   return `https://wa.me/8129151266/?text=${encodeURIComponent(message)}`;
 };
  return (
    <>
<div     style={{ marginTop: "250px" }}>
<section
        id="departments"
        className="tabs section my-lg-5 py-5 my-sm-2 py-lg-5 product_high overflow-hidden"
    
      >
        <div className="container">
          <div className="py-3 pb-5 text-center">
            <div
              className="font_stroke"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
           Products
            </div>
            <div
              className="ftittle text-white"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
               Our  Popular poducts 
            </div>
          </div>
        </div>

        <div className="container pb-3 pb-lg-5" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <div className="row ">
            <div className="col-lg-3">
              <ul
                className=" nav nav-tabs flex-column justify-content-between bg_tab pb-2 h-100"
                data-aos="fade-right" data-aos-duration="1800" data-aos-once="true"
              >
                <div className="fw-bold p-3 fs-4 text-white" style={{backgroundColor:"var(--green--)"}}>
                  {" "}
                  Our projects
                </div>
                {departments.map((department) => (
                  <>
                    <li className="nav-item mx-2 mt-2" key={department.id}>
                      <a
                        className={`nav-link ${
                          activeTab === department.id ? "active show" : ""
                        }`}
                        onClick={() => setActiveTab(department.id)}
                      >
                        {department.title}
                      </a>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0 shadow_green p-5 bg-white" data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">
              {departments
                .filter((department) => department.id === activeTab)
                .map((department) => (
                  <div
                    className="tab-pane active show "
                    id={department.id}
                    key={department.id}
                    
                  >
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3 className="fw-bold">{department.title}</h3>
                        <p className="fst-italic">{department.description}</p>
                        <p>{department.details}</p>
                        <div className="mt-2" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                          <Link to={"/"} className="text-decoration-none">
                            <button
                              className="button-48 mt-3"
                              role="button"
                              onClick={() =>
                                window.open(
                                  generateWhatsAppURL(department.title),
                                  "_blank"
                                )
                              }
                            >
                              <span className="btn_text fw-bold">
                                Get Quotes{" "}
                                <span className="ps-1 fs-5 fw-bold">
                                  <MdOutlineArrowOutward />
                                </span>
                              </span>
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <div className="h-100">
                          <img
                            src={department.image}
                            alt={department.title}
                            className="img-fluid h-100 object-fit-contain w-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
</div>
    </>
  );
}

export default ProductPage;
