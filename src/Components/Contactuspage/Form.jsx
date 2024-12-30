import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Form() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let errorMessage = "";

    if (name === "name") {
      if (!value || value.length <= 0) {
        errorMessage = "Name is required";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        errorMessage = "Name must contain only alphabet characters";
      }
    }

    if (name === "email") {
      if (!value || value.length <= 0) {
        errorMessage = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMessage = "Email is not valid";
      }
    }

    if (name === "location") {
      if (!value || value.length <= 0) {
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

    return errorMessage;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors, [name]: validateField(name, value) };
    setErrors(newErrors);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields on submit
    const fieldsToValidate = ["name", "email", "location", "mobileNumber", "description"];
    const newErrors = {};
    let isValid = true;

    fieldsToValidate.forEach((field) => {
      const errorMessage = validateField(field, formData[field]);
      newErrors[field] = errorMessage;
      if (errorMessage) isValid = false;
    });

    setErrors(newErrors);

    if (isValid) {
      emailjs
        .send(
          "service_62y05ol", // Replace with your EmailJS service ID
          "template_cw4dm9r", // Replace with your EmailJS template ID
          {
            ...formData,
            to_email: "digital.tharayilpower@gmail.com", // Ensure the email is sent to the desired recipient
          },
          "Fh9UiMpa17Wn1Mmir" // Replace with your EmailJS public key
        )
        .then(
          (response) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your form has been submitted successfully!",
              showConfirmButton: false,
              timer: 1800,
            });
            setFormData({}); // Clear the form
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
                      name="name"
                      placeholder="Full Name"
                      className="p-2 rounded-pill w-100 ps-3"
                      onChange={handleChange}
                      value={formData.name || ""}
                    />
                    <span className="text-danger d-block" style={{ fontSize: "14px" }}>
                      {errors.name}
                    </span>
                  </div>
                  <div className="col-12 col-lg-6">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className="p-2 rounded-pill w-100 ps-3"
                      onChange={handleChange}
                      value={formData.email || ""}
                    />
                    <span className="text-danger d-block" style={{ fontSize: "14px" }}>
                      {errors.email}
                    </span>
                  </div>
                  <div className="col-12 col-lg-6">
                    <input
                      type="text"
                      name="mobileNumber"
                      placeholder="Phone Number"
                      className="p-2 rounded-pill w-100 ps-3"
                      onChange={handleChange}
                      value={formData.mobileNumber || ""}
                    />
                    <span className="text-danger d-block" style={{ fontSize: "14px" }}>
                      {errors.mobileNumber}
                    </span>
                  </div>
                  <div className="col-12 col-lg-6">
                    <input
                      type="text"
                      name="location"
                      placeholder="Location"
                      className="p-2 rounded-pill w-100 ps-3"
                      onChange={handleChange}
                      value={formData.location || ""}
                    />
                    <span className="text-danger d-block" style={{ fontSize: "14px" }}>
                      {errors.location}
                    </span>
                  </div>
                  <div className="col-12">
                    <textarea
                      name="description"
                      rows={8}
                      placeholder="Describe your requirement details"
                      className="pt-3 w-100 ps-3 rounded-4"
                      onChange={handleChange}
                      value={formData.description || ""}
                    />
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
