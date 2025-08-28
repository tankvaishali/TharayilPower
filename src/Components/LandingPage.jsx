
import React, { useState } from "react";
import HOC from "./HOC";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Swal from "sweetalert2";

function LandingPage() {
  let listdata = [
    {
      listing: " Subsidy on solar panel installation"
    },
    {
      listing: "Reduce monthly electricity bills."
    },
    {
      listing: "Clean & renewable energy for your home."
    },
    {
      listing: "Government-backed secure scheme."
    },
    {
      listing: "Long-term savings & eco-friendly lifestyle."
    },
    {
      listing: "Generate your own clean power and reduce dependence on the grid."
    },
    {
      listing: "Contribute to reducing carbon emissions and protect the environment."
    },
    {
      listing: "Solar panels have a long lifespan (20–25 years) with minimal upkeep."
    },
  ]



  const [formData, setFormData] = useState({
    PhNumber: "",
    Name: "",
    Location: "",
  });

  const [errors, setErrors] = useState({}); // ✅ For validation messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on typing
  };

  const validate = () => {
    let newErrors = {};

    // Phone validation
    if (!formData.PhNumber.trim()) {
      newErrors.PhNumber = "Phone number is required!";
    } else if (!/^[0-9]{10}$/.test(formData.PhNumber)) {
      newErrors.PhNumber = "please Enter a valid phone number!";
    }



    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return; // stop if validation fails

    try {
      const response = await fetch("https://admindb-indol.vercel.app/yojana", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

     if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Thank you for applying!",
          text: "our team will contact you soon.",
          confirmButtonColor: "#198754", // Bootstrap green
        });
        setFormData({ PhNumber: "", Name: "", Location: "" });
        setErrors({});
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to submit form. Please try again.",
          confirmButtonColor: "#dc3545", // Bootstrap red
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div className="container">
        <div className="text-center">
          <div
            className="font_stroke"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            message about Yojana
          </div>
          <div
            className="ftittle"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            Tharayal Power + PM Suryagarh Yojana
          </div>
        </div>

        {/* Short description */}
        <p className="pera width_manage text-center pt-2 pt-md-3 mx-auto">
          Empowering homes and businesses with clean, renewable solar energy.
          Under the <strong>PM Suryagarh Yojana</strong>. A government-backed
          initiative to bring affordable and sustainable solar energy to every
          household. Save money, reduce dependency on electricity bills, and
          support a greener future.
        </p>

        <h5
          className="fw-bold pb-2 pt-2 pt-md-3"
          style={{ borderBottom: "2px solid var(--green--)" }}
        >
          benefits, scheme highlights
        </h5>

        {

          listdata.map((x, i) => {
            return (
              <>
                <div className="d-flex align-content-start align-items-start pera" key={i}>
                  <div
                    className="fs-5"
                    style={{
                      color: "var(--green--)",
                    }}
                  >
                    <IoCheckmarkDoneCircle />
                  </div>
                  <div className="ps-2 pt-1">
                    {x.listing}
                  </div>
                </div>
              </>
            )

          })
        }


        {/* ✅ Form with Validation */}
        <div className="container my-4 mb-5 w-75">
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
                  name="PhNumber"
                  className={`form-control ${errors.PhNumber ? "is-invalid" : ""
                    }`}
                  value={formData.PhNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
                {errors.PhNumber && (
                  <div className="text-danger small">{errors.PhNumber}</div>
                )}
              </div>

              {/* Name */}
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="Name"
                  className={`form-control ${errors.Name ? "is-invalid" : ""}`}
                  value={formData.Name}
                  onChange={handleChange}
                  placeholder="Enter your name (optional)"
                />

              </div>

              {/* Location */}
              <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="Location"
                  className={`form-control ${errors.Location ? "is-invalid" : ""
                    }`}
                  value={formData.Location}
                  onChange={handleChange}
                  placeholder="Enter your location (optional)"
                />

              </div>

              {/* Submit */}
              <div className="text-center">
                <button type="submit" className="btn btn-success px-4">
                  Apply Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default HOC(LandingPage);
