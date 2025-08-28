import React, { useEffect, useState } from "react";

function Datayojana() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch API data
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

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 fw-bold text-success">
        Yojana Applications
      </h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Fetching data, please wait...</p>
        </div>
      ) : data.length === 0 ? (
        <p className="text-center text-muted">No applications found.</p>
      ) : (
        <div className="table-responsive shadow-lg rounded">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-success text-center">
              <tr>
                <th scope="col"> No.</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Name</th>
                <th scope="col">Location</th>
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
        </div>
      )}
    </div>
  );
}

export default Datayojana;

