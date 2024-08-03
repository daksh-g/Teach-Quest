export default function buttonSelectionBehavior(buttonsQuery, defaultColor, activeColor, initialIndex, onSelect) {
    const buttons = document.querySelectorAll(buttonsQuery);
    
    let currentButton = initialIndex !== null ? buttons[initialIndex] : null;
    if(currentButton)
        currentButton.style.backgroundColor = activeColor;
    
    for(const button of buttons) {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = activeColor;
        });

        button.addEventListener('mouseout', () => {
            if(button !== currentButton)
                button.style.backgroundColor = defaultColor;
        });

        button.addEventListener('click', () => {
            if(currentButton)
                currentButton.style.backgroundColor = defaultColor;
            
            button.style.backgroundColor = activeColor;

            onSelect(currentButton, button);
            currentButton = button;
        });
    }
}