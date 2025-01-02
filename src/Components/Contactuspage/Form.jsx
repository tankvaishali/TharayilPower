import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Form() {
  const [formData, setFormData] = useState({
    fullname: "",
    emailid: "",
    location: "",
    mobileNumber: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let errorMessage = "";

    if (name === "fullname") {
      if (!value) {
        errorMessage = "Name is required";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        errorMessage = "Name must contain only alphabet characters";
      }
    }

    if (name === "emailid") {
      if (!value) {
        errorMessage = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMessage = "Email is not valid";
      } else if (!/@(gmail\.com|yahoo\.com)$/.test(value)) {
        errorMessage = "Email domain must be Gmail or Yahoo";
      }
    }

    if (name === "location") {
      if (!value) {
        errorMessage = "Location is required";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        errorMessage = "Location must contain only alphabet characters";
      }
    }

    if (name === "mobileNumber") {
      if (!value) {
        errorMessage = "Phone number is required";
      } else if (!/^\d{10}$/.test(value)) {
        errorMessage = "Phone number must be exactly 10 digits";
      }
    }

    if (name === "description" && !value) {
      errorMessage = "Description is required";
    }

    return errorMessage;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      newErrors[field] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);

    if (isValid) {
      emailjs
        .send(
          "service_ozet3zj", // Replace with your EmailJS service ID
          "template_cw4dm9r", // Replace with your EmailJS template ID
          {
            ...formData,
            to_email: "digital.tharayilpower@gmail.com", // Ensure the email is sent to the desired recipient
          },
          "Fh9UiMpa17Wn1Mmir" // Replace with your EmailJS public key
        )
        .then(
          () => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your form has been submitted successfully!",
              showConfirmButton: false,
              timer: 1800,
            });
            setFormData({
              fullname: "",
              emailid: "",
              location: "",
              mobileNumber: "",
              description: "",
            }); 
          },
          (error) => {
            console.error("FAILED...", error);
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Failed to submit the form. Please try again.",
              showConfirmButton: true,
            });
          }
        );
    }
  };

  return (
    <div className="container">
      <div className="contact_bg py-5">
        <div className="row p-0 m-0">
          <div className="col-12 col-lg-7 p-0 m-0">
            <div className="h-100 p-3 p-lg-5 product_high rounded-5">
              <div className="py-3 text-center">
                <div className="dark_stroke">Contact Us</div>
                <div className="ftittle text-white">Get In Touch With Us</div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row p-0 m-0 contact_input g-4">
                  <div className="col-12 col-lg-6">
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Full Name"
                      className="p-2 rounded-pill w-100 ps-3"
                      autoComplete="off"
                      onChange={handleChange}
                      value={formData.fullname}
                    />
                    <span
                      className="text-danger d-block"
                      style={{ fontSize: "14px" }}
                    >
                      {errors.fullname}
                    </span>
                  </div>
                  <div className="col-12 col-lg-6">
                    <input
                      type="text"
                      name="emailid"
                      placeholder="Email Address"
                      className="p-2 rounded-pill w-100 ps-3"
                      autoComplete="off"
                      onChange={handleChange}
                      value={formData.emailid}
                    />
                    <span
                      className="text-danger d-block"
                      style={{ fontSize: "14px" }}
                    >
                      {errors.emailid}
                    </span>
                  </div>
                  <div className="col-12 col-lg-6">
                    <input
                      type="text"
                      name="mobileNumber"
                      placeholder="Phone Number"
                      className="p-2 rounded-pill w-100 ps-3"
                      autoComplete="off"
                      onChange={handleChange}
                      value={formData.mobileNumber}
                    />
                    <span
                      className="text-danger d-block"
                      style={{ fontSize: "14px" }}
                    >
                      {errors.mobileNumber}
                    </span>
                  </div>
                  <div className="col-12 col-lg-6">
                    <input
                      type="text"
                      name="location"
                      placeholder="Location"
                      className="p-2 rounded-pill w-100 ps-3"
                      autoComplete="off"
                      onChange={handleChange}
                      value={formData.location}
                    />
                    <span
                      className="text-danger d-block"
                      style={{ fontSize: "14px" }}
                    >
                      {errors.location}
                    </span>
                  </div>
                  <div className="col-12">
                    <textarea
                      name="description"
                      rows={8}
                      placeholder="Describe your requirement details"
                      className="pt-3 w-100 ps-3 rounded-4"
                      autoComplete="off"
                      onChange={handleChange}
                      value={formData.description}
                    />
                    <span
                      className="text-danger d-block"
                      style={{ fontSize: "14px" }}
                    >
                      {errors.description}
                    </span>
                  </div>
                </div>
                <div className="pt-2 text-center">
                  <button type="submit" className="button-48 mt-3">
                    <span className="btn_text fw-bold">Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
