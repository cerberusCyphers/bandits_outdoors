'use strict';

const email = document.getElementsByTagName('input');
const btn = document.querySelector('button.btn');
const mailingList = [];

console.log(mailingList, email, btn);

btn.addEventListener('click', function (e) {
  e.preventDefault;
  console.log('Click');
});
