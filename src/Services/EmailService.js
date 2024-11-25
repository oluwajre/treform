// emailService.js
import { failedConfirmationEmail } from "./FailedEmailService";

export const sendConfirmationEmail = async (attendeeEmail, userName, schoolName, webinarDetails) => {
    const emailData = {
        to: attendeeEmail,
        userName,
        schoolName,
        webinarDetails
    };

    try {
        const response = await fetch('https://trenova-form-backend.onrender.com/send-email', {
            method: 'POST',
            body: JSON.stringify(emailData),
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error(`Error sending email: ${response.status}`);
        }
        console.log("Email sent successfully");
        // alert('Email sent successfully again');

    } catch (error) {
        console.error("Error sending email:", error);
        await failedConfirmationEmail(attendeeEmail, webinarDetails.theme);

    }
};
