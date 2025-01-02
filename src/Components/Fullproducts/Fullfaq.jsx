import React from 'react';
import { GiSolarPower } from 'react-icons/gi';

function Fullfaq() {

  const faqData = [
    {
      question: " How do Solar PV Modules work? ",
      answer: "Solar PV modules convert sunlight into electricity using photovoltaic cells. When sunlight hits these cells, they generate direct current (DC) electricity, which is then converted into usable alternating current (AC) by an inverter, powering your home or business."
    },
    {
      question: " How long do Solar PV Modules last? ",
      answer: "Our solar PV modules are designed for durability, with a lifespan of 25–30 years or more, depending on environmental factors. We offer excellent warranties to ensure long-term performance."
    },
    {
      question: "What is the purpose of a Battery Storage System?",
      answer: "Battery storage systems capture excess solar energy during the day and store it for later use. This provides backup power during nighttime or cloudy weather, reducing your reliance on the grid and ensuring uninterrupted energy supply."
    },
    {
      question: "How do I maintain my Solar Battery Storage System?  ",
      answer: "Regular monitoring is essential for optimal performance. We recommend routine check-ups to ensure the battery is functioning properly, and our team is available for support and servicing if needed."
    },
    {
      question: " Are Home Inverters compatible with all solar systems?",
      answer: "Our home inverters are designed to work with a variety of solar systems. They convert the DC electricity from your solar panels into AC electricity efficiently and are fully customizable to meet the needs of your energy setup."
    },
    {
      question: "How often do I need to replace my home inverter?  ",
      answer: "Home inverters are built to last for 10–15 years. Proper care and regular servicing can extend their lifespan, and they come with a warranty to ensure reliability."
    },
    {
      question: "  What are E-Mobility Solutions and how do they work?  ",
      answer: "Our E-Mobility Solutions include solar-powered EV charging stations. These stations charge electric vehicles using clean solar energy, supporting sustainable transportation while reducing your carbon footprint."
    },
    {
      question: "How do Solar Water Heaters work?  ",
      answer: "Solar water heaters use the sun’s energy to heat water. Solar collectors absorb sunlight and transfer it to the water stored in a tank, providing free hot water for your daily needs."
    },
    {
      question: "  How do I maintain my Solar Water Heater?  ",
      answer: "Solar water heaters require minimal maintenance. Periodic inspections of the system, cleaning of panels, and ensuring the water tank is free of sediment will help ensure smooth operation."
    },
    {
      question: "  What are the benefits of Solar Street Lights? ",
      answer: "Solar street lights use solar energy to power street and outdoor lighting, making them energy-efficient, cost-effective, and low-maintenance. Ideal for residential areas, businesses, and public spaces, they’re an environmentally friendly solution."
    },
    {
      question: "Are Solar Street Lights easy to install?  ",
      answer: "Yes, solar street lights are designed for easy installation and require minimal maintenance. Our team can help with the setup to ensure optimal positioning for maximum sunlight exposure."
    },
    {
      question: " How energy-efficient are BLDC Fans?  ",
      answer: "BLDC fans are highly energy-efficient, consuming up to 70% less electricity than traditional fans. They operate quietly and provide reliable cooling, making them an eco-friendly choice for both homes and businesses."
    },
    {
      question: " Do BLDC Fans require special maintenance?    ",
      answer: "BLDC fans are low-maintenance due to their efficient design. Regular cleaning to remove dust and occasional checks will keep them running smoothly for years."
    },
    {
      question: " What warranty comes with your products?   ",
      answer: "All our products come with comprehensive warranties, typically ranging from 5–10 years, ensuring long-term reliability and peace of mind. We also offer excellent customer support for any queries or issues you may face."
    },
    {
      question: "  How long does installation take?   ",
      answer: "Installation time varies depending on the product. Solar PV systems may take 1–2 days, while other products like solar street lights and BLDC fans can be installed much faster. Our team will provide clear timelines based on your specific requirements."
    },
    {
      question: " Do you provide support after installation?  ",
      answer: "Yes, we provide ongoing support through maintenance services, troubleshooting, and customer assistance. Our commitment is to ensure that your systems continue to work effectively for years to come."
    },
  ];

  return (
    <>
      <div className="work_bg py-2 py-lg-5 overflow-hidden">
        <div className="container py-3 py-lg-5">
   
        <div className="py-3 pb-5 text-center">
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
             FAQs
              </div>
              <div
                className="ftittle"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
               Frequently Asked Questions 
              </div>
            </div>
              <div className="h-100">
           
                <div className="accordion accordion-flush mt-1" id="accordionFlushExample">
                  {faqData.map((faq, index) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed fw-medium"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${index}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapse${index}`}
                        >
                          <span className='fs-4 pe-3 '><GiSolarPower /></span>
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse${index}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body fw-medium">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
         
        </div>
      </div>
    </>
  );
}

export default Fullfaq;
