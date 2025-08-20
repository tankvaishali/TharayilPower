import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import HOC from './HOC'

function PrivacyPolicy() {
    return (
        <>
            <div className='container my-4'>
                <div className="text-center">
                    <h2 className="fw-bold pb-2 d-inline-block" style={{ borderBottom: "3px solid var(--green--)" }}>
                        Privacy Policy
                    </h2>
                </div>
                <div className='p-2 p-md-4'>
                    <div className='fw-bold'>Effective From : <span className='fw-medium'>01/08/2025</span></div>
                    <p className='pera my-3'>At Tharayil Power, your privacy matters to us. We believe in transparency and are committed to protecting any personal information you share with us – whether you're exploring solar options, filling out a form, or simply browsing our website.</p>
                    <div>
                        <h5 className='fw-bold pb-2' style={{ borderBottom: "2px solid var(--green--)" }}>What We Collect</h5>
                        <div className='pera fw-medium mb-2'>When you interact with us online or offline, we may collect :</div>
                        <div className='pera ms-3'><MdKeyboardDoubleArrowRight /> Your name, phone number, and email address (only when you fill out a form or get in touch with us)</div>
                        <div className='pera ms-3 my-1'><MdKeyboardDoubleArrowRight /> Information about how you use our website – like pages visited, time spent, and general browser/device info</div>
                        <div className='pera ms-3'><MdKeyboardDoubleArrowRight /> Cookies – small files stored on your device to help us improve your browsing experience</div>
                    </div>
                    <div className='my-3'>
                        <h5 className='fw-bold pb-2' style={{ borderBottom: "2px solid var(--green--)" }}>How We Use This Information</h5>
                        <div className='pera fw-medium mb-2'>We use the information you share with us to :</div>
                        <div className='pera ms-3'><MdKeyboardDoubleArrowRight /> Offer you the best solar solutions tailored to your needs</div>
                        <div className='pera ms-3 my-1'><MdKeyboardDoubleArrowRight /> Share updates, offers, or important service-related communication</div>
                        <div className='pera ms-3'><MdKeyboardDoubleArrowRight /> Make our website better and more helpful for future visitors</div>
                    </div>
                    <div>
                        <h5 className='fw-bold pb-2' style={{ borderBottom: "2px solid var(--green--)" }}>What We Don't Do</h5>
                        <div className='pera ms-3'><MdKeyboardDoubleArrowRight /> We never sell your personal information to third parties.</div>
                        <div className='pera ms-3 my-1'><MdKeyboardDoubleArrowRight /> We only share your data with trusted service partners if it's necessary to serve you better (like installers or support staff).</div>
                    </div>
                    <div className='my-3'>
                        <h5 className='fw-bold pb-2' style={{ borderBottom: "2px solid var(--green--)" }}>Keeping Your Data Safe</h5>
                        <div className='pera ms-3'><MdKeyboardDoubleArrowRight /> We take data protection seriously. We use standard security tools and practices to keep your information secure and private.</div>
                    </div>
                    <div>
                        <h5 className='fw-bold pb-2' style={{ borderBottom: "2px solid var(--green--)" }}>Your Choices</h5>
                        <div className='pera fw-medium mb-2'>You’re in control. You can :</div>
                        <div className='pera ms-3'><MdKeyboardDoubleArrowRight /> Unsubscribe from emails anytime</div>
                        <div className='pera ms-3 my-1'><MdKeyboardDoubleArrowRight /> Ask us to update or delete your personal info</div>
                        <div className='pera ms-3'><MdKeyboardDoubleArrowRight /> Block cookies from your browser settings if you prefer</div>
                    </div>
                    <div className='my-3'>
                        <h5 className='fw-bold pb-2' style={{ borderBottom: "2px solid var(--green--)" }}>Third-Party Links</h5>
                        <div className='pera ms-3'><MdKeyboardDoubleArrowRight /> Our website may have links to other websites (like industry resources or partners). We're not responsible for how those websites collect or use your data.</div>
                    </div>
                    <div>
                        <h5 className='fw-bold pb-2' style={{ borderBottom: "2px solid var(--green--)" }}>Updates</h5>
                        <div className='pera ms-3'><MdKeyboardDoubleArrowRight /> We may update this policy occasionally to keep up with regulations or improvements. When we do, we’ll update the date above so you know.</div>
                    </div>
                    <div className='mt-4'>
                        <h5 className='fw-bold'>Questions ?</h5>
                        <div className='pera fw-medium mb-2'>We’re here to help. Contact us at :</div>
                        <Link to={"tel:9074353623"} className='text-decoration-none text-dark'><div className='pera ms-3 fw-bold fs-6'>(+91) 90743 53623</div></Link>
                        <Link to={"mailto:info@tharayilpower.com"} className='text-decoration-none text-dark'><div className='pera ms-3 my-1 fw-bold fs-6'>info@tharayilpower.com</div></Link>
                        <Link to={"https://www.tharayilpower.com/"} target='_blank'><div className='pera ms-3 fw-bold fs-6'>www.tharayilpower.com</div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(PrivacyPolicy)