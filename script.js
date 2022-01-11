'use strict';

//Selecting elements
const startScreenEl = document.querySelector(`.start-screen`);
const noteMainEl = document.querySelector(`.note-app--main`);

function loadingBackgroundImg() {
  setTimeout(() => {
    document.querySelector(`.loader`).classList.toggle(`hidden`);
    startScreenEl.classList.remove(`hidden`);
  }, 1000);
}

loadingBackgroundImg();

// Start Screen Input
document
  .querySelector(`.start--input-name`)
  .addEventListener('keydown', function (e) {
    const userName = document.querySelector(`.start--input-name`).value;

    const titleTransition = () => {
      document
        .querySelector(`.start--title`)
        .classList.add(`transition--title`);
      document
        .querySelector(`.start--input-name`)
        .classList.add(`transition--fade-out`);
      document
        .querySelector(`.seperator`)
        .classList.add(`transition--fade-out`);
      document.querySelector(`.start--instruction`).textContent =
        'Welcome ' + userName;
      document
        .querySelector(`.start--instruction`)
        .classList.add(`transition--fade-out`);
    };

    const waitForTransition = () => {
      titleTransition();

      setTimeout(() => {
        startScreenEl.classList.add(`hidden`);
        noteMainEl.classList.remove(`hidden`);
      }, 1500);
    };

    if (e.key === 'Enter' && noteMainEl.classList.contains(`hidden`)) {
      waitForTransition();
      noteMainEl.classList.add(`transition--fade`);
      document.querySelector(`.name`).textContent = userName + `'s Notes`;
    }
  });
