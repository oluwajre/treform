export const failedConfirmationEmail = async (attendeeEmail, attendeeEvent) => {
    const failedEmailAddressData = {
        email: attendeeEmail,
        event: attendeeEvent
    };

    try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:7Fsnw0xB/failed_email_address', {
            method: 'POST',
            body: JSON.stringify(failedEmailAddressData),
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error(`Error capturing failed email address: ${response.status}`);
        }

        console.log("Failed Email Address Captured successfully");

    } catch (error) {
        console.error("Error capturing failed email address:", error);
    }
}