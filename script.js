document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const location = document.getElementById('location').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const details = document.getElementById('details').value;
        const organizerName = document.getElementById('organizer-name').value;

        fetch('http://localhost:3000', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ location, date, time, details, organizerName })
        })
        .then(response => response.json())
        .then(data => {
            const statusMessage = document.getElementById('statusMessage');
            if (data.message === 'Booking request sent successfully') {
                statusMessage.innerText = data.message;
                statusMessage.style.color = 'green';
                statusMessage.style.opacity = 1;
                document.getElementById('bookingForm').reset();

                setTimeout(() => {
                    statusMessage.style.opacity = 0;
                }, 3000);
            } else {
                throw new Error(data.message);
            }
        })
        .catch(error => {
            const statusMessage = document.getElementById('statusMessage');
            statusMessage.innerText = "Failed to send booking request. Please try again.";
            statusMessage.style.color = "red";
            statusMessage.style.opacity = 1;

            setTimeout(() => {
                statusMessage.style.opacity = 0;
            }, 3000);
            console.error('Error:', error);
        });
    });
});
