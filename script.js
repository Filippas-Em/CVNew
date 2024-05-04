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