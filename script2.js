function shareViaEmail() {

    const title = document.getElementById("event-title").value;
    const message = document.getElementById("message").value;
    const recipients = [];

    
    if (document.getElementById("coordinators").checked) recipients.push("Coordinators");
    if (document.getElementById("class-representatives").checked) recipients.push("Class Representatives");
    if (document.getElementById("all-students").checked) recipients.push("All Students");

    
    if (recipients.length === 0) {
        alert("Please select at least one recipient group.");
        return;
    }

    
    const subject = encodeURIComponent(`Event Announcement: ${title}`);
    const body = encodeURIComponent(`Hello,\n\n${message}\n\nRecipients: ${recipients.join(", ")}\n\nThank you!`);
    
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;

    
    window.location.href = mailtoLink;
}
