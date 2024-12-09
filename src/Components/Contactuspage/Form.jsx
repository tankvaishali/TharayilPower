import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Form() {
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

    
        if (name === "email") {
          if (!value || value.length <= 0) {
            errorMessage = "Email is required";
          } else if (
            !(value.includes("@gmail.com") || value.includes("@yahoo.com"))
          ) {
            errorMessage = "Email is not valid";
          }
        }
    if (name === "subject") {
      if (!value || value.length <= 0) {
        errorMessage = "subject is required";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        errorMessage = "subject must contain only alphabet characters";
      }
    }

    if (name === "mobileNumber") {
      if (!value) {
        errorMessage = "Phone number is required";
      } else if (!/^\d+$/.test(value)) {
        errorMessage = "Phone number must contain only digits";
      } else if (value.length < 10) {
        errorMessage = "Phone number must be exactly 10 digits";
      } else if (value.length > 10) {
        errorMessage = "Phone number must contain only 10 digits";
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
      "subject",
      "mobileNumber",
      "description",
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
          "template_w56vh1r",
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
      <div className="container">
        {/* <div className=""> */}
        <div className="contact_bg py-5">
          <div className="row p-0 m-0 ">
            <div className="col-12 col-lg-7 p-0 m-0">
              <div
                className="h-100 p-5 product_high rounded-5"
                // style={{ backgroundColor: "var(--darkgreen--)" }}
              >
                <div className="py-3 text-center">
                  <div
                    className="dark_stroke"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    Contact Us
                  </div>
                  <div
                    className="ftittle text-white"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    Get In Touch With Us
                  </div>
                </div>

                <form action="">
                  <div className="row p-0 m-0 contact_input g-4">
                    <div className="col-12 col-lg-6  ">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="p-2 rounded-pill w-100 ps-3"
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
                    <div className="col-12 col-lg-6  ">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        className="p-2 rounded-pill w-100 ps-3"
                        onChange={getdata}
                        value={obj?.email || ""}
                    
                    />
                          <span
                      className="text-danger d-block"
                      style={{ fontSize: "14px" }}
                    >
                      {errormsg.email}
                    </span>
                    </div>
                    <div className="col-12 col-lg-6  ">
                      <input
                        type="number"
                        name="mobileNumber"
                        placeholder="Phone Number"
                        className="p-2 rounded-pill w-100 ps-3"
                        onChange={getdata}
                        value={obj?.mobileNumber || ""}
                     
                     />
                           <span
                      className="text-danger d-block"
                      style={{ fontSize: "14px" }}
                    >
                      {errormsg.mobileNumber}
                    </span>
                    </div>
                    <div className="col-12 col-lg-6  ">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="p-2 rounded-pill w-100 ps-3"
                        onChange={getdata}
                        value={obj?.subject || ""}

                    />
                          <span
                      className="text-danger d-block"
                      style={{ fontSize: "14px" }}
                    >
                      {errormsg.subject}
                    </span>
                    </div>
                    <div className="col-12 ">
                      <textarea
                        name="description"
                        rows={8}
                        placeholder="Describe your requirement details"
                        className="pt-3  w-100 ps-3 rounded-4"
                        onChange={getdata}
                        value={obj?.description || ""}

                     />
                    </div>
                  </div>
                </form>
                <div className="pt-2 text-center">
                
                  
                  <button  type="button" onClick={savedata} className="button-48 mt-3" role="button">
                      <span className="btn_text fw-bold">Submit</span>
                    </button>
                 
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Form;


// import React from "react";

// function Form() {
//   return (
//     <>
//       <div className="container">
//         <div className="contact_bg py-5">
//           <div className="row p-0 m-0 ">
//             <div className="col-12 col-lg-7 p-0 m-0">
//               <div
//                 className="h-100 p-1 p-md-3 p-lg-5 product_high rounded-5"
//               >
//                 <div className="py-3 text-center">
//                   <div
//                     className="dark_stroke"
//                     data-aos="fade-up"
//                     data-aos-duration="1500"
//                     data-aos-once="true"
//                   >
//                     Contact Us
//                   </div>
//                   <div
//                     className="ftittle text-white"
//                     data-aos="fade-down"
//                     data-aos-duration="1500"
//                     data-aos-once="true"
//                   >
//                     Book Your Free Consultation Today!
//                   </div>
//                 </div>

//                 <form
//                   action="https://formsubmit.co/vaishalitank28603@gmail.com"
//                   method="POST"
//                 >
//                   <div className="row p-0 m-0 contact_input g-4">
//                     <div className="col-12 col-lg-6">
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Full Name"
//                         className="p-2 rounded-pill w-100 ps-3"
//                         required
//                       />
//                     </div>
//                     <div className="col-12 col-lg-6">
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Email Address"
//                         className="p-2 rounded-pill w-100 ps-3"
//                         required
//                       />
//                     </div>
//                     <div className="col-12 col-lg-6">
//                       <input
//                         type="text"
//                         name="PhoneNumber"
//                         placeholder="Phone Number"
//                         className="p-2 rounded-pill w-100 ps-3"
//                         required
//                       />
//                     </div>
//                     <div className="col-12 col-lg-6">
//                       <input
//                         type="text"
//                         name="subject"
//                         placeholder="Subject"
//                         className="p-2 rounded-pill w-100 ps-3"
//                         required
//                       />
//                     </div>
//                     <div className="col-12">
//                       <textarea
//                         name="textarea"
//                         rows={8}
//                         placeholder="Describe your requirement details"
//                         className="pt-3 w-100 ps-3 rounded-4"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="pt-2 text-center">
//                     <button
//                       className="button-48 mt-3"
//                       type="submit"
//                       role="button"
//                       formTarget="_blank"
//                     >
//                       <span className="btn_text fw-bold">Submit</span>
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Form;
