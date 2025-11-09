// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('active');
  });
});
// Contact Form Submission Collect the Deatils From the user and Send in Whatsapp
function sendform() {
  var phnumber = "+916369514948";

  var uname = document.querySelector('.uname').value;
  var email = document.querySelector('.email').value;
  var subject = document.querySelector('.subject').value;
  var text1 = document.querySelector('.text1').value;

  var url = "https://wa.me/" + phnumber + "?text="
    + "Name: " + uname + "%0a"
    + "E-mail: " + email + "%0a"
    + "Subject: " + subject + "%0a"
    + "Message: " + text1 + "%0a%0a";

  window.open(url, '_blank').focus();
}

// const form = document.querySelector('.contact-form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   alert('Thank you! Your message has been sent successfully.');
//   form.reset();
// });

// Carousel For Gallery
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let counter = 0;

function getSlidesPerView() {
  if (window.innerWidth >= 1024) return 3;
  else if (window.innerWidth >= 768) return 2;
  else return 1;
}

function updateSlide() {
  const slideWidth = images[0].clientWidth;
  slides.style.transform = `translateX(${-counter * slideWidth}px)`;
}

next.addEventListener('click', () => {
  const slidesPerView = getSlidesPerView();
  counter++;
  if (counter > images.length - slidesPerView) {
    counter = 0; // loop back to start
  }
  updateSlide();
});

prev.addEventListener('click', () => {
  const slidesPerView = getSlidesPerView();
  counter--;
  if (counter < 0) {
    counter = images.length - slidesPerView;
  }
  updateSlide();
});

// Auto slide with smooth looping
setInterval(() => {
  next.click();
}, 3000);

window.addEventListener('resize', updateSlide);