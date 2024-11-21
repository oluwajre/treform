import React from 'react';
import './EventDetails.css';
import { Link } from 'react-router-dom';
import { webinarDetails } from '../../Constants/details';
import { speaker_picture } from '../../Constants/banner';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faCalendarDays, faClock, faLayerGroup, faUpRightFromSquare, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const EventDetails = () => {
  return (
    <section className="details" id="details">
        <div className="container">
            <h1 className="display-1 section-title text-center mt-5 mb-3">Webinar Details</h1>
            <div className="row">
                <div className="col-12 mt-3">
                    <h5 className="display-5 section-sub-title">Topic:</h5>
                    <div className="heading-line"></div>
                    <p className='lead text'>{webinarDetails.topic}</p>
                </div>
                <div className="col-12 mt-3">
                    <h5 className="display-5 section-sub-title">Key Points:</h5>
                    <div className="heading-line"></div>
                    <p className='lead text'>The virtual training will cover the following key areas:</p>
                    <ul className='details-list-group'>
                        <li className='lead text details-list-group__list'><FontAwesomeIcon icon={faCheck} className='icon'/>Enhancing school revenue through <span className="fw-bold text-secondary">value-added initiatives</span>.</li>
                        <li className='lead text details-list-group__list'><FontAwesomeIcon icon={faCheck} className='icon'/>Implementing effective financial management and accounting practices.</li>
                        <li className='lead text details-list-group__list'><FontAwesomeIcon icon={faCheck} className='icon'/>Developing <span className="fw-bold text-secondary">tuition pricing strategies</span> that increase enrollment without compromising profitability.</li>
                        <li className='lead text details-list-group__list'><FontAwesomeIcon icon={faCheck} className='icon'/>Optimizing operational efficiency for cost savings.</li>
                    </ul>
                    <p className="lead text">
                        This virtual training will focus on practical, <span className="fw-bold text-secondary">results-driven methods</span> that can be readily implemented to maximize both revenue and profitability.
                    </p>
                </div>
                <div className="col-12 mt-3 session">
                    <h5 className="display-5 section-sub-title">Session Details:</h5>
                    <div className="heading-line"></div>
                    <p className='lead text'><FontAwesomeIcon icon={faCalendarDays} className='icon'/><span className="fw-bold">Date:</span> {webinarDetails.date}</p>
                    <p className="lead text"><FontAwesomeIcon icon={faClock} className='icon' /><span className="fw-bold">Time:</span> {webinarDetails.time}</p>
                    <p className="lead text"><FontAwesomeIcon icon={faLayerGroup} className='icon' /><span className="fw-bold">Webinar Platform:</span> (Virtual) {webinarDetails.platform.name}</p>
                    <p className="lead text"><FontAwesomeIcon icon={faClock} className='icon' /><span className="fw-bold">Duration:</span> {webinarDetails.duration}</p>
                </div>
                <div className="col-12 mt-3 text-center">
                    <Link className="btn text-white button-main position-relative" to='/form'>Register Now <div className='ping position-absolute top-50 start-50 translate-middle shadow-lg' style={{ height: '150%', border: '10px solid #5E17DD', width: '113%', borderRadius: '10px'}}></div></Link>
                    <p className="lead text mt-2 text-secondary fst-italic">See you there...</p>
                </div>
                <div className="col-12 mt-3">
                    <h5 className="display-5 section-sub-title">Benefits of Attending the Webinar:</h5>
                    <div className="heading-line"></div>
                    <p className="lead text mt-2">
                        This training is designed to directly benefit private school proprietors and leaders by providing them with 
                        the tools needed to achieve higher profitability and financial stability. Schools that thrive 
                        financially can reinvest in their educational offerings, ultimately benefitting students, 
                        parents, and the broader community.
                    </p>
                </div>
            </div>
        </div>
        
        <div className="about mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center mb-3">
                        <h5 className="display-5 section-sub-title text-white mt-5">About Trainer</h5>
                        <div className="heading-line mx-auto"></div>
                    </div>
                    <div className="col-md-6">
                        <p className='lead text about-trainer-text text-white'>
                            <FontAwesomeIcon icon={faQuoteLeft} className='icon' />
                            As a seasoned expert in private school growth and profitability strategies, our lead trainer, 
                            Mr. Ajayi Samuel has 20 year extensive experience working with private school proprietors to 
                            improve financial performance. With a deep understanding of the unique challenges faced by 
                            the private school sector, he brings a proven track record of helping schools implement 
                            practical solutions that lead to sustainable growth.
                            <FontAwesomeIcon icon={faQuoteRight} className='icon' />
                        </p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={speaker_picture} alt="" className='img-fluid shadow about-trainer-img'/>
                    </div>
                    <div className="col-12 text-center my-5">
                        <Link className="btn text-white button-main position-relative" to='/form'>Register Now </Link>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default EventDetails