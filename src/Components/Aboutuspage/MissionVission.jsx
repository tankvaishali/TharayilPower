import React from 'react'
import CountUp from 'react-countup';

function MissionVission() {
  return (
    <>
      <div className="mission_vission py-5 overflow-hidden">
        <div className="container py-5">
          <div className="row p-0 m-0 g-5">
            <div className="col-12 col-lg-9">
              <div className="d-block d-lg-flex justify-content-between align-items-center align-content-center py-4">
                <div className=" shadow bg_mission p-5 text-white my-2" data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">
                  <div>
                    <div className="fs-2  fw-bold">Mission</div>
                    <div className="py-3 pera">
                      To create a cleaner, sustainable future by providing advanced solar solutions that empower individuals, businesses, and communities in Kerala.
                    </div>
                  </div>
                </div>

                <div
                  className="ms-lg-5 ms-0 shadow bg_vission p-5 text-white my-4
                "
                  data-aos="fade-left" data-aos-duration="1800" data-aos-once="true"
                >
                  <div>
                    <div className="fs-2  fw-bold">Vission</div>
                    <div className="py-3 pera">
                      To lead the transformation to a world powered by renewable energy, paving the way for a more sustainable planet for future generations.
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block d-lg-flex justify-content-between align-items-stretch align-content-center">
                <div className="m-0 shadow bg_mission p-4 text-white" data-aos="zoom-in" data-aos-once="true" data-aos-duration="1800" style={{ flex: '1' }}>
                  <div>
                    <div className="fs-1 fw-bold">
                      0<CountUp start={0} end={6} enableScrollSpy={true} separator="" /> +
                    </div>
                    <div className='pt-2 fs-5 fw-bold'>Years Of Experience</div>
                    <div className="pt-1 pera">
                      Over a decade of experience in renewable energy solutions.
                    </div>
                  </div>
                </div>

                <div className="m-0 shadow bg-success p-4 text-secondary bg-white" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true" style={{ flex: '1' }}>
                  <div>
                    <div className="fs-1 fw-bold">
                      <CountUp end={97} enableScrollSpy={true} separator="" /> %
                    </div>
                    <div className='pt-2 fs-5 fw-bold text-dark'>Satisfaction Rate</div>
                    <div className="pt-1 pera">
                      Our clients satisfaction reflects our dedication to excellence and reliability.
                    </div>
                  </div>
                </div>

                <div className="m-0 shadow bg_vission p-4 text-white" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true" style={{ flex: '1' }}>
                  <div>
                    <div className="fs-1 fw-bold">
                      0<CountUp end={5} enableScrollSpy={true} separator="" /> MW
                    </div>
                    <div className='pt-2 fs-5 fw-bold'>Mega Watt Produced</div>
                    <div className="pt-1 pera">
                      Helping power Kerala with clean, sustainable energy at scale.
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* <div className="row p-0 m-0 py-5">
              <div className="col-12 col-lg-3 text-white p-0 m-0">
                <div className="h-100 p-4 bg-success">
                  <div className="fs-2  fw-bold ">
                    {" "}
                    <CountUp end={250} enableScrollSpy={true} separator="" /> +
                  </div>
                  <div className="py-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing 
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 text-white p-0 m-0">
                <div className="h-100 p-4 bg-success">
                  <div className="fs-2  fw-bold ">
                    {" "}
                    <CountUp end={250} enableScrollSpy={true} separator="" /> +
                  </div>
                  <div className="py-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing 
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 text-white p-0 m-0">
                <div className="h-100 p-4 bg-success">
                  <div className="fs-2  fw-bold ">
                    {" "}
                    <CountUp end={250} enableScrollSpy={true} separator="" /> +
                  </div>
                  <div className="py-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing 
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MissionVission