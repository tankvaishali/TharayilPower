import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
   <>
   <div className='d-flex justify-content-center align-items-center align-content-center w-100 vh-100 errimagebg'>
<div className='text-center fw-bold'>
<div><img src={require("../Assets/Images/Designer (2).jpeg")} alt="not found" className='img-fluid image404'/></div>


<Link className="text-decoration-none mt-3 mt-lg-5 fs-3" to={"/"}>
            <button className="btn btn-success fw-bold fs-5 border-0" >
              Back To Home
            </button>{" "}
          </Link>
</div>
</div>
   </>
  )
}

export default Error404