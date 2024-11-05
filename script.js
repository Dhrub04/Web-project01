const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').setAttribute('min', today);

        function sendBookingEmail() {
            const location = document.getElementById("location").value;
            const date = document.getElementById("date").value;
            const startTime = document.getElementById("start-time").value;
            const endTime = document.getElementById("end-time").value;
            const details = document.getElementById("details").value;
            const organizerName = document.getElementById("organizer-name").value;

           
            if (!location || !date || !startTime || !endTime || !details || !organizerName) {
                alert("Please fill in all the required fields.");
                return;
            }

            
            const now = new Date();
            const selectedDate = new Date(date);
            const [startHours, startMinutes] = startTime.split(':');
            const [endHours, endMinutes] = endTime.split(':');
            const startDateTime = new Date(selectedDate);
            const endDateTime = new Date(selectedDate);

            startDateTime.setHours(startHours, startMinutes);
            endDateTime.setHours(endHours, endMinutes);

          
            if (selectedDate < now) {
                alert("The event date cannot be in the past.");
                return;
            }

            if (selectedDate.toDateString() === now.toDateString() && startDateTime <= now) {
                alert("The start time must be in the future.");
                return;
            }

       
            if (endDateTime <= startDateTime) {
                alert("End time must be after the start time.");
                return;
            }

           
            const subject = encodeURIComponent(`Booking Request for ${location}`);
            const body = encodeURIComponent(
                `Event Booking Details:\n\n` +
                `Location: ${location}\n` +
                `Date: ${date}\n` +
                `Start Time: ${startTime}\n` +
                `End Time: ${endTime}\n` +
                `Details: ${details}\n` +
                `Organizer Name: ${organizerName}\n` +
                `\nWe sincerely request your kind consideration of our booking request. We assure you that the event will take place as scheduled, with utmost respect for the space and facilities provided. We are fully committed to taking every necessary precaution to ensure that no property is harmed and that all guidelines are followed carefully. We deeply appreciate your support and understanding in allowing us to host this event.\nThank you!`
            );

            const authorityEmail = "nabadeep.dev@gmail.com"; 
            const mailtoLink = `mailto:${authorityEmail}?subject=${subject}&body=${body}`;

          
            window.location.href = mailtoLink; 
        }

        document.getElementById("start-time").addEventListener("input", function() {
            const startTime = this.value;
            document.getElementById("end-time").setAttribute("min", startTime);
        });