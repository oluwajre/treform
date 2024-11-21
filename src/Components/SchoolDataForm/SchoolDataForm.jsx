import React, { useState } from 'react';
import './SchoolDataForm';

const SchoolDataForm = ({ currentSlide, schoolData, setSchoolData, errors }) => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSchoolData({...schoolData, [name]: value});
    };


  return (
    <div className={`carousel-item ${currentSlide===0? 'active': ''}`}>
        <div className='px-1'>
            <h5 className="display-5 section-sub-title mb-1">School Information</h5>
            <p className='form-text-basic mb-1'>Your School is of upmost importance to us, let us know about your School.</p>
            <p className='required-indicator'>* Required Field</p>
        </div>

        <div className='row g-sm-5 justify-content-space-between px-1 mb-1 form-block'>
            <div className="mb-3 col-sm-6">
                <label htmlFor="schoolName" className="form-label">School Name<span className='required-indicator ms-1'>*</span></label>
                <input 
                    type="text" 
                    className={`form-control ${errors.schoolName ? "is-invalid" : ""}`}
                    id="schoolName"
                    name='schoolName'
                    value={schoolData.schoolName}
                    aria-describedby="emailHelp" 
                    placeholder='TreNova International School'
                    onChange={handleInputChange}
                    required 
                />
                
                { errors.schoolName? (
                    <div className="invalid-feedback">{errors.schoolName}</div>
                    ): 
                    (
                        <div id='emailHelp' className="form-text">We'll never share this information with anyone else.</div>
                    )
                }
            </div>
            <div className="mb-3 col-sm-6">
                <label htmlFor="schoolEmail" className="form-label">School Email<span className='required-indicator ms-1'>*</span></label>
                <input 
                    type="email" 
                    className={`form-control ${errors.schoolEmail ? "is-invalid" : ""}`} 
                    id="schoolEmail"
                    name='schoolEmail'
                    value={schoolData.schoolEmail}
                    placeholder='trenovaschools@gmail.com'
                    onChange={handleInputChange}
                    required />
                    { errors.schoolEmail && (
                    <div className="invalid-feedback">{errors.schoolEmail}</div>
                )}
            </div>
        </div>

        <div className='row g-sm-5 justify-content-space-between px-1 mb-1 form-block'>
            <div className="mb-3 col-sm-6">
                <label htmlFor="schoolPhoneNumber" className="form-label">School's Official Phone Number<span className='required-indicator ms-1'>*</span></label>
                <input 
                    type="text" 
                    className={`form-control ${errors.schoolPhoneNumber ? "is-invalid" : ""}`} 
                    id="schoolPhoneNumber" 
                    name='schoolPhoneNumber'
                    value={schoolData.schoolPhoneNumber}
                    placeholder='09137819540' 
                    onChange={handleInputChange}
                    required
                />
                { errors.schoolPhoneNumber && (
                    <div className="invalid-feedback">{errors.schoolPhoneNumber}</div>
                )}
            </div>
            <div className="mb-3 col-sm-6">
                <label htmlFor="schoolWhatsappNumber" className="form-label">School's Official Whatsapp Number</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="schoolWhatsappNumber"
                    name='schoolWhatsappNumber'
                    value={schoolData.schoolWhatsappNumber}
                    onChange={handleInputChange} 
                />
            </div>
        </div>

        <div className="row g-sm-5 justify-content-space-between px-1 mb-1 form-block">
            <div className="mb-3 col-12">
                <label htmlFor="schoolAddress" className="form-label">School Address<span className='required-indicator ms-1'>*</span></label>
                <textarea 
                    className={`form-control ${errors.schoolAddress ? "is-invalid" : ""}`} 
                    id="schoolAddress"
                    name='schoolAddress'
                    value={schoolData.schoolAddress}
                    rows="3"
                    onChange={handleInputChange} 
                    required
                ></textarea>
                { errors.schoolAddress && (
                    <div className="invalid-feedback">{errors.schoolAddress}</div>
                )}
            </div>
        </div>

        {/* data-bs-target="#carouselExample" data-bs-slide="next"  */}

    </div>
  )
}

export default SchoolDataForm