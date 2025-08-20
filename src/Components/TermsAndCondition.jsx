import React from 'react'
import { Link } from 'react-router-dom'
import HOC from './HOC'

function TermsAndCondition() {
    return (
        <>
            <div className='container my-4'>
                <div className="text-center">
                    <h2 className="fw-bold pb-2 d-inline-block" style={{ borderBottom: "3px solid var(--green--)" }}>
                        Terms & Conditions
                    </h2>
                </div>
                <div className='p-2 p-md-4'>
                    <div className='fw-bold'>Effective From : <span className='fw-medium'>01/08/2025</span></div>
                    <p className='pera my-3'>Welcome to Tharayil Power! By using our website, you’re agreeing to a few simple terms that help us serve you better and keep things clear for everyone.</p>
                    <div>
                        <h5 className='fw-bold pb-2' style={{ borderBottom: "2px solid var(--green--)" }}>1. Using Our Website</h5>
                        <div className='pera ms-3'>We’ve built this website to help you understand our solar energy solutions, request estimates, and connect with our team. All content here belongs to us – so please don’t copy, reuse, or distribute it without permission.</div>
                    </div>
                    <div className='my-3'>
                        <h5 className='fw-bold pb-2' style={{ borderBottom: "2px solid var(--green--)" }}>2. Estimates & Services</h5>
                        <div className='pera ms-3'>When you request a solar estimate through our website, it's based on the details you provide. The final price or recommendation may change after a physical site inspection and technical evaluation.</div>
                    </div>
                    <div>
                        <h5 className='fw-bold pb-2' style={{ borderBottom: "2px solid var(--green--)" }}>3. Your Feedback</h5>
                        <div className='pera ms-3'>We love hearing from you! Any feedback, suggestions, or questions submitted through our website or email helps us improve. We may use it (without personal details) to enhance our services.</div>
                    </div>
                    <div className='my-3'>
                        <h5 className='fw-bold pb-2' style={{ borderBottom: "2px solid var(--green--)" }}>4. Accuracy of Information</h5>
                        <div className='pera ms-3'>We do our best to ensure all the information on our website is accurate and updated. Still, we encourage you to connect with us directly for the latest on products, services, and pricing.</div>
                    </div>
                    <div>
                        <h5 className='fw-bold pb-2' style={{ borderBottom: "2px solid var(--green--)" }}>5. Liability</h5>
                        <div className='pera ms-3'>We’re not responsible for any direct or indirect loss you may face from using this website or acting on its content. Always consult with our team for personalized advice.</div>
                    </div>
                    <div className='my-3'>
                        <h5 className='fw-bold pb-2' style={{ borderBottom: "2px solid var(--green--)" }}>6. Updates to These Terms</h5>
                        <div className='pera ms-3'>We may revise these terms from time to time. Continued use of our site means you’re okay with any changes.</div>
                    </div>
                    <div>
                        <h5 className='fw-bold pb-2' style={{ borderBottom: "2px solid var(--green--)" }}>7. Jurisdiction</h5>
                        <div className='pera ms-3'>This website and our services are governed by Indian laws. Any legal matters will be handled in courts located in Kerala.</div>
                    </div>
                    <div className='mt-4'>
                        <h5 className='fw-bold'>Need Help or Have Questions ?</h5>
                        <div className='pera fw-medium mb-2'>Just reach out to us anytime.</div>
                        <Link to={"tel:9074353623"} className='text-decoration-none text-dark'><div className='pera ms-3 fw-bold fs-6'>(+91) 90743 53623</div></Link>
                        <Link to={"mailto:info@tharayilpower.com"} className='text-decoration-none text-dark'><div className='pera ms-3 my-1 fw-bold fs-6'>info@tharayilpower.com</div></Link>
                        <Link to={"https://www.tharayilpower.com/"} target='_blank'><div className='pera ms-3 fw-bold fs-6'>www.tharayilpower.com</div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(TermsAndCondition)