'use strict';

//Selecting elements
const startScreenEl = document.querySelector(`.start-screen`);
const noteMainEl = document.querySelector(`.note-app--container`);
const subjectText = (document.querySelector(
  `.subject-field`
).value = `08-14-22`);
const str = `- Dental appt @ 11:30AM\n- Get groceries\n- grab tools from work\n- Fix bathroom lightswitch\n`;
const noteText = (document.querySelector(`.text-field`).value = str);

function loadingBackgroundImg() {
  setTimeout(() => {
    document.querySelector(`.loader`).classList.toggle(`hidden`);
    startScreenEl.classList.remove(`hidden`);
  }, 5000);
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

/***********************/
/*  MAIN MENU ACTIONS  */
/***********************/
document
  .querySelector(`.nav-link--create`)
  .addEventListener('click', function () {
    document.querySelector(`.new-note`).classList.toggle(`hidden`);
  });

/*************************/
/*  CREATE NOTE ACTIONS  */
/*************************/
document
  .querySelector(`.btn--create-note`)
  .addEventListener('click', function () {
    // (TODO:) create functionality
    //  add a new animation for fade out & opacity transition
    document.querySelector(`.message--text`).textContent = `Note Created`;
    document.querySelector(`.message`).classList.toggle(`hidden`);
    document
      .querySelector(`.new-note`)
      .classList.toggle('transition--opacity-65');
    document
      .querySelector(`.message`)
      .classList.toggle('transition--opacity-65');
    document.querySelector(`.new-note`).style.opacity = `65%`;
    document.querySelector(`.message`).style.opacity = `65%`;

    setTimeout(() => {
      document
        .querySelector(`.new-note`)
        .classList.toggle('transition--opacity-65');
      document
        .querySelector(`.message`)
        .classList.toggle('transition--opacity-65');
      document
        .querySelector(`.message`)
        .classList.toggle(`transition--fade-out`);
      document
        .querySelector(`.new-note`)
        .classList.toggle(`transition--fade-out`);
      setTimeout(() => {
        document.querySelector(`.message`).classList.toggle(`hidden`);
        document.querySelector(`.new-note`).classList.toggle(`hidden`);
      }, 1500);
    }, 1500);
  });

document
  .querySelector(`.btn--cancel-note`)
  .addEventListener('click', function () {
    document.querySelector(`.new-note`).classList.toggle(`hidden`);
  });
