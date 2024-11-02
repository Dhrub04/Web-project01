document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('show'); 
    });
});



function changeFont(button) {
    // Toggle between two font styles
    if (button.style.fontFamily === "Poppins") {
        button.style.fontFamily = "Poppins, san-serif";
    } else {
        button.style.fontFamily = "Poppins, sans-serif";
    }
}
