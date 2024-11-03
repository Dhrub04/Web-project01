function sendBookingEmail() {
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const details = document.getElementById("details").value;
    const organizerName = document.getElementById("organizer-name").value;


    if (!location || !date || !time || !details || !organizerName) {
        alert("Please fill in all the required fields.");
        return;
    }

    const subject = encodeURIComponent(`Booking Request for ${location}`);
    const body = encodeURIComponent(
        `Event Booking Details:\n\n` +
        `Location: ${location}\n` +
        `Date: ${date}\n` +
        `Time: ${time}\n` +
        `Details: ${details}\n` +
        `Organizer Name: ${organizerName}\n` +
        `\nPlease confirm the booking.\nThank you!`
    );

    const authorityEmail = "nabadeep.dev@gmail.com"; 
    const mailtoLink = `mailto:${authorityEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink; 
}
