import React from 'react';
import './MainForm.css';

const MainForm = () => {
  return (
    <section className="mainform">
        <div className="container mt-3">
            <div className='text-center'>
                <h1 className="display-1 section-title">Registration Form</h1>
                <div className="heading-line mx-auto"></div>
            </div>


            <div className='border mt-3 mb-2 px-1 px-sm-3 form-carousel-container shadow rounded'>
                <div id="carouselExample" className="carousel slide">
                    <form>
                        <div className="carousel-inner pt-3">
                            
                            
                            {/* first carousel  */}
                            <div className="carousel-item active">
                                <div>
                                    <h5 className="display-5 section-sub-title mb-1">School Information</h5>
                                    <p className='form-text-basic mb-1'>Your School is of upmost importance to us, let us know about your School.</p>
                                    <p className='required-indicator'>* Required Field</p>
                                </div>

                                <div className='row g-sm-5 justify-content-space-between px-1 mb-1 form-block'>
                                    <div className="mb-3 col-sm-6">
                                        <label htmlFor="exampleInputSchoolName" className="form-label">School Name<span className='required-indicator ms-1'>*</span></label>
                                        <input type="text" className="form-control" id="exampleInputSchoolName" aria-describedby="emailHelp" placeholder='TreNova International School' required />
                                        <div id='emailHelp' className="form-text">We'll never share this information with anyone else.</div>
                                    </div>
                                    <div className="mb-3 col-sm-6">
                                        <label htmlFor="exampleInputEmail1" className="form-label">School Email<span className='required-indicator ms-1'>*</span></label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='trenovaschools@gmail.com' required />
                                    </div>
                                </div>

                                <div className='row g-sm-5 justify-content-space-between px-1 mb-1 form-block'>
                                    <div className="mb-3 col-sm-6">
                                        <label htmlFor="exampleInputSchoolPhoneNumber" className="form-label">School's Official Phone Number<span className='required-indicator ms-1'>*</span></label>
                                        <input type="text" className="form-control" id="exampleInputSchoolPhoneNumber" placeholder='09137819540' maxLength='11' minLength='11' required />
                                    </div>
                                    <div className="mb-3 col-sm-6">
                                        <label htmlFor="exampleInputWhatsappNumber" className="form-label">School's Official Whatsapp Number</label>
                                        <input type="text" className="form-control" id="exampleInputWhatsappNumber" maxLength='11' minLength='11' />
                                    </div>
                                </div>

                                <div className="row g-sm-5 justify-content-space-between px-1 mb-1 form-block">
                                    <div class="mb-3 col-12">
                                        <label htmlFor="exampleFormControlTextareaSchoolAddress" class="form-label">School Address<span className='required-indicator ms-1'>*</span></label>
                                        <textarea className="form-control" id="exampleFormControlTextareaSchoolAddress" rows="3" required></textarea>
                                    </div>
                                </div>

                            </div>

                            {/* second carousel  */}

                            <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                            </div>
                            
                        </div>

                        {/* carousel sliders/button  */}

                        <div className="d-flex justify-content-between my-4">
                            <button className="btn btn-primary px-5" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" disabled>
                                Prev
                            </button>
                            <button className="btn btn-primary px-5" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                Next
                            </button>
                        </div>

                        
                    </form>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default MainForm