import React from 'react'
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Position() {

  return (
    <>
      <div className="work_bg pt-3 pt-lg-5 overflow-hidden">
        <div className="container py-3 ">
          <div className="text-center">
            <div
              className="font_stroke"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Positions
            </div>
            <div
              className="ftittle "
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              Join Open Positions
            </div>
            <div className="pera py-2 w-75 mx-auto">
              Explore the opportunities to join our growing team of solar energy professionals. Whether you’re an engineer, project manager, or sales expert, we’re looking for talent that’s passionate about making a difference.
            </div>
            <div class=" my-5 tablewidth  mx-auto" >
              <div class="card " >
                <div class="card-header bg-success text-white">
                  <h5 class="mb-0 text-center ps-2">Join Open Positions</h5>
                </div>
                <div class="card-bodyp-0 m-0 ">
                  <table class="table table-bordered table-hover table-striped text-start m-0">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Sr.</th>
                        <th scope="col">Position</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Digital Marketing Specialist</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Salesperson – B2C (Solar Products)</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Electrical Solar Service Technician</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>ERP Developer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
          <div className="pt-3 ">
           
            <div
              className="fw-bold pb-1 py-2 "
              style={{
                color: "var(--green--)",
                borderBottom: "2px solid var(--green--)",
              }}
              data-aos="fade-up" data-aos-duration="1800" data-aos-once="true"
            >
              Position Overview
            </div>
            <div className="pera pt-2">

              <div className="py-1 d-flex align-content-start align-items-start " data-aos="fade-up" data-aos-duration="1800" data-aos-once="true" data-aos-delay="400" >
                <div
                  className="fs-5"
                  style={{
                    color: "var(--green--)",
                  }}
                >
                  <IoCheckmarkDoneCircle />
                </div>
                <div className="ps-2 pt-1">
                  For each open position, we provide a comprehensive overview that outlines key responsibilities, project goals, and expectations to ensure you find the right fit within Tharayil Power.
                </div>
              </div>
             
            </div>
          </div>
          <div className="py-4">
            <div
              className="fw-bold pb-1 py-3"
              style={{
                color: "var(--green--)",
                borderBottom: "2px solid var(--green--)",
              }}
              data-aos="fade-up" data-aos-duration="1800" data-aos-once="true"
            >
              Qualifications
            </div>
            <div className="pera pt-2">
              <div className="py-1 d-flex align-content-start align-items-start " data-aos="fade-up" data-aos-duration="1800" data-aos-once="true" data-aos-delay="400">
                <div
                  className="fs-5"
                  style={{
                    color: "var(--green--)",
                  }}
                >
                  <IoCheckmarkDoneCircle />
                </div>
                <div className="ps-2 pt-1">
                  Our positions require individuals who are dedicated, technically skilled, and passionate about renewable energy.
                </div>
              </div>
              <div className="py-1 d-flex align-content-start align-items-start " data-aos="fade-up" data-aos-duration="1800" data-aos-once="true" data-aos-delay="400">
                <div
                  className="fs-5"
                  style={{
                    color: "var(--green--)",
                  }}
                >
                  <IoCheckmarkDoneCircle />
                </div>
                <div className="ps-2 pt-1">
                  A background in solar technology, engineering, or environmental sciences is preferred, but we also welcome applicants from diverse fields with the right skill set.
                </div>
              </div>

            </div>

          </div>
          <div className="py-2">
            <div
              className="fw-bold pb-1 py-3"
              style={{
                color: "var(--green--)",
                borderBottom: "2px solid var(--green--)",
              }}
              data-aos="fade-up" data-aos-duration="1800" data-aos-once="true"
            >
              Required Skills
            </div>
            <div className="pera pt-2">
              <div className="py-1 d-flex align-content-start align-items-start " data-aos="fade-up" data-aos-duration="1800" data-aos-once="true" data-aos-delay="400">
                <div
                  className="fs-5"
                  style={{
                    color: "var(--green--)",
                  }}
                >
                  <IoCheckmarkDoneCircle />
                </div>
                <div className="ps-2 pt-1">
                  Depending on the position, our roles require a variety of skills, including technical expertise in solar solutions, project management capabilities, and a commitment to teamwork. Each role has specific skill requirements that we’ll outline in detail in our open listings.
                </div>
              </div>

            </div>

            <div className="pera py-4 text-secondary text-center">Ready to power up your career with Tharayil Power? Apply today and join us in building a sustainable future!</div>
            <div className=' text-center' data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true" data-aos-delay="400">
              <Link to={"mailto:info@tharayilpower.com"} className="text-decoration-none">
                <button className="button-48 mt-3">
                  <span className="btn_text  fw-bold">
                    Apply Now{" "}
                    <span className="ps-1 fw-bold">
                      <MdOutlineArrowOutward />
                    </span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Position