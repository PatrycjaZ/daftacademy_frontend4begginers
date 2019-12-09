// ######################################
// HAMBURGER MENU
// ######################################

const navButton = document.querySelector('.button-navigation');

navButton.addEventListener('click', () => {
    const navDiv = document.querySelector('.page-navigation__items');
    navDiv.classList.toggle('visible');
});

// ######################################
// KUP BILET
// ######################################

//const container = document.querySelector('.container');
//const concertButton = document.querySelector('.button');

// const container = document.querySelectorAll('.container');
// const concertButton = document.querySelectorAll('.button');

//concertButton.addEventListener('click', () => {
 // container.innerHTML = '<p>Have fun!</p>';
//});

const button1 = document.getElementById('button_1');

button1.addEventListener('click', () => {
    const container1 = document.getElementById('container_1');
    container1.innerHTML = '<p>Have fun!</p>';
});

const button2 = document.getElementById('button_2');

button2.addEventListener('click', () => {
    const container2 = document.getElementById('container_2');
    container2.innerHTML = '<p>Have fun!</p>';
});

const button3 = document.getElementById('button_3');

button3.addEventListener('click', () => {
    const container3 = document.getElementById('container_3');
    container3.innerHTML = '<p>Have fun!</p>';
});

const button4 = document.getElementById('button_4');

button4.addEventListener('click', () => {
    const container4 = document.getElementById('container_4');
    container4.innerHTML = '<p>Have fun!</p>';
});

// ######################################
// FORMULARZ KONTAKTOWY
// ######################################

var contactForm = document.getElementById('contact-form');

contactForm.onsubmit = function(event) {
    event.preventDefault();

    var request = new XMLHttpRequest();
    request.open('POST', 'https://httpbin.org/post', false);

    var formData = new FormData(document.getElementById('contact-form'));
    request.send(formData);

    console.log(request.response);
  }