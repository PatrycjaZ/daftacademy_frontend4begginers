// Show/hide page navigation
const menuButton = document.querySelector('#hamburger');

menuButton.addEventListener('click', (e) => {
    const pageNavigation = document.querySelector('.page-navigation');
    pageNavigation.classList.toggle('page-navigation--visible');

    const hamburgerFirst = document.querySelector('#hamburger-1');
    hamburgerFirst.classList.toggle('hamburger-1--invisible');

    const hamburgerSecond = document.querySelector('#hamburger-2');
    hamburgerSecond.classList.toggle('hamburger-2-transform');

    const hamburgerThird = document.querySelector('#hamburger-3');
    hamburgerThird.classList.toggle('hamburger-3-transform');
});

// Photos
const photos = document.querySelector('#photos');

photos.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('gallery__image')) {
        const galleryImage = e.target;
        galleryImage.classList.add('color-animation');
    }
});

// Mark ticket as bought
const concerts = document.querySelector('#concerts');

concerts.addEventListener('click', (e) => {
    if (e.target.classList.contains('button--buy-ticket')) {
        const buyTicketButton = e.target;
        const haveFunText = document.createElement('p');
        haveFunText.textContent = 'Have fun!';

        const buttonContainer = buyTicketButton.parentElement;
        buttonContainer.insertBefore(haveFunText, buyTicketButton);
        buyTicketButton.remove();
    }
});

// Log form data
const contactForm = document.querySelector('.contact__form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    console.log(formObject);
});