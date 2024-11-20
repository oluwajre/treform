import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelopeOpenText, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
const Footer = () => {
  return (
    <section className="footer pt-4" id="footer">
        <div className="container text-white">
            <div className="row">
                <div className="col-md-4 footer-top">
                    <div className='mb-1'><FontAwesomeIcon icon={faPhoneVolume} className='icon' /></div>
                    <div className="footer-top__text ms-3 ms-md-0 ms-lg-3">
                        <h6 className='mb-1'><a href="tel:07044086794">+234 704 408 6794</a></h6>
                        <p>Mon - Fri 9am - 6pm</p>
                    </div>
                </div>
                <div className="col-md-5 footer-top">
                    <div className='mb-1'><FontAwesomeIcon icon={faEnvelopeOpenText} className='icon' /></div>
                    <div className="footer-top__text ms-3 ms-md-0 ms-lg-3">
                        <h6 className='mb-1'><a href="mailto:trenovaschools@gmail.com">trenovaschools@gmail.com</a></h6>
                        <p>Online Support</p>
                    </div>
                </div>
                <div className="col-md-3 footer-top">
                    <div className='mb-1'><FontAwesomeIcon icon={faMapLocationDot} className='icon' /></div>
                    <div className="footer-top__text ms-3 ms-md-0 ms-lg-3">
                        <h6 className='mb-1'><a href="https://www.google.com/maps/dir//7b+Ogunsiji+Cl,+Allen,+Lagos+101233,+Lagos/@6.6048277,3.2713582,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b9351644892dd:0x4610bc146bf9405d!2m2!1d3.3537601!2d6.6048345?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D" target='blank'>Lagos, Nigeria</a></h6>
                        <p>LG 100281, NG</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-middle-1 my-5"></div>

        <div className="container text-white">
            <div className="row">
                <div className="col-md-6 footer-middle-2 mb-2">
                    <h5>TreNova Group</h5>
                    <div className="footer-heading-line"></div>
                    <p className='mt-2 mt-md-4'>7B, Ogunsiji Close, Off Ikeja Medical Center, Allen Avenue, Ikeja, Lagos, Nigeria.</p>
                    <div className="my-4">
                        <button className="btn text-white button-main position-relative" type='button'>Register Now</button>
                </div>
                </div>
                <div className="col-md-3 footer-middle-2 mb-2">
                    <h5>Products/Services</h5>
                    <div className="footer-heading-line"></div>
                    <ul className='p-0 mt-2 mt-md-4' style={{ listStyleType: 'none'}}>
                        <li><a href="">LearnNova Learning Support Application.</a></li>
                        <li><a href="">LearnNova Learning Studio.</a></li>
                        <li><a href="">TreNova Academy Online Training Platform.</a></li>
                        <li><a href="">TreNova Academy Virtual Training Sessions.</a></li>
                    </ul>
                </div>
                <div className="col-md-3 footer-middle-2 mb-2">
                    <h5>Contacts</h5>
                    <div className="footer-heading-line"></div>
                    <ul className='p-0 mt-2 mt-md-4' style={{ listStyleType: 'none'}}>
                        <li><a href="tel:07030148694">0703 014 8694</a></li>
                        <li><a href="tel:07044086794">0704 408 6794</a></li>
                        <li><a href="tel:09137819540">0913 781 9540</a></li>
                        <li><a href="tel:07019298464">0701 929 8464</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='footer-bottom py-5'>
            <div className="container">
                <div className="row text-center text-white">
                    <div className="col-12">
                        <p className='m-0 p-0'><FontAwesomeIcon icon={faCopyright} className='icon me-1' /><span>Copyright 2024 Created by</span> TreNova Group.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer