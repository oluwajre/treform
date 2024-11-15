import React from 'react'
import './Banner.css';
import { polygon_1, polygon_2, speaker_picture, red_stamp, trenova_logo } from '../../Constants/banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays} from '@fortawesome/free-regular-svg-icons';


const Banner = () => {
  return (
    <section className="banner" id="banner">
        <img src={polygon_2} alt="background polygon 1" className='z-1 background-shape2'/>
        <img src={polygon_1} alt="background polygon 1" className='z-1 background-shape1'/>
        <img src={trenova_logo} alt="trenova logo" className='z-2 main-logo position-absolute'/>
        <div className="z-2 container my-5 position-relative">
          <div className="row align-items-end">
            <div className="col-8 col-sm-6 position-relative">
              <h1 className='display-3 lh'> Scale <span className='text-primary'>up</span> Series <span className='d-none d-md-inline-block'>Webinar</span> <span className='text-primary'>3.7</span></h1>
              <p className="lead banner__p">Increasing Revenue and Profitability in Private School Business.</p>
              <div className="date-box d-flex align-items-center mb-4">
                  <FontAwesomeIcon icon={faCalendarDays} className='icon me-2' />
                  <p className='banner__p m-0'>
                    <span className='d-block'>27, November, 2024</span>
                    <span className="d-block">2:00 pm</span>
                  </p>
              </div>
              <button className="btn text-white button-main" type='button'>Register Now</button>
              <div className='position-absolute text-center stamp'>
                <img src={red_stamp} alt="stamp" className='img-fluid' />
                <p className='position-absolute top-50 start-50 translate-middle fw-bold text-white text-uppercase lead'>IT'S FREE</p>
              </div>

            </div>

              <div className='speaker-container'>
                <img src={speaker_picture} alt="speaker" className='img-fluid rounded-circle shadow-lg'/>
              </div>
          </div>
          
        </div>

        <div className="backround-circle position-absolute top-100 start-100 translate-middle"></div>
    </section>
  )
}

export default Banner