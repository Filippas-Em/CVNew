function toggleMenu() {
  const menu = document.querySelector('.menuLinks');
  const icon = document.querySelector('.hamIcon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}
const texts = ['Web Developer', 'Full Stack Developer'];
let index = 0; 

function typeWriter() {
  const text = texts[index]; 
  const speed = 100; 
  const textElement = document.getElementById('text'); 
  let i = 0;

  function type() {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      setTimeout(deleteText, 1000);
    }
  }

  function deleteText() {
    if (i >= 0) {
      textElement.textContent = text.substring(0, i);
      i--;
      setTimeout(deleteText, speed);
    } else {
      index = (index + 1) % texts.length;
      setTimeout(typeWriter, 500); 
    }
  }

  type();
}

typeWriter();


document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.inputGroup input, .inputGroup textarea');
  inputs.forEach(input => {
      input.addEventListener('input', function() {
          const label = this.previousElementSibling;
          if (this.value.trim()) {
              label.classList.add('floating');
          } else {
              label.classList.remove('floating');
          }
      });
  });
});


const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active'); 
});

var navbar = document.getElementById('navbar');
var section1 = document.getElementById('section1');
var section1Top = section1.offsetTop; // Get the top position of section1 from the top of the viewport
var isSticky = false;

window.addEventListener('scroll', function() {
  // Check if the scroll position is greater than or equal to the top of section1
  if (window.scrollY >= section1Top && !isSticky) {
    navbar.classList.add('sticky'); // Add the sticky class
    isSticky = true; // Set isSticky to true to indicate that navbar is sticky
  } else if (window.scrollY < section1Top && isSticky) {
    navbar.classList.remove('sticky'); // Remove the sticky class
    isSticky = false; // Set isSticky to false to indicate that navbar is no longer sticky
  }
});



var mobileNav = document.getElementById('mobileNav');
var sectionOne = document.getElementById('section1');
var sectionOneTop = sectionOne.offsetTop;
var isMobileNavSticky = false;

window.addEventListener('scroll', function() {
  // Check if the scroll position is greater than or equal to the top of section1
  if (window.scrollY >= sectionOneTop && !isMobileNavSticky) {
    mobileNav.classList.add('sticky'); // Add the sticky class for mobile navbar
    isMobileNavSticky = true; // Set isMobileNavSticky to true to indicate that navbar is sticky
  } else if (window.scrollY < sectionOneTop && isMobileNavSticky) {
    mobileNav.classList.remove('sticky'); // Remove the sticky class for mobile navbar
    isMobileNavSticky = false; // Set isMobileNavSticky to false to indicate that navbar is no longer sticky
  }
});


var scrollTopLink = document.getElementById('cloudsLogo');

scrollTopLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor behavior (scrolling to the top of the page)

  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling behavior
  });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const formData = new FormData(this);

  
  const submitButton = document.getElementById('submitButton');
  const loadingSpinner = document.getElementById('loadingSpinner');

  

  
  fetch('http://127.0.0.1:3000/send', {
      method: 'POST',
      body: formData
  })
  .then(response => {
      if (response.ok) {
          
          submitButton.style.backgroundColor = 'green';
          const lang = document.documentElement.lang;
          if (lang === 'el'){
              submitButton.innerText = 'Απεστάλη'; 
          } else {
              submitButton.innerText = 'Submitted';
          }


          
          setTimeout(() => {
            submitButton.style.backgroundColor = ''; 
            
            const lang = document.documentElement.lang;
            if (lang === 'el') {
                submitButton.innerText = 'Αποστολή';
            } else {
                submitButton.innerText = 'Submit';
            }
        }, 2000);

          
          this.reset();
      } else {
          alert('Error sending message. Please try again later.');
      }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error sending message. Please try again later. Details: ' + error.message);
  });
});