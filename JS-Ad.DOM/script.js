'use strict';

// ----------------------------------------------------------------------------------------------------------------------------
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach((ele) => {
  ele.addEventListener('click', openModal)
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// ----------------------------------------------------------------------------------------------------------------------------

// selecting element(s)
const allSections = document.querySelectorAll('.section')
const header = document.querySelector('.header')

// creating an element
const message = document.createElement('div')

// adding class to an element
message.classList.add('cookie-message')

// 1st way of adding content 
// message.textContent = 'we use cookies for improved functionality and analytics!'

// 2nd way of adding content to an element
message.innerHTML =  `we use cookies for improved functionality and analytics! <button class = "btn btn--close-cookie">Got it!</button>`

// adding element (message) to DOM element (header)
// header.prepend(message)       // adds as the 1st child 
header.append(message)     // adds as the last child

// deleting elements
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove()
})

// set a style on an element
message.style.backgroundColor = '#37383d'
message.style.width = '120%'

// console.log(message.style.color)
// console.log(message.style.backgroundColor)

// console.log(getComputedStyle(message).color)

// modify the style using getComputedStyle()
message.style.height = Number.parseInt(getComputedStyle(message).height) + 30 + 'px'

// custom CSS properties ex ...
// :root {
//   --color-primary: #5ec576;
// }
// modifying the custom CSS properties using JS and "document.documentElement"
// document.documentElement.style.setProperty('--color-primary', 'green')

// element ex ...
// img
// src="img/logo.png"
// alt="Bankist logo"
// class="nav__logo"
// designer="harsha" // A NON_STANDARD ATT
// id="logo"

// selection
const logo = document.querySelector('.nav__logo')

// read the standard-attributes
// console.log(logo.src)
// console.log(logo.alt)

// non-standard attributes cannot be read but can be using .getAttribute
// console.log(logo.designer) // undefined
// console.log(logo.getAttribute('designer')) // harsha

// to read the class-names use.. 'className'
// console.log(logo.className)

// set an attribute
logo.alt = 'Beautiful Minimalistic Logo'
// console.log(logo.alt)

// using setAttribute() fn
logo.setAttribute('company', 'bankist')
// console.log(logo.getAttribute('company')) // bankist // used getAttribute for non-standard attributes

