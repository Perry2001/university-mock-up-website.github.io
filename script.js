var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.left = "0";
}
function closeMenu() {
    navLinks.style.left = "-200px";
}

//preloader
window.addEventListener("load", function () {
    setTimeout(function () {
        const preloader = document.getElementById("preloader");
        preloader.style.display = "none";
    }, 2000);
});

//logo animation
const logo = document.querySelector('#logo');

let isFlipped = false;
setInterval(function () {
    if (isFlipped) {
        logo.classList.remove('flip');
    } else {
        logo.classList.add('flip');
    }
}, 1000);


//slider
function Slider() {
    // Rest of the code for the Slider function goes here...

    let currentSlide = 0;
    let intervalId; // Declare a variable to store the interval ID

    const changeActiveDot = function () {
        currentSlide++;
        if (document.querySelectorAll('.dot').length - 1 < currentSlide) {
            currentSlide = 0;
        }
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${currentSlide}"]`).classList.add('active');
        document.querySelectorAll('.slide').forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`));
    };

    // Start the interval when the Slider function is called
    intervalId = setInterval(changeActiveDot, 3000);

    // Add an event listener to the button that listens for a click event
    document.querySelector('#next').addEventListener('click', () => {
        // When the button is clicked, clear the interval
        clearInterval(intervalId);
    });
    document.querySelector('#prev').addEventListener('click', () => {
        // When the button is clicked, clear the interval
        clearInterval(intervalId);
    });

    document.querySelector('#next').addEventListener('click', () => {
        // When the button is clicked, advance to the next slide
        currentSlide++;
        if (document.querySelectorAll('.dot').length - 1 < currentSlide) {
            currentSlide = 0;
        }
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${currentSlide}"]`).classList.add('active');
        document.querySelectorAll('.slide').forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`));
    });

    // Add an event listener to the previous button that listens for a click event
    document.querySelector('#prev').addEventListener('click', () => {
        // When the button is clicked, go back to the previous slide
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = document.querySelectorAll('.dot').length - 1;
        }
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${currentSlide}"]`).classList.add('active');
        document.querySelectorAll('.slide').forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`));
    });
}

Slider();







// Shows event Panel
const eventSection = document.getElementById('event');
const eventButton = document.getElementById('event-btn');
const educationClose = document.getElementById('event-hideBtn');

eventButton.addEventListener('click', showEvent)
educationClose.addEventListener('click', closeEvent);

function showEvent() {
    eventSection.style.display = 'block';
}
function closeEvent() {
    eventSection.style.display = 'none';
}

//typing effect for event
const element = document.querySelector('.typing'); // Select the element to animate
const typingSpeed = 100; // Set the typing speed in milliseconds
const deleteSpeed = 50; // Set the delete speed in milliseconds
const text = ' click for scheduled events'; // Set the text to type

let index = 1; // Set the starting index to 1

// Function to animate the typing and deleting effect
function type() {
  if (index <= text.length) {
    // If the index is less than or equal to 10, add the next number
    element.textContent += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed); // Set a timeout to call the function again
  } else {
    // If the index is greater than 10, delete the last number and call the function again
    element.textContent = element.textContent.substring(0, element.textContent.length - 1);
    if (element.textContent.length === 0) {
      // If all the numbers are deleted, reset the index and call the function again
      index = 1;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, deleteSpeed);
    }
  }
}

type(); // Start the typing and deleting animation

window.onscroll = function() {
    const threshold = 100;
    if (window.scrollY > threshold) {
      document.getElementById('backToTopButton').style.display = 'block';
    } else {
      document.getElementById('backToTopButton').style.display = 'none';
    }
  };

  document.getElementById('backToTopButton').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  


  