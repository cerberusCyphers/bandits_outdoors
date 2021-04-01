'use strict';

const email = document.getElementById('userInput');
const btn = document.querySelector('.btn');
const mobileNavClosed = document.querySelector('.ion-ios-paw');
const mobileNavOpen = document.querySelector('.ion-ios-paw-outline');
const mobileLinks = document.querySelector('.mobile-links');
const mailingList = [];

mobileNavClosed.addEventListener('click', function (e) {
  mobileNavClosed.classList.add('hidden');
  mobileNavOpen.classList.remove('hidden');
  mobileLinks.style.display = 'block';
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
