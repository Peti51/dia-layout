'use strict';

const name = document.getElementById('text');
const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  const messages = [];

  if (name === '' || name === null) {
    messages.push('Name is requered');
  }

  if (email === '' || email === null) {
    messages.push('email is requered');
  }

  if (messages.length > 0) {
    event.preventDefault();
  }

  event.preventDefault();
  form.reset();
});

let count = 0;

const header = document.getElementById('Home');

function changeText1() {
  count++;

  if (count === 2) {
    header.classList.remove('header1');
    header.classList.remove('header2');
    header.classList.toggle('header3');
  } else if (count === 1) {
    header.classList.toggle('header2');
    header.classList.remove('header1');
    header.classList.remove('header3');
  } else if (count === 0) {
    header.classList.remove('header2');
    header.classList.remove('header3');
    header.classList.toggle('header1');
    header.classList.toggle('header');
  }

  if (count > 2) {
    count = 2;
  }
}

function changeText2() {
  count--;

  if (count === 0) {
    header.classList.remove('header2');
    header.classList.remove('header3');
    header.classList.toggle('header1');
  } else if (count === 1) {
    header.classList.remove('header1');
    header.classList.remove('header3');
    header.classList.toggle('header2');
  } else if (count === 2) {
    header.classList.remove('header2');
    header.classList.remove('header3');
    header.classList.toggle('header2');
  }

  if (count < 0) {
    count = 0;
  }
}

const nextBtn = document.getElementById('next-btn');

const prevBtn = document.getElementById('prev-btn');

nextBtn.addEventListener('click', changeText1);
prevBtn.addEventListener('click', changeText2);
