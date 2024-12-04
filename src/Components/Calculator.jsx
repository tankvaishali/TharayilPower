// calculation part
// // import React, { useState } from 'react';

// // function Calculator() {
// //     const [selectedState, setSelectedState] = useState('');
// //     const [averageBill, setAverageBill] = useState(null);
// //     const [roofArea, setRoofArea] = useState(null);
// //     const [investment, setInvestment] = useState(null);
// //     const [result, setResult] = useState('');

// //     const states = [
// //         "ANDAMAN and NICOBAR ISLANDS", "ANDHRA PRADESH", "ARUNACHAL PRADESH", "ASSAM", "BIHAR",
// //         "CHANDIGARH", "CHHATTISGARH", "GOA", "GUJARAT", "HARYANA", "HIMACHAL PRADESH",
// //         "JAMMU and KASHMIR", "JHARKHAND", "KARNATAKA", "KERALA", "LADAKH", "LAKSHADWEEP",
// //         "MADHYA PRADESH", "MAHARASHTRA", "MANIPUR", "MEGHALAYA", "MIZORAM", "NAGALAND",
// //         "NCT OF DELHI", "ODISHA", "PUDUCHERRY", "PUNJAB", "RAJASTHAN", "SIKKIM", "TAMIL NADU",
// //         "TELANGANA", "THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU", "TRIPURA", "UTTAR PRADESH",
// //         "UTTARAKHAND", "WEST BENGAL"
// //     ];

// //     const handleStateChange = (e) => {
// //         setSelectedState(e.target.value);
// //     };

// //     const handleCalculate = () => {
// //         const monthlyEnergyConsumption = averageBill / 7; // Daily energy consumption
// //         const solarPlantCapacityNeeded = monthlyEnergyConsumption / (4.5 * 30); // kW needed based on consumption
// //         const maxSolarCapacityFromRoof = roofArea / 100; // Max capacity based on roof area
// //         const feasibleSolarCapacityFromInvestment = investment / 50000; // Max capacity based on investment

// //         const resultMessage = `The user can install ${solarPlantCapacityNeeded.toFixed(2)} kW solar plant capacity, based on consumption. However, they can install up to ${feasibleSolarCapacityFromInvestment.toFixed(2)} kW within their budget, and their roof has enough space to support up to ${maxSolarCapacityFromRoof.toFixed(2)} kW.`;

// //         setResult(resultMessage);
// //     };

// //     return (
// //         <div className='my-5'>
// //             <div className="container">
// //                 <h1 className='text-center fw-bold'>Solar Rooftop Calculator</h1>
// //                 <div className='row my-4 shadow p-4'>
// //                     <div className='col-12 col-lg-6 py-4 border-1 border-secondary'>
// //                         <h3 className='text-center'>Please enter the following details</h3>
// //                         <div>
// //                             <label htmlFor="state" className='d-block pb-1'>Your State</label>
// //                             <select id="state" name="state" className='w-100 py-2 px-2 rounded' value={selectedState} onChange={handleStateChange}>
// //                                 <option value="">Select State</option>
// //                                 {states.map((state, index) => (
// //                                     <option key={index} value={state}>{state}</option>
// //                                 ))}
// //                             </select>
// //                         </div>
// //                         <div className='py-3'>
// //                             <label htmlFor="Category" className='pb-1'>Your Category</label>
// //                             <select id="Category" name="Category" className='w-100 py-2 px-2 rounded'>
// //                                 <option value="">Select Category</option>
// //                                 <option value="Commercial">Commercial</option>
// //                                 <option value="Government">Government</option>
// //                                 <option value="Industrial">Industrial</option>
// //                                 <option value="Institutional">Institutional</option>
// //                                 <option value="Residential">Residential</option>
// //                                 <option value="Social Sector">Social Sector</option>
// //                             </select>
// //                         </div>
// //                         <div>
// //                             <label htmlFor="" className='pb-1'>Average Monthly Bill</label>
// //                             <div className='d-flex'>
// //                                 <button className='border-0 px-3 py-2 rounded'>Rs</button>
// //                                 <input type="number" className='w-100 border-1 border-secondary bg-white px-3 py-2 rounded' placeholder='0' value={averageBill} onChange={(e) => setAverageBill(Number(e.target.value))} />
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div className='col-12 col-lg-6 py-4 border border-1 border-secondary rounded-3 bg-light'>
// //                         <h5 className='text-center fw-bold pt-2'>Enter Details for More Accurate Information (Optional)</h5>
// //                         <div className='py-3'>
// //                             <label htmlFor="">Total Available Roof Top Area</label>
// //                             <input className="form-check-input ms-2 border-1 border-secondary" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
// //                             <label className="form-check-label ms-1" htmlFor="flexRadioDefault1">Sq. m.</label>
// //                             <input className="form-check-input ms-2 border-1 border-secondary" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
// //                             <label className="form-check-label ms-1" htmlFor="flexRadioDefault2">Sq. Feet</label>
// //                         </div>
// //                         <div>
// //                             <label htmlFor="" className='d-block pb-1'>Total Available Roof Top Area</label>
// //                             <input type="number" placeholder='0' className='w-100 py-2 px-2 rounded border-1 border-secondary' value={roofArea} onChange={(e) => setRoofArea(Number(e.target.value))} />
// //                         </div>
// //                         <div className='py-3'>
// //                             <label htmlFor="" className='d-block pb-1'>How much do you want to invest?</label>
// //                             <input type="number" placeholder='0' className='w-100 py-2 px-2 rounded border-1 border-secondary' value={investment} onChange={(e) => setInvestment(Number(e.target.value))} />
// //                         </div>
// //                         <div>
// //                             <label htmlFor="" className='pb-1'>Required Solar Plant Capacity (in kW)</label>
// //                             <div className='d-flex'>
// //                                 <input type="number" className='w-100 border-1 border-secondary bg-white rounded py-2 px-2' placeholder='0' />
// //                                 <button className='border-0 px-3 py-2 rounded'>kW</button>
// //                             </div>
// //                         </div>
// //                         <div className='py-3'>
// //                             <label htmlFor="" className='pb-1'>Sanction Load</label>
// //                             <div className='d-flex'>
// //                                 <input type="number" className='w-100 border-1 border-secondary bg-white rounded py-2 px-2' placeholder='0' />
// //                                 <button className='border-0 px-3 py-2 rounded'>kW</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className='text-center'>
// //                     <button type='button' className='border-0 bg-success rounded px-3 py-2 text-white' onClick={handleCalculate}>Calculate</button>
// //                 </div>
// //                 {result && <div className='mt-4 text-center fw-bold'>{result}</div>}
// //             </div>
// //         </div>
// //     );
// // }

// // export default Calculator;

// import React, { useState } from "react";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// function Calculator() {
//   const [selectedState, setSelectedState] = useState("");
//   const [averageBill, setAverageBill] = useState(null);
//   const [roofArea, setRoofArea] = useState(null);
//   const [investment, setInvestment] = useState(null);
//   const [sanctionLoad, setSanctionLoad] = useState(""); // New state for Sanction Load
//   const [requiredCapacity, setRequiredCapacity] = useState(""); // New state for Required Solar Plant Capacity
//   const [result, setResult] = useState("");
//   const [areaUnit, setAreaUnit] = useState("sq.ft"); // New state for unit
//   const [showModal, setShowModal] = useState(false);

//   const states = [
//     "ANDAMAN and NICOBAR ISLANDS",
//     "ANDHRA PRADESH",
//     "ARUNACHAL PRADESH",
//     "ASSAM",
//     "BIHAR",
//     "CHANDIGARH",
//     "CHHATTISGARH",
//     "GOA",
//     "GUJARAT",
//     "HARYANA",
//     "HIMACHAL PRADESH",
//     "JAMMU and KASHMIR",
//     "JHARKHAND",
//     "KARNATAKA",
//     "KERALA",
//     "LADAKH",
//     "LAKSHADWEEP",
//     "MADHYA PRADESH",
//     "MAHARASHTRA",
//     "MANIPUR",
//     "MEGHALAYA",
//     "MIZORAM",
//     "NAGALAND",
//     "NCT OF DELHI",
//     "ODISHA",
//     "PUDUCHERRY",
//     "PUNJAB",
//     "RAJASTHAN",
//     "SIKKIM",
//     "TAMIL NADU",
//     "TELANGANA",
//     "THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU",
//     "TRIPURA",
//     "UTTAR PRADESH",
//     "UTTARAKHAND",
//     "WEST BENGAL",
//   ];

//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//   };

//   const handleAreaUnitChange = (e) => {
//     setAreaUnit(e.target.value);
//   };

//   const handleCalculate = () => {
//     // Convert roof area to square meters if it's in square feet
//     const roofAreaInSqM = areaUnit === "sq.ft" ? roofArea / 10.764 : roofArea;
//     const monthlyEnergyConsumption = averageBill / 7; // Daily energy consumption
//     const solarPlantCapacityNeeded = monthlyEnergyConsumption / (4.5 * 30); // kW needed based on consumption
//     const maxSolarCapacityFromRoof = roofAreaInSqM / 100; // Max capacity based on roof area (in sq.m)
//     const feasibleSolarCapacityFromInvestment = investment / 50000; // Max capacity based on investment

//     const resultMessage = `The user can install ${solarPlantCapacityNeeded.toFixed(
//       2
//     )} kW solar plant capacity, based on consumption. However, they can install up to ${feasibleSolarCapacityFromInvestment.toFixed(
//       2
//     )} kW within their budget, and their roof has enough space to support up to ${maxSolarCapacityFromRoof.toFixed(
//       2
//     )} kW.`;

//     setResult(resultMessage);


//   // Reset all input fields
//   setSelectedState("");
//   setAverageBill(""); // Reset to null
//   setRoofArea(""); // Reset to null
//   setInvestment(""); // Reset to null
//   setSanctionLoad(""); // Reset Sanction Load
//   setRequiredCapacity(""); // Reset Required Capacity
//   setAreaUnit("sq.ft"); // Reset to default area unit
//   document.getElementById("Category").selectedIndex = 0; // Reset category dropdown to default

//   // Optionally, reset the result state if you want to clear it
 
//   };
//   const toggleModal = () => {
//     setShowModal(!showModal); // Toggle modal visibility
//   };
//   const showConfirmation = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Swal.fire("Deleted!", "Your file has been deleted.", "success");
//         setShowModal(!showModal);
//       }
//     });
//   };
//   return (
//     <>
//       <div className="my-5 py-5">
//         <div className="container">
//           <div className="row my-4 shadow p-4">
//             <h3 className="text-center fw-bold text-white bg-success m-0 p-0 mb-2 p-1">
//               Solar Rooftop Estimate 
//             </h3>
//             <div className="col-12 col-lg-6 py-4 border-1 border-secondary">
//               <h3 className="text-center">
//                 Please enter the following details
//               </h3>
//               <div>
//                 <label htmlFor="state" className="d-block pb-1">
//                   Your State
//                 </label>
//                 <select
//                   id="state"
//                   name="state"
//                   className="w-100 py-2 px-2 rounded"
//                   value={selectedState}
//                   onChange={handleStateChange}
//                 >
//                   <option value="">Select State</option>
//                   {states.map((state, index) => (
//                     <option key={index} value={state}>
//                       {state}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="py-3">
//                 <label htmlFor="Category" className="pb-1">
//                   Your Category
//                 </label>
//                 <select
//                   id="Category"
//                   name="Category"
//                   className="w-100 py-2 px-2 rounded"
//                 >
//                   <option value="">Select Category</option>
//                   <option value="Commercial solar solution">
//                     Commercial solar solution
//                   </option>
//                   <option value="Agriculture solar solution">
//                     Agriculture solar solution
//                   </option>
//                   <option value="Industrial solar solution">
//                     Industrial solar solution
//                   </option>
//                   {/* <option value="Institutional">Institutional</option> */}
//                   <option value="Residential">
//                     Residential solar solution
//                   </option>
//                   {/* <option value="Social Sector">Social Sector</option> */}
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="" className="pb-1">
//                   Average Monthly Bill
//                 </label>
//                 <div className="d-flex">
//                   <button className="border-0 px-3 py-2 rounded">Rs</button>
//                   <input
//                     type="number"
//                     className="w-100 border-1 border-secondary bg-white px-3 py-2 rounded"
//                     placeholder="0"
//                     value={averageBill || ""}
//                     onChange={(e) => setAverageBill(Number(e.target.value))}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="col-12 col-lg-6 py-4 border border-1 border-secondary rounded-3 bg-light">
//               <h5 className="text-center fw-bold pt-2">
//                 Enter Details for More Accurate Information (Optional)
//               </h5>
//               <div className="py-3">
//                 <label htmlFor="">Total Available Roof Top Area</label>
//                 <input
//                   className="form-check-input ms-2 border-1 border-secondary"
//                   type="radio"
//                   name="areaUnit"
//                   value="sq.m"
//                   checked={areaUnit === "sq.m"}
//                   onChange={handleAreaUnitChange}
//                 />
//                 <label
//                   className="form-check-label ms-1"
//                   htmlFor="flexRadioDefault1"
//                 >
//                   Sq. m.
//                 </label>
//                 <input
//                   className="form-check-input ms-2 border-1 border-secondary"
//                   type="radio"
//                   name="areaUnit"
//                   value="sq.ft"
//                   checked={areaUnit === "sq.ft"}
//                   onChange={handleAreaUnitChange}
//                 />
//                 <label
//                   className="form-check-label ms-1"
//                   htmlFor="flexRadioDefault2"
//                 >
//                   Sq. Feet
//                 </label>
//               </div>
//               <div>
//                 <label htmlFor="" className="d-block pb-1">
//                   Total Available Roof Top Area
//                 </label>
//                 <input
//                   type="number"
//                   placeholder="0"
//                   className="w-100 py-2 px-2 rounded border-1 border-secondary"
//                   value={roofArea || ""}
//                   onChange={(e) => setRoofArea(Number(e.target.value))}
                
//                 />
//               </div>
//               <div className="py-3">
//                 <label htmlFor="" className="d-block pb-1">
//                   How much do you want to invest?
//                 </label>
//                 <input
//                   type="number"
//                   placeholder="0"
//                   className="w-100 py-2 px-2 rounded border-1 border-secondary"
//                   value={investment || ""}
//                   onChange={(e) => setInvestment(Number(e.target.value))}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="" className="pb-1">
//                   Required Solar Plant Capacity (in kW)
//                 </label>
//                 <div className="d-flex border border-1 border-secondary rounded">
//                   <input
//                     type="number"
//                     className="w-100 border-0 bg-white rounded py-2 px-2 rounded-end-0"
//                     placeholder="0"
//                     value={requiredCapacity}
//                     onChange={(e) => setRequiredCapacity(e.target.value)}
//                   />
//                   <div className=" px-3 py-2 rounded bg-secondary-subtle rounded-start-0">kW</div>
//                 </div>
//               </div>
//               <div className="py-3">
//                 <label htmlFor="" className="pb-1">
//                   Sanction Load
//                 </label>
//                 <div className="d-flex border border-1 border-secondary rounded">
//                   <input
//                     type="number"
//                     className="w-100 border-0 bg-white rounded py-2 px-2 rounded-end-0"
//                     placeholder="0"
//                     value={sanctionLoad}
//                     onChange={(e) => setSanctionLoad(e.target.value)}
//                   />
//                   <div className=" px-3 py-2 rounded bg-secondary-subtle rounded-start-0">kW</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="text-center">
//             <Link onClick={handleCalculate} className="text-decoration-none">
//               <button className="button-48 mt-3" role="button">
//                 <span className="btn_text fw-bold">Estimate</span>
//               </button>
//             </Link>
//             {/* <button type='button' className='border-0 bg-success rounded px-3 py-2 text-white' >Calculate</button> */}
//           </div>
//           {result && (
//             <>
//               <div
//                 className="mt-4 text-center fw-bold"
              
//               >
//                 {result}
//               </div>

//               <div className="text-center mx-auto mt-2">
//                 {/* <button type="button" class="btn btn-transparent " > */}

//                 <button
//                   type="button"
//                   className="button-48 mt-3 text-decoration-none"
//                   onClick={toggleModal}
//                 >
//                   <span className="btn_text fw-bold">
//                     More Information
//                     <span className="ps-1 fs-5 fw-bold">
//                       <MdOutlineArrowOutward />
//                     </span>
//                   </span>
//                 </button>

//                 {/* </button> */}
//               </div>
//             </>
//           )}
//           {showModal && (
//             <div className="modal-overlay">
//               <div className="modal-content">
//                 <form
//                   action="https://formsubmit.co/vaishalitank28603@gmail.com"
//                   method="POST"
//                 >
//                   <div className="py-2 ">
//                     <label
//                       htmlFor="name"
//                       className="d-block fw-medium"
//                       style={{ color: "var(--green--)" }}
//                     >
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder=" Full Name"
//                       className="w-100  ps-1"
//                       required
//                     />
//                   </div>
//                   <div className="py-2">
//                     <label
//                       htmlFor="name"
//                       className="d-block fw-medium"
//                       style={{ color: "var(--green--)" }}
//                     >
//                       Location
//                     </label>
//                     <input
//                       type="text"
//                       name="Location"
//                       placeholder=" City/District"
//                       className="w-100  ps-1"
//                       required
//                     />
//                   </div>
//                   <div className="py-2">
//                     <label
//                       htmlFor="name"
//                       className="d-block fw-medium"
//                       style={{ color: "var(--green--)" }}
//                     >
//                       Solar Requirement
//                     </label>
//                     <select
//                       id="SolarRequirement"
//                       name="SolarRequirement"
//                       className="w-100 py-1 px-1 "
//                       required
//                     >
//                       <option value="Commercial solar solution">
//                         Commercial solar solution
//                       </option>
//                       <option value="Agriculture solar solution">
//                         Agriculture solar solution
//                       </option>
//                       <option value="Industrial solar solution">
//                         Industrial solar solution
//                       </option>
//                       <option value="Residential">
//                         Residential solar solution
//                       </option>
//                     </select>
//                     {/* <input type="text" name='SolarRequirement' placeholder=' Full Name'  className='w-100  ps-1'/> */}
//                   </div>
//                   <div className="py-2">
//                     <label
//                       htmlFor="mail"
//                       className="d-block fw-medium"
//                       style={{ color: "var(--green--)" }}
//                     >
//                       Email{" "}
//                     </label>
//                     <input
//                       type="mail"
//                       name="Email"
//                       placeholder="Enter Email"
//                       className="w-100  ps-1"
//                       required
//                     />
//                   </div>
//                   <div className="py-2">
//                     <label
//                       htmlFor="number"
//                       className="d-block fw-medium"
//                       style={{ color: "var(--green--)" }}
//                     >
//                       Contact{" "}
//                     </label>
//                     <input
//                       type="number"
//                       name="Contact"
//                       placeholder="Contact Number"
//                       className="w-100  ps-1"
//                       required
//                     />
//                   </div>
//                   <div className="py-2"> 
//                     <textarea name="textarea" placeholder="Any Special Requirements Or Comments" rows={5} id="" className="w-100 bg-white p-1"></textarea>
//                   </div>
//                   <div className="d-block d-lg-flex justify-content-center align-items-center">
//                     <button
//                       type="submit"
//                       className="close-button bg-success fw-medium shadow" /*onClick={toggleModal}*/
//                     >
//                       submit
//                     </button>
//                     <button
                    
//                       className="close-button ms-0 ms-lg-2 fw-medium shadow"
//                       onClick={showConfirmation}
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <style jsx="true">{`
//         .modal-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.7);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           }
//           .modal-content {
//           overflow:auto;
//           background: white;
//           padding: 20px;
//           border-radius: 10px;
//           width: 50%;
//           height:95vh;
//           max-width: 90%;
//         }
//         .close-button {
//           margin-top: 20px;
//           padding: 8px 15px;
//           background-color: #f44336;
//           color: white;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//       `}</style>
//     </>
//   );
// }

// export default Calculator;






// proper calculator

// import React from 'react'

// function Calculator() {
//   return (
//     <>
//       <div className="py-5">
//         <div className='container mx-auto shadow bg-success text-white fw-bold p-0 m-0 text-center p-1'>
//           <h3>Solar Rooftop Estimate</h3>
//         </div>
//         <div className="container shadow">
//           <form action="https://formsubmit.co/vaishalitank28603@gmail.com" method="POST" className='p-0 m-0'>
//             <div className="row p-0 m-0 g-5">
//               <div className="col-12 col-lg-6 p-4">
//                 <div className="h-100 ">
//                   <div className='fw-bold fs-5 text-center'>Please enter the following details</div>

//                   <div className='py-1'>
//                     <label htmlFor='text' className='d-block p-1'> Full Name</label>
//                     <input type='text' name='name' className='w-100 ps-2' placeholder='Enter your name' required />
//                   </div>
//                   <div className='py-1'>
//                     <label htmlFor='text' className='d-block p-1'> District</label>
//                     <input type='text' name='district' className='w-100 ps-2' placeholder='Enter your district' required />
//                   </div>
//                   <div className='py-1'>
//                     <label htmlFor='email' className='d-block p-1'>Email</label>
//                     <input type='email' name='email' className='w-100 ps-2' placeholder='Enter your email' required />
//                   </div>
//                   <div className='py-1'>
//                     <label htmlFor='text' className='d-block p-1'>Solar Requirement</label>
//                     <select name="solar_requirement" className='w-100 p-1 ' required>
//                       <option value="Commercial solar">
//                         Commercial solar
//                       </option>
//                       <option value="Agriculture solar">
//                         Agriculture solar
//                       </option>
//                       <option value="Industrial solar">
//                         Industrial solar
//                       </option>
//                       <option value="Residential solar">
//                         Residential solar
//                       </option>
//                     </select>
//                   </div>
//                   <div className='py-1'>
//                     <label htmlFor='number' className='d-block p-1'> Average monthly bill</label>
//                     <div className='d-flex border-1 border border-dark'>
//                       <div className='fw-medium bg-secondary-subtle text-center p-1 px-3'>Rs</div>
//                       <input type='number' name='monthly_bill' className='w-100 ps-2 border-0' placeholder='0' required />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 col-lg-6 shadow bg-light pera">
//                 <div className="h-100 p-4 pt-0">
//                   <div className="py-2 pt-3">
//                     <div className='fw-bold fs-5 text-center'>Enter Details for More Accurate Information (Optional)</div>
//                   </div>
//                   <div className="py-2">
//                     <label>Total Available Roof Top Area</label>
//                     <input
//                       className="form-check-input ms-2 border-1 border-secondary"
//                       type="radio"
//                       name="areaUnit"
//                       value="sq.m"
//                     />
//                     <label className="form-check-label ms-1">Sq. m.</label>
//                     <input
//                       className="form-check-input ms-2 border-1 border-secondary"
//                       type="radio"
//                       name="areaUnit"
//                       value="sq.ft"
//                     />
//                     <label className="form-check-label ms-1">Sq. Feet</label>
//                   </div>
//                   <div className="py-1">
//                     <label className="d-block pb-1">Total Available Roof Top Area</label>
//                     <input type="number" name="roof_area" placeholder="0" className="w-100 ps-2 rounded border-1 border-secondary" />
//                   </div>
//                   <div className="py-1">
//                     <label className="d-block pb-1">How much do you want to invest?</label>
//                     <input type="number" name="investment" placeholder="0" className="w-100 ps-2 rounded border-1 border-secondary" />
//                   </div>
//                   <div className='py-1'>
//                     <label htmlFor='number' className='d-block p-1'>Required Solar Plant Capacity (in kW)</label>
//                     <div className='d-flex border-1 border border-dark'>
//                       <input type='number' name='plant_capacity' className='w-100 ps-2 border-0' placeholder='0' />
//                       <div className='fw-medium bg-secondary-subtle text-center p-1 px-3'>KW</div>
//                     </div>
//                   </div>
//                   <div className='py-1'>
//                     <label htmlFor='number' className='d-block p-1'>Sanction Load</label>
//                     <div className='d-flex border-1 border border-dark'>
//                       <input type='number' name='sanction_load' className='w-100 ps-2 border-0' placeholder='0' />
//                       <div className='fw-medium bg-secondary-subtle text-center p-1 px-3'>KW</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="text-center my-4">
//                 <button type="submit" className="button-48 mt-3" role="button">
//                   <span className="btn_text fw-bold">Estimate</span>
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Calculator;
