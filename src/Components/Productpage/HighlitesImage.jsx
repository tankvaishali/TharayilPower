import React, { useState } from "react";

function HighlitesImage() {
  const [modalActive, setModalActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: require("../../Assets/Images/highlights.jpg"),
      alt: "a forest after an apocalypse",
    },
    {
      src: require("../../Assets/Images/highlits1.jpg"),
      alt: "a waterfall and many rocks",
    },
    {
      src: require("../../Assets/Images/highliths2.jpg"),
      alt: "a house on a mountain",
    },
    {
      src: "https://energy-nest.com/wp-content/uploads/energynest-systemintegration-erneuerbarer-energien.jpg",
      alt: "some pink flowers",
    },
    {
      src: "https://www.unicef.org/innovation/sites/unicef.org.innovation/files/styles/hero_tablet/public/UNI414903.JPG.webp?itok=xB7Exy1q",
      alt: "big rocks with some trees",
    },
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="w-100 overflow-hidden " >
        <div className="container-xxl ">
          <div className="image_hight">
            <div className="gallery"  >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  onDoubleClick={() => openModal(index)}
                />
              
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalActive && (
        <div className={`modal ${modalActive ? "active" : ""}`}>
          {/* <div className=" ">
            <span
              className="close  "
              onClick={closeModal}
            >
              &times;
            </span>
          </div> */}
          <button onClick={closeModal} className="close-modal p-3 fw-bold bg-success rounded-circle  d-flex align-content-center align-items-center justify-content-center m-3" style={{width:"40px",height:"40px"}}>
              X
            </button> 
          <span className="prev" onClick={prevImage}>
            &#10094;
          </span>
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
          <span className="next" onClick={nextImage}>
            &#10095;
          </span>
        </div>
      )}
    </>
  );
}

export default HighlitesImage;
