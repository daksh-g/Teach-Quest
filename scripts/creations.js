import buttonSelectionBehavior from "./utils/buttonSelectionBehavior.js";

// year selection behavior

let currentYear = null;

function yearFadeIn(yearButton) {
    const div = document.querySelector(`.creations > div.year-${yearButton.textContent}`);
    div.style.opacity = '1';
}

function yearFadeOut(yearButton) {
    const div = document.querySelector(`.creations > div.year-${yearButton.textContent}`);
    div.style.opacity = '0';
}

buttonSelectionBehavior('.years > button', '#E88E35', '#B86614', null, (oldYear, newYear) => {
    if(oldYear)
        yearFadeOut(oldYear);
    
    yearFadeIn(newYear);
});