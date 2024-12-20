import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function CalculatorMail() {
  const [obj, setobj] = useState({});
  const [resetobj, setresetobj] = useState({});
  const [errormsg, seterrormsg] = useState({});

  const validateField = (name, value) => {
    let errorMessage = "";

    if (name === "name") {
      if (!value || value.length <= 0) {
        errorMessage = "Name is required";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        errorMessage = "Name must contain only alphabet characters";
      }
    }

    if (name === "district") {
      if (!value || value.length <= 0) {
        errorMessage = "District is required";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        errorMessage = "District must contain only alphabet characters";
      }
    }

    if (name === "email") {
      if (!value || value.length <= 0) {
        errorMessage = "Email is required";
      } else if (
        !(value.includes("@gmail.com") || value.includes("@yahoo.com"))
      ) {
        errorMessage = "Email is not valid";
      }
    }

    if (name === "solar_requirement") {
      if (!value || value.length <= 0) {
        errorMessage = "Solar requirement is required";
      }
    }

    if (name === "monthly_bill") {
      if (!value || value.length <= 0) {
        errorMessage = "Monthly bill is required";
      }
    }

    return errorMessage;
  };

  const getdata = (e) => {
    const { name, value } = e.target;

    let newErrormsg = { ...errormsg };
    const errorMessage = validateField(name, value);

    newErrormsg[name] = errorMessage;
    seterrormsg(newErrormsg);

    obj[name] = value;
    resetobj[name] = "";
    setobj({ ...obj });
    setresetobj({ ...resetobj });
  };

  const savedata = () => {
    let valid = true;
    let newErrormsg = { ...errormsg };

    // Validate all fields on form submission
    const fieldsToValidate = [
      "name",
      "email",
      "district",
      "solar_requirement",
      "monthly_bill",
    ];

    fieldsToValidate.forEach((field) => {
      const errorMessage = validateField(field, obj[field]);
      newErrormsg[field] = errorMessage;
      if (errorMessage) {
        valid = false;
      }
    });

    seterrormsg(newErrormsg);

    if (valid) {
      const dataToSend = obj;

      console.log(dataToSend);
  
      emailjs
        .send(
          "service_3z4hyxb",
          "template_wag2wj6",
          dataToSend,
          "G8D90eQGHHZQCx7q3"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your form has been submitted",
              showConfirmButton: false,
              timer: 1800
            });
            // alert("Your design request has been sent successfully!");
          },
          (err) => {
            console.error("FAILED...", err);
            alert(
              "There was an error sending your request. Please try again later."
            );
          }
        );
      console.log("Data submitted:", obj);
      setobj({ ...resetobj }); // Clear the form on successful submission
    } else {
      console.log("Form contains errors.");
    }
  };


  return (
    <>

      <div className="py-5 mt-5 overflow-hidden">
        <div className="container mx-auto shadow bg-success text-white fw-bold p-0 m-0 text-center p-1">
          <h3>Solar Rooftop Estimate</h3>
        </div>
        <div className="container shadow">
          <form className="p-0 m-0" noValidate>
            <div className="row p-0 m-0 g-5">
              <div className="col-12 col-lg-6 p-4"  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-once="true">
                <div className="h-100">
                  <div className="fw-bold fs-5 text-center">
                    Please enter the following details
                  </div>

                  <div className="py-1">
                    <label htmlFor="name" className="d-block p-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={`w-100 ps-2`}
                      placeholder="Enter your name"
                      onChange={getdata}
                      value={obj?.name || ""}
                    />
                    <span
                      className="text-danger d-block"
                      style={{ fontSize: "14px" }}
                    >
                      {errormsg.name}
                    </span>
                  </div>

                  <div className="py-1">
                    <label htmlFor="district" className="d-block p-1">
                      District
                    </label>
                    <input
                      type="text"
                      name="district"
                      className={`w-100 ps-2`}
                      placeholder="Enter your district"
                      value={obj?.district || ""}
                      onChange={getdata}
                    />
                    <span
                      className="text-danger d-block"
                      style={{ fontSize: "14px" }}
                    >
                      {errormsg.district}
                    </span>
                  </div>

                  <div className="py-1">
                    <label htmlFor="email" className="d-block p-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={`w-100 ps-2`}
                      placeholder="Enter your email"
                      value={obj?.email || ""}
                      onChange={getdata}
                    />
                    <span
                      className="text-danger d-block"
                      style={{ fontSize: "14px" }}
                    >
                      {errormsg.email}
                    </span>
                  </div>

                  <div className="py-1">
                    <label htmlFor="solar_requirement" className="d-block p-1">
                      Solar Requirement
                    </label>
                    <select
                      name="solar_requirement"
                      className="w-100 p-1"
                      value={obj.solar_requirement || ""}
                      onChange={getdata}
                    >
                      <option value="">Select Requirement</option>
                      <option value="Commercial solar">Commercial solar</option>
                      <option value="Agriculture solar">
                        Agriculture solar
                      </option>
                      <option value="Industrial solar">Industrial solar</option>
                      <option value="Residential solar">
                        Residential solar
                      </option>
                    </select>
                    <span
                      className="text-danger d-block"
                      style={{ fontSize: "14px" }}
                    >
                      {errormsg.solar_requirement}
                    </span>
                  </div>

                  <div className="py-1">
                    <label htmlFor="monthly_bill" className="d-block p-1">
                      Average Monthly Bill
                    </label>
                    <div className={`d-flex border-1 border border-dark`}>
                      <div className="fw-medium bg-secondary-subtle text-center p-1 px-3">
                        Rs
                      </div>
                      <input
                        type="number"
                        name="monthly_bill"
                        className="w-100 ps-2 border-0"
                        placeholder="0"
                        value={obj?.monthly_bill || ""}
                        onChange={getdata}
                      />
                    </div>
                    <span
                      className="text-danger d-block"
                      style={{ fontSize: "14px" }}
                    >
                      {errormsg.monthly_bill}
                    </span>
                  </div>
                </div>
              </div>

              {/* Second column for optional fields */}
              <div className="col-12 col-lg-6 shadow bg-light pera"  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-once="true">
                <div className="h-100 p-4 pt-0">
                  <div className="py-2 pt-3">
                    <div className="fw-bold fs-5 text-center">
                      Enter Details for More Accurate Information (Optional)
                    </div>
                  </div>

                  <div className="py-2">
                    <label>Total Available Roof Top Area</label>
                    <input
                      className="form-check-input ms-2 border-1 border-secondary"
                      type="radio"
                      name="areaUnit"
                      value="sq.m"
                      checked={obj.areaUnit === "sq.m"}
                      onChange={getdata}
                    />
                    <label className="form-check-label ms-1">Sq. m.</label>
                    <input
                      className="form-check-input ms-2 border-1 border-secondary"
                      type="radio"
                      name="areaUnit"
                      value="sq.ft"
                      checked={obj.areaUnit === "sq.ft"}
                      onChange={getdata}
                    />
                    <label className="form-check-label ms-1">Sq. Feet</label>
                  </div>

                  <div className="py-1">
                    <label className="d-block pb-1">
                      Total Available Roof Top Area
                    </label>
                    <input
                      type="number"
                      name="roof_area"
                      placeholder="0"
                      className="w-100 ps-2 rounded border-1 border-secondary"
                      value={obj?.roof_area}
                      onChange={getdata}
                    />
                  </div>

                  <div className="py-1">
                    <label className="d-block pb-1">
                      How much do you want to invest?
                    </label>
                    <input
                      type="number"
                      name="investment"
                      placeholder="0"
                      className="w-100 ps-2 rounded border-1 border-secondary"
                      value={obj?.investment}
                      onChange={getdata}
                    />
                  </div>

                  <div className="py-1">
                    <label htmlFor="plant_capacity" className="d-block p-1">
                      Required Solar Plant Capacity (in kW)
                    </label>
                    <div className="d-flex border-1 border border-dark">
                      <input
                        type="number"
                        name="plant_capacity"
                        className="w-100 ps-2 border-0"
                        placeholder="0"
                        value={obj?.plant_capacity}
                        onChange={getdata}
                      />
                      <div className="fw-medium bg-secondary-subtle text-center p-1 px-3">
                        KW
                      </div>
                    </div>
                  </div>

                  <div className="py-1">
                    <label htmlFor="sanction_load" className="d-block p-1">
                      Sanction Load
                    </label>
                    <div className="d-flex border-1 border border-dark">
                      <input
                        type="number"
                        name="sanction_load"
                        className="w-100 ps-2 border-0"
                        placeholder="0"
                        value={obj?.sanction_load}
                        onChange={getdata}
                      />
                      <div className="fw-medium bg-secondary-subtle text-center p-1 px-3">
                        KW
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center my-4">
                <button
                  type="button"
                  onClick={savedata}
                  className="button-48 mt-3"
                  role="button"
                >
                  <span className="btn_text fw-bold">Estimate</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CalculatorMail;
