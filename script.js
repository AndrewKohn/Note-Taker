"use strict";

const startScreen = document.querySelector(`.start-screen`);
const startInstruction = document.querySelector(`.start--instruction`);

startInstruction.classList.add(`hidden`);
setTimeout(() => {
  startInstruction.classList.remove(`hidden`);
}, 1500);
