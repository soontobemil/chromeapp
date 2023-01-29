// background.js is responsible for chagning the backgrond
// we are going to use Math.random & Math.floor to radomize the images

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
]

const chosenImages = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);
bgImage.id = 'bgImage';
