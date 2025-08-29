import React, { useState } from "react";
import HOC from "./HOC";
import Swal from "sweetalert2";

function Schemeyojana() {
  // ✅ State for form
  const [formData, setFormData] = useState({
    schemephnumber: "",
    schemename: "",
    schemelocation: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear error on typing
  };

  // ✅ Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validation: phone number required
    if (!formData.schemephnumber) {
      formErrors.schemephnumber = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.schemephnumber)) {
      formErrors.schemephnumber = "Enter a valid 10-digit phone number.";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        setLoading(true);

        const response = await fetch("https://admindb-indol.vercel.app/schemeyojana", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Thank you for applying!",
            text: "Our team will contact you soon.",
            confirmButtonColor: "#198754", // Bootstrap green
          });

          // ✅ Reset form
          setFormData({
            schemephnumber: "",
            schemename: "",
            schemelocation: "",
          });
          setErrors({});
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data.message || "Failed to submit form. Please try again.",
            confirmButtonColor: "#dc3545", // Bootstrap red
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        Swal.fire({
          icon: "error",
          title: "Server Error",
          text: "Something went wrong. Please try again later.",
          confirmButtonColor: "#dc3545",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container">
      <div className="text-center pt-2">
        <div
          className="font_stroke"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          Scheme about Yojana
        </div>
        <div
          className="ftittle"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          PM Suryagarh Yojana
        </div>
      </div>

      {/* Short description */}
      <p className="pera width_manage text-center pt-2 pt-md-3 mx-auto">
        🌞 <strong> PM Suryagarh Yojana </strong> is a government initiative aimed
        at promoting clean and renewable solar energy across India. The scheme
        empowers households, businesses, farmers, and rural communities by making
        solar panel installation more affordable and accessible...
      </p>

      {/* Form */}
      <div className="container my-5 w-75">
        <form
          onSubmit={handleSubmit}
          className="shadow border border-secondary-subtle rounded"
        >
          <h3 className="bg-success text-white text-center p-md-2 p-2 rounded-top">
            Get More Information
          </h3>

          <div className="p-3 px-md-5 px-3">
            {/* Phone Number */}
            <div className="mb-3">
              <label className="form-label">
                Number <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                name="schemephnumber"
                className={`form-control ${
                  errors.schemephnumber ? "is-invalid" : ""
                }`}
                value={formData.schemephnumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
              {errors.schemephnumber && (
                <div className="text-danger small">{errors.schemephnumber}</div>
              )}
            </div>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="schemename"
                className="form-control"
                value={formData.schemename}
                onChange={handleChange}
                placeholder="Enter your name (optional)"
              />
            </div>

            {/* Location */}
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                name="schemelocation"
                className="form-control"
                value={formData.schemelocation}
                onChange={handleChange}
                placeholder="Enter your location (optional)"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-success px-4"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Apply Now"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HOC(Schemeyojana);
