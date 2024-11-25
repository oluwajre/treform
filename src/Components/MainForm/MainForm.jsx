import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainForm.css';
import SchoolDataForm from '../SchoolDataForm/SchoolDataForm';
import PersonalDataForm from '../PersonalDataForm/PersonalDataForm';
import { webinarDetails } from '../../Constants/details';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { sendConfirmationEmail } from '../../Services/EmailService';

const MainForm = ({ setIsLoading }) => {
    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(0);

    const [errors, setErrors] = useState({});

    const [schoolData, setSchoolData] = useState({
        schoolName: '',
        schoolEmail: '',
        schoolPhoneNumber: '',
        schoolWhatsappNumber: '',
        schoolAddress: ''
    });

    const validateSchoolDataForm = () => {
        const newErrors = {};
        if (!schoolData.schoolName) {
            newErrors.schoolName = "School name is required."
        };

        if (!schoolData.schoolEmail) {
            newErrors.schoolEmail = "School email is required.";
        } else if (!schoolData.schoolEmail.includes('@')) {
            newErrors.schoolEmail = "Valid email required '@'";
        }

        if (!schoolData.schoolPhoneNumber || schoolData.schoolPhoneNumber.length !== 11) {
            newErrors.schoolPhoneNumber = "Valid phone number is required.";
        }

        if (!schoolData.schoolAddress) {
            newErrors.schoolAddress = "School address is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // True if no errors
    };

    const [attendeeData, setAttendeeData] = useState({
        attendeeFullName: '',
        attendeeEmail: '',
        attendeeWhatsappNumber: '',
        attendeePhoneNumber: '',
        attendeeRole: '',
        event: webinarDetails.theme,
        ownerFullName: '',
        ownerWhatsappNumber: ''
    });

    const validateAttendeDataForm = () => {
        const newErrors = {}
        if (!attendeeData.attendeeFullName) {
            newErrors.attendeeFullName = "Full name is required."
        };

        if (!attendeeData.attendeeEmail) {
            newErrors.attendeeEmail = "Email Adresss is required.";
        } else if (!attendeeData.attendeeEmail.includes('@')) {
            newErrors.attendeeEmail = "Valid email required '@'";
        }

        if (!attendeeData.attendeeWhatsappNumber || attendeeData.attendeeWhatsappNumber.length !== 11) {
            newErrors.attendeeWhatsappNumber = "Valid phone number is required.";
        }

        if (!attendeeData.attendeeRole || attendeeData.attendeeRole === '') {
            newErrors.attendeeRole = "Pick a Role";
        }else if(attendeeData.attendeeRole !== 'representative') {
            attendeeData.ownerFullName = attendeeData.attendeeFullName;
            attendeeData.ownerWhatsappNumber = attendeeData.attendeeWhatsappNumber;
        }

        if (!attendeeData.ownerFullName) {
            newErrors.ownerFullName = "School Owner's Full name is required."
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // True if no errors
    };


    const handleNext = () => {
        if (currentSlide === 0) {
            if (validateSchoolDataForm()) {
                setCurrentSlide((prevSlide) => prevSlide + 1); // Safe state update
            }
        }
    };

    const handlePrev = () => {
        if (currentSlide === 1) {
            setCurrentSlide((prevSlide) => prevSlide - 1);
        }
    };


    const handleSubmit = async (e) => {
        if (validateAttendeDataForm()) {

            e.preventDefault();

            setIsLoading(true);

            const schoolProspectData = {
                "School_Name": schoolData.schoolName,
                "School_Email": schoolData.schoolEmail,
                "School_Phone_Number": schoolData.schoolPhoneNumber,
                "School_Whatsapp_Number": schoolData.schoolWhatsappNumber,
                "School_Address": schoolData.schoolAddress,
                "Attendee_Full_Name": attendeeData.attendeeFullName,
                "Attendee_Email": attendeeData.attendeeEmail,
                "Attendee_Whatsapp_Number": attendeeData.attendeeWhatsappNumber,
                "Attendee_Phone_Number": attendeeData.attendeePhoneNumber,
                "Attendee_Role": attendeeData.attendeeRole,
                "Event_Attending": attendeeData.event,
                "Owner_Full_Name": attendeeData.ownerFullName,
                "Owner_Whatsapp_Number": attendeeData.ownerWhatsappNumber
            }

            try {
                const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:da0vHL3V/school_prospects', {
                    method: 'POST',
                    body: JSON.stringify(schoolProspectData),
                    headers: { 'Content-Type': 'application/json' },
                });
        
                if (!response.ok) {
                    throw new Error (`API request failed with status ${response.status}. Please Try Again Later`);
                    
                }
        
                else {
                    navigate('/finish');
                    await sendConfirmationEmail(attendeeData.attendeeEmail, attendeeData.attendeeFullName, schoolData.schoolName, webinarDetails);
                }
        
            } catch (error) {
                setIsLoading(false);
                setTimeout(() => {alert(error || 'Error in Submitting, Try Again')}, 1000);
            }

        }
        
    }

    return (
        <section className="mainform">
            <div className="container pt-3">
                <div className="text-center">
                    <h1 className="display-1 section-title">Registration Form</h1>
                    <div className="heading-line mx-auto"></div>
                </div>

                <div className="border mt-3 mb-2 px-1 px-sm-3 form-carousel-container shadow rounded">
                    <form noValidate>
                        <div className="carousel-inner pt-3">
                            {/* Slide 1 */}
                            <SchoolDataForm
                                currentSlide={currentSlide}
                                schoolData={schoolData}
                                setSchoolData={setSchoolData}
                                errors={errors}
                            />

                            {/* Slide 2 */}
                            <PersonalDataForm 
                                currentSlide={currentSlide} 
                                attendeeData={attendeeData} 
                                setAttendeeData={setAttendeeData} 
                                errors={errors} 
                            />
                        </div>

                        <div className="d-flex justify-content-between my-4">
                            <button
                                className="btn btn-primary px-5"
                                type="button"
                                onClick={handlePrev}
                                disabled={currentSlide === 0}
                            >
                                <FontAwesomeIcon icon={faArrowLeft} className="icon me-1" /> Prev
                            </button>

                            {currentSlide === 1 ? (
                                <button className="btn btn-primary px-5" type="button" onClick={handleSubmit}>Submit</button>
                            ) : (
                                <button
                                    className="btn btn-primary px-5"
                                    type="button"
                                    onClick={handleNext}
                                >
                                    Next <FontAwesomeIcon icon={faArrowRight} className="icon ms-1" />
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};


export default MainForm