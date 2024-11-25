import React from 'react';
import './Congrat.css';
import AnimationCheck from '../../assets/images/congrat/AnimationCheck.gif';
import AnimationTassles from '../../assets/images/congrat/AnimationTassles.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { webinarDetails } from '../../Constants/details';

const Congrat = () => {
  return (
    <section className="congrat">
        <div className="container text-center">
            <div className="row position-relative">
                <div className="z-1 col-12">
                    <img src={AnimationCheck} alt="check" className='img-fluid' />
                </div>

                <div className="z-1 col-12">
                    <h5 className="display-5 section-sub-title">Congratulations, on registering for the {webinarDetails.theme}!</h5>
                    <p className='required-indicator'>For more details about the webinar, click the <span className='text-success fw-bold'>"Join Now"</span> WhatsApp button below to join our <span className='text-success fw-bold'>official WhatsApp group.</span></p>   
                </div>

                <img src={AnimationTassles} alt="tassles" className='z-n1 img-fluid tassles'/>

                <div className="z-1 col-12 mt-1 mt-sm-5 whatsapp-button">
                    <a className="btn btn-lg btn-outline-success shadow mx-auto py-2 px-4" href={webinarDetails.whatsappLink}><FontAwesomeIcon icon={faWhatsapp} className='icon me-1' />Join Now</a>
                </div>

                <div className="mt-3 text-center">
                    <p style={{color: '#495057'}}>You'll receive an Email/Whatsapp Confirmation Message Shortly.</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Congrat