document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const details = document.getElementById('details').value;

    // Simple email sending logic (can be integrated with a server-side logic)
    const mailtoLink = `mailto:authority@college.edu?subject=Booking Request for ${location}&body=Event Date: ${date}%0D%0AEvent Time: ${time}%0D%0AEvent Details: ${details}`;
    window.location.href = mailtoLink;
});
