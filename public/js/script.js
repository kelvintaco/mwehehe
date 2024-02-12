const answers = [
    "eto sungit nanmn",
    "bakit ayaw mo ha",
    "sige naaaaaa",
    "lah bahala ka jan",
    "galit ka ba sakin 😭",
    "sige na bili may kiss ka sakin madami",
    "magtatampo na ko tlga",
    "isa pang no sinasabi ko sayo",
    "ang sakit ha",
    "d ako titigil",
    "sige lng no mo lng kala mo matitigilan ako nyan",
    "sige na kaseeeeee",
    "isaaaaa",
    "wala ulet na nga"
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "./public/images/lily.jpg";
        refreshBanner();
    }
    clicks++;
    // Change the question in h1 tag
    let question = document.querySelector('h1');
    question.innerHTML = answers[i];
    // Update i to cycle through different messages
    i = (i + 1) % answers.length;
});

yes_button.addEventListener('click', () => {
    // Change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "./public/images/pogi.gif";
    refreshBanner();
    // Hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // Show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

document.addEventListener('DOMContentLoaded', function () {
    createHearts();
});

function createHearts() {
    const container = document.querySelector('.container');

    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('img');
        heart.src = './public/images/heart.png'; // Replace with the actual path to your heart image
        heart.classList.add('heart');
        container.appendChild(heart);

        animateHeart(heart);
    }
}

function animateHeart(heart) {
    const duration = Math.random() * (3000 - 2000) + 1000;

    anime({
        targets: heart,
        translateX: () => anime.random(-window.innerWidth, window.innerWidth),
        translateY: () => anime.random(-window.innerHeight, -100),
        scale: () => anime.random(0.5, 1.5),
        rotate: () => anime.random(-360, 360),
        easing: 'linear',
        duration: duration,
        complete: () => {
            heart.remove(); // Remove the heart after the animation completes
            animateHeart(document.createElement('img')); // Recreate and animate a new heart
        },
    });
}
