function toggleMenu() {
  const menu = document.querySelector('.menuLinks');
  const icon = document.querySelector('.hamIcon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}
const texts = ['Web Developer', 'Full Stack Developer',   'Web Development Enthusiast'
];
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
