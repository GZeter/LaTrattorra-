let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const radios = document.querySelectorAll('input[type="radio"]');
    
    // Loop logic for slides
    if (index >= slides.length) {
        currentSlide = 0; // Loop back to the start
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Loop to the end
    } else {
        currentSlide = index;
    }
    
    // Move slides
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Check the corresponding radio button
    radios[currentSlide].checked = true; // Update the checked radio button
}

// Function for button navigation
function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Show the first slide initially
showSlide(currentSlide);

