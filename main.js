document.addEventListener("DOMContentLoaded", function() {
    // Typewriter effect
    const texts = ["Developer", "Designer", "Freelancer"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('.text').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
        }
        setTimeout(type, 400);
    }());

    // Smooth scroll
    const navLinks = document.querySelectorAll('.navbar a');

    for (const link of navLinks) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetID = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);
            
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust 60 based on your header height
                behavior: 'smooth'
            });
        });
    }
});
