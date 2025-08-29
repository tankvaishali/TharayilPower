import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import HOC from "./HOC";

function Datayojana() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [schemeData, setSchemeData] = useState([]);
  const [schemeLoading, setSchemeLoading] = useState(true);

  // ✅ Fetch first API data (/yojana)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://admindb-indol.vercel.app/yojana");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // ✅ Fetch second API data (/schemeyojana)
  useEffect(() => {
    const fetchSchemeData = async () => {
      try {
        const res = await fetch("https://admindb-indol.vercel.app/schemeyojana");
        const result = await res.json();
        setSchemeData(result);
      } catch (error) {
        console.error("Error fetching scheme data:", error);
      } finally {
        setSchemeLoading(false);
      }
    };
    fetchSchemeData();
  }, []);

  // ✅ Export first table
  const exportYojana = () => {
    const ws = XLSX.utils.json_to_sheet(
      data.map((item, index) => ({
        No: index + 1,
        "Phone Number": item.PhNumber,
        Name: item.Name || "-",
        Location: item.Location || "-",
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Yojana Applications");
    XLSX.writeFile(wb, "Yojana_Applications.xlsx");
  };

  // ✅ Export second table
  const exportScheme = () => {
    const ws = XLSX.utils.json_to_sheet(
      schemeData.map((item, index) => ({
        No: index + 1,
        "Phone Number": item.schemephnumber,
        Name: item.schemename || "-",
        Location: item.schemelocation || "-",
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Scheme Yojana Applications");
    XLSX.writeFile(wb, "Scheme_Yojana_Applications.xlsx");
  };

  return (
    <div className="container my-4">
      {/* First Table */}
        <h2 className="fw-bold text-success text-center">Yojana Applications</h2>
  

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2"> Please wait...</p>
        </div>
      ) : data.length === 0 ? (
        <p className="text-center text-muted">No applications found.</p>
      ) : (
        <div className="table-responsive shadow-lg rounded mb-5">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-primary text-center">
              <tr>
                <th>No.</th>
                <th>Phone Number</th>
                <th>Name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <td className="text-center fw-bold">{index + 1}</td>
                  <td>{item.PhNumber}</td>
                  <td>{item.Name || <span className="text-muted"> - </span>}</td>
                  <td>{item.Location || <span className="text-muted"> - </span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
              <div className="text-center mx-auto mb-3">
                  <button className="btn btn-success " onClick={exportYojana}>
          Download Excel
        </button>
              </div>
        </div>
      )}

      {/* Second Table */}
        <h2 className="fw-bold text-success text-center py-3">Scheme Yojana Applications</h2>


      {schemeLoading ? (
        <div className="text-center ">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2"> Please wait...</p>
        </div>
      ) : schemeData.length === 0 ? (
        <p className="text-center text-muted">No scheme applications found.</p>
      ) : (
        <div className="table-responsive shadow-lg rounded my-3">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-primary text-center">
              <tr>
                <th>No.</th>
                <th>Phone Number</th>
                <th>Name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {schemeData.map((item, index) => (
                <tr key={item._id}>
                  <td className="text-center fw-bold">{index + 1}</td>
                  <td>{item.schemephnumber}</td>
                  <td>{item.schemename || <span className="text-muted"> - </span>}</td>
                  <td>{item.schemelocation || <span className="text-muted"> - </span>}</td>
                </tr>
              ))}
            </tbody>
         
          </table>
            <div className="text-center mb-3">
               <button className="btn btn-success text-center" onClick={exportScheme}>
          Download Excel
        </button>
           </div>
        </div>
      )}
    </div>
  );
}

export default HOC(Datayojana);
