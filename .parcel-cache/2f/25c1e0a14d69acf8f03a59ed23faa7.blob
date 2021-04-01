'use strict';

const email = document.getElementById('userInput');
const btn = document.querySelector('.btn');
const hamburger = document.querySelector('.hamburger');
const mobileNavOpen = document.querySelector('.ion-ios-paw-outline');
const mobileNavClosed = document.querySelector('.ion-ios-paw');
const mobileLinks = document.querySelector('.mobile-links');
const mailingList = [];

mobileNavOpen.addEventListener('click', function (e) {
  mobileNavOpen.classList.add('hidden');
  mobileNavClosed.classList.remove('hidden');
  mobileLinks.style.display = 'none';
});

mobileNavOpen.addEventListener('click', function (e) {
  mobileNavOpen.classList.add('hidden');
  mobileNavClosed.classList.remove('hidden');
  mobileLinks.style.display = 'none';
});

btn.addEventListener('click', function (e) {
  mailingList.push(email.value);
  console.log('click', mailingList);
});
