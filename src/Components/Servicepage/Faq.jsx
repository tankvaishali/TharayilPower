import React from 'react'
import { GiSolarPower } from 'react-icons/gi';

function Faq() {
  return (
    <>
      <div className=" work_bg py-2 py-lg-5 overflow-hidden">
        <div className="container py-3 py-lg-5">
          <div className="row p-0 m-0 g-5 ">
            <div className="col-12 col-lg-6">
              <div
                className=" img_faq d-flex flex-column justify-content-end allimg"
                data-aos="fade-right"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                <div className="desc1 z-0"></div>
                <div
                  className=" ms-auto  bg-success p-4 fw-bold profit_cont text-white text-center"
                  data-aos="zoom-in"
                  data-aos-duration="1800"
                  data-aos-once="true"
                >
                 Affordable Solar
      Installation
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div className="h-100">
                <div
                  className="font_stroke"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  FAQs
                </div>
                <div
                  className="ftittle "
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  How does green power work ?
                </div>
                <div
                  class="accordion accordion-flush mt-1"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                   <span className='fs-4 pe-3'><GiSolarPower /></span>    How much can I save on my electricity bills with a solar installation?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse "
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                      The amount you save depends on the size of your solar system, your
 energy usage, and available sunlight. On average, Kerala homeowners save up to 35%
 on annual energy costs by switching to solar with Tharayil Power. For a detailed
 estimate, our experts can provide a customized savings report based on your unique
 energy needs.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                     <span className='fs-4 pe-3'><GiSolarPower /></span>      What is the installation process for a solar system, and how long does it take?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                      The installation process involves a site assessment, design, and installation
 of your solar panels and inverter. Typically, it takes one to three days to complete,
 depending on the system's complexity. Tharayil Power manages all stages, including
 permits and grid connection, ensuring a smooth and efficient installation.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                       <span className='fs-4 pe-3'><GiSolarPower /></span>    Are there government subsidies or incentives available for solar installation in
                        Kerala?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                      Yes, the Kerala government provides several subsidies and incentives to
 encourage solar adoption for residential, commercial, and institutional projects. Tharayil
 Power can help you navigate these subsidies and apply for the best incentives
 available, making your investment more affordable.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                      <span className='fs-4 pe-3'><GiSolarPower /></span>    How long does a solar system last, and what maintenance is required?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                      Solar systems are highly durable and typically last 25–30 years with
 minimal maintenance. Routine cleaning and occasional inspections are recommended
 to keep panels performing at their best. Tharayil Power offers maintenance packages to
 ensure your system remains efficient and productive over the years.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                     <span className='fs-4 pe-3'><GiSolarPower /></span>    Can i add battery storage to my solar system, and what are the benefits?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                      Absolutely! Adding battery storage allows you to store excess energy for
 use during nighttime or power outages, providing greater energy independence.
Tharayil Power offers advanced battery storage solutions tailored to Kerala’s climate,
 helping you maximize your system’s efficiency and resilience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq