'use strict';

//* MOBILE NAVI HANDLING
const hamburger = document.querySelector('.hamburger');
const mobileLinks = document.querySelector('.mobile-links');

hamburger.addEventListener('click', function (e) {
  hamburger.classList.toggle('ion-ios-paw');
  hamburger.classList.toggle('ion-ios-paw-outline');
  mobileLinks.classList.toggle('hidden');
});

//* LOGIN FORM HANDLING
//TODO add x (close) button & add close on click outside modal
//TODO make submit button work & prevent default
const loginForm = document.querySelector('.login-form');
const logo = document.querySelector('.nav-center');

logo.addEventListener('click', function (e) {
  loginForm.classList.toggle('hidden');
});

//* NEW POST FORM HANDLING
//TODO create post from form fields submition
const blogForm = document.getElementById('blog-entry');
