import React from 'react';
import './PersonalDataForm.css';

const PersonalDataForm = ({ currentSlide, attendeeData, setAttendeeData, errors }) => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAttendeeData({...attendeeData, [name]: value});
    };


  return (
    <div className={`carousel-item slide-left ${currentSlide===1? 'active': ''}`}>
        <div className='px-1'>
            <h5 className="display-5 section-sub-title mb-1">Personal Information</h5>
            <p className='form-text-basic mb-1'>Let us get to know you a bit better by sharing your basic information.</p>
            <p className='required-indicator'>* Required Field</p>
        </div>

        <div className='row g-sm-5 justify-content-space-between px-1 mb-1 form-block'>
            <div className="mb-3 col-sm-6">
                <label htmlFor="attendeeFullName" className="form-label">Attendee's Full Name<span className='required-indicator ms-1'>*</span></label>
                <input 
                    type="text" 
                    className={`form-control ${errors.attendeeFullName ? "is-invalid" : ""}`}
                    id="attendeeFullName"
                    name='attendeeFullName'
                    value={attendeeData.attendeeFullName}
                    aria-describedby="emailHelp" 
                    placeholder='Alika Damilare'
                    onChange={handleInputChange}
                    required 
                />
                
                { errors.attendeeFullName && (
                    <div className="invalid-feedback">{errors.attendeeFullName}</div>
                )}
            </div>
            <div className="mb-3 col-sm-6">
                <label htmlFor="attendeeEmail" className="form-label">Attendee's Email Address<span className='required-indicator ms-1'>*</span></label>
                <input 
                    type="email" 
                    className={`form-control ${errors.attendeeEmail ? "is-invalid" : ""}`} 
                    id="attendeeEmail"
                    name='attendeeEmail'
                    value={attendeeData.attendeeEmail}
                    placeholder='damilare@gmail.com'
                    onChange={handleInputChange}
                    required />
                    { errors.attendeeEmail && (
                    <div className="invalid-feedback">{errors.attendeeEmail}</div>
                )}
            </div>
        </div>

        <div className='row g-sm-5 justify-content-space-between px-1 mb-1 form-block'>
            <div className="mb-3 col-sm-6">
                <label htmlFor="attendeeWhatsappNumber" className="form-label">Attendee's Whatsapp Number<span className='required-indicator ms-1'>*</span></label>
                <input 
                    type="text" 
                    className={`form-control ${errors.attendeeWhatsappNumber ? "is-invalid" : ""}`} 
                    id="attendeeWhatsappNumber" 
                    name='attendeeWhatsappNumber'
                    value={attendeeData.attendeeWhatsappNumber}
                    placeholder='09137819540' 
                    maxLength='11'
                    onChange={handleInputChange}
                    required
                />
                { errors.attendeeWhatsappNumber && (
                    <div className="invalid-feedback">{errors.attendeeWhatsappNumber}</div>
                )}
            </div>
            <div className="mb-3 col-sm-6">
                <label htmlFor="attendeePhoneNumber" className="form-label">Attendee's Phone Number</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="attendeePhoneNumber"
                    name='attendeePhoneNumber'
                    value={attendeeData.attendeePhoneNumber}
                    maxLength='11'
                    onChange={handleInputChange} 
                />
            </div>
        </div>

        <div className="row g-sm-5 justify-content-space-between px-1 mb-1 form-block">
            <div className="mb-3 col-12">
                <label htmlFor="event" className="form-label">Name of Event Attending</label>
                <input 
                    className="form-control" 
                    type="text"
                    id='event'
                    name='event'
                    value={attendeeData.event}
                    aria-label="readonly input" 
                    readOnly 
                />
            </div>
        </div>

        <div className="row g-sm-5 justify-content-space-between px-1 mb-5 form-block">
            <div className="mb-3 col-12">
                <label htmlFor="attendeeRole" className="form-label">Attendee's Role<span className='required-indicator ms-1'>*</span></label>
                <select 
                    className={`form-select ${errors.attendeeRole ? "is-invalid" : ""}`}
                    aria-label="Default select example" 
                    id='attendeeRole' 
                    name='attendeeRole' 
                    value={attendeeData.attendeeRole || ''} 
                    onChange={handleInputChange} 
                    required
                >
                    <option value=''>Open this select menu</option>
                    <option value="owner">Owner</option>
                    <option value="representative">Representative</option>
                </select>
                {errors.attendeeRole && (
                    <div className="invalid-feedback">{errors.attendeeRole}</div>
                )}
            </div>
        </div>

        {attendeeData.attendeeRole==='representative'?(
            <div>
                <div className="row divider"></div>

                <div className="mt-5 mb-3 slide-bottom">
                <div className='px-1'>
                    <h5 className="display-5 section-sub-title mb-1">Additional Information</h5>
                    <p className='form-text-basic mb-1'>In order to match your School with the right opportunities we need some additional information first.</p>
                    <p className='required-indicator'>* Required Field</p>
                </div>
    
                <div className='row g-sm-5 justify-content-space-between px-1 mb-1 form-block'>
                    <div className="mb-3 col-sm-6">
                        <label htmlFor="ownerFullName" className="form-label">School Owner's Full Name<span className='required-indicator ms-1'>*</span></label>
                        <input 
                            type="text" 
                            className={`form-control ${errors.ownerFullName ? "is-invalid" : ""}`}
                            id="ownerFullName"
                            name='ownerFullName'
                            value={attendeeData.ownerFullName}
                            aria-describedby="emailHelp" 
                            placeholder='Alika Damilare'
                            onChange={handleInputChange}
                            required 
                        />
                        
                        { errors.ownerFullName && (
                            <div className="invalid-feedback">{errors.ownerFullName}</div>
                        )}
                    </div>
                    <div className="mb-3 col-sm-6">
                        <label htmlFor="ownerWhatsappNumber" className="form-label">School Owner's WhatsApp Number</label>
                        <input 
                            type="text" 
                            className={`form-control ${errors.ownerWhatsappNumber ? "is-invalid" : ""}`} 
                            id="ownerWhatsappNumber"
                            name='ownerWhatsappNumber'
                            value={attendeeData.ownerWhatsappNumber}
                            placeholder='09137819540'
                            maxLength='11'
                            onChange={handleInputChange}
                         />
                            { errors.ownerWhatsappNumber && (
                            <div className="invalid-feedback">{errors.ownerWhatsappNumber}</div>
                        )}
                    </div>
                </div>
                </div>
            </div>  
        ): null }

        

    </div>
  )
}

export default PersonalDataForm