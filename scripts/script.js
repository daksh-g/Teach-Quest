// slideshow behavior

const images = document.querySelectorAll('.images img');
const dots = document.querySelectorAll('.dots .dot');
const numImages = images.length;
let currentImage = 0;
let lastClicked = Date.now();
for(let i = 1; i < numImages; i++) {
    images[i].style.opacity = '0';
    dots[i].style.opacity = '0.6';
}

function imageFadeIn(index) {
    images[index].style.opacity = '1';
    dots[index].style.opacity = '1';
}

function imageFadeOut(index) {
    images[index].style.opacity = '0';
    dots[index].style.opacity = '0.6';
}

function loadNextImage(step) {
    imageFadeOut(currentImage);
    
    currentImage = (currentImage + step + numImages) % numImages;
    
    imageFadeIn(currentImage);
}

document.querySelector('.left-arrow').addEventListener('click', () => {
    lastClicked = Date.now();

    loadNextImage(-1);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    lastClicked = Date.now();

    loadNextImage(1);
});

function autoNextImage() {
    if (Date.now() - lastClicked >= 7000) {
        loadNextImage(1);

        lastClicked = Date.now();
    }

    setTimeout(autoNextImage, 250);
}

autoNextImage();

// tutor search behavior

const search = document.querySelector('.search input');
const results = document.querySelector('.results');
const categories = document.querySelectorAll('.categories button');
const numCategories = categories.length;
let currentCategory = categories[0];
currentCategory.style.backgroundColor = '#B86614';
for(let category of categories) {
    category.addEventListener('mouseover', () => {
        category.style.backgroundColor = '#B86614';
    });

    category.addEventListener('mouseout', () => {
        if(category !== currentCategory)
            category.style.backgroundColor = '#E88E35';
    });

    category.addEventListener('click', () => {
        currentCategory.style.backgroundColor = '#E88E35';
        currentCategory = category;
        currentCategory.style.backgroundColor = '#B86614';
    });
}