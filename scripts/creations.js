import buttonSelectionBehavior from "./utils/buttonSelectionBehavior.js";

// year selection behavior

let currentYear = null;

function yearFadeIn(yearButton) {
    const div = document.querySelector(`.creations > div.year-${yearButton.textContent}`);
    div.style.zIndex = '2';
    div.style.opacity = '1';
}

function yearFadeOut(yearButton) {
    const div = document.querySelector(`.creations > div.year-${yearButton.textContent}`);
    div.style.zIndex = '0';
    div.style.opacity = '0';
}

function workFadeIn(studentButton) {
    const div = document.querySelector(`.works > div.student-${studentButton.textContent.toLowerCase()}`);
    div.style.zIndex = '2';
    div.style.opacity = '1';
}

function workFadeOut(studentButton) {
    const div = document.querySelector(`.works > div.student-${studentButton.textContent.toLowerCase()}`);
    div.style.zIndex = '0';
    div.style.opacity = '0';
}

buttonSelectionBehavior('.years > button', '#E88E35', '#B86614', null, (oldYear, newYear) => {
    if(oldYear)
        yearFadeOut(oldYear);
    
    yearFadeIn(newYear);
});

buttonSelectionBehavior('.students > button', '#ECFEAA', '#B3C180', null, (oldStudent, newStudent) => {
    if(oldStudent)
        workFadeOut(oldStudent);
    
    workFadeIn(newStudent);
});