import React, { useEffect, useState } from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  const totalSlides = 3;

  useEffect(() => {
    if (initialLoad) {
      setTimeout(() => {
        setInitialLoad(false);
      }, 0);
    }

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [initialLoad]);

  return (
    <div className="carousel" style={{ marginTop: "-100px" }}>
      {Array.from({ length: totalSlides }, (_, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? "active" : ""} ${index === 0 && initialLoad ? "initial" : ""} slide${index + 1}`}
          style={{ zIndex: index === currentSlide ? 2 : 1 }}
        >
          <div className="column animate"></div>
          <div className="column animate"></div>
          <div className="column animate"></div>
          <div className="column animate"></div>
          <div className="column animate"></div>

          <h1 className={`carousel-content container ${index === currentSlide && !initialLoad ? "show" : ""} text-white p-lg-5 p-4 sliderwidth fw-medium p-md-5 display-5 lh-base text-uppercase`}>
            {index === 0 && (
              <>
                Power your world with smarter energy – Explore Tharayil Power today!
                {index === currentSlide && (
                  <div className="mt-2">
                    <Link to={"/product"} className="text-decoration-none">
                      <button className="button-48 mt-3 p-1 p-lg-2">
                        <span className="btn_text fw-bold">
                          Explore Now
                          <span className="ps-1 fs-5 fw-bold">
                            <MdOutlineArrowOutward />
                          </span>
                        </span>
                      </button>
                    </Link>
                  </div>
                )}
              </>
            )}
            {index === 1 && (
              <>
                Switch to sustainable energy – Discover Tharayil Power now!
                {index === currentSlide && (
                  <div className="mt-2">
                    <Link to={"/service"} className="text-decoration-none">
                      <button className="button-48 mt-3 p-1 p-lg-2 ">
                        <span className="btn_text fw-bold">
                          Explore Now
                          <span className="ps-1 fs-5 fw-bold">
                            <MdOutlineArrowOutward />
                          </span>
                        </span>
                      </button>
                    </Link>
                  </div>
                )}
              </>
            )}
            {index === 2 && (
              <>
                Take charge of your energy needs – Start with Tharayil Power!
                {index === currentSlide && (
                  <div className="mt-2">
                    <Link to={"/contactus"} className="text-decoration-none">
                      <button className="button-48 mt-3 p-1 p-lg-2 ">
                        <span className="btn_text fw-bold">
                          Explore Now
                          <span className="ps-1 fs-5 fw-bold">
                            <MdOutlineArrowOutward />
                          </span>
                        </span>
                      </button>
                    </Link>
                  </div>
                )}
              </>
            )}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default HomeSlider;