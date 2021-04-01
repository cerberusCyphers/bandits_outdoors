'use strict';

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
  mailingList.push(email.value);
  console.log('click', mailingList);
});
