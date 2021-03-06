'use strict';
import swal from 'sweetalert';

const email = document.getElementById('userInput');
const btn = document.querySelector('.btn');
const hamburger = document.querySelector('.hamburger');
const mobileLinks = document.querySelector('.mobile-links');
const mailingList = [];

hamburger.addEventListener('click', function (e) {
  hamburger.classList.toggle('ion-ios-paw');
  hamburger.classList.toggle('ion-ios-paw-outline');
  mobileLinks.classList.toggle('hidden');
});

btn.addEventListener('click', function (e) {
  e.preventDefault();
  mailingList.push(email.value);
  console.log('click', mailingList);
  swal('Thanks for joining!', 'Your email has been added.');
});
