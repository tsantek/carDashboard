// LOAD OPEN WINDOW

// RIGHT SIDE SLIDER
let rightFrontSlider = document.querySelector('#rangeRightFront');
let rightFrontLine = document.querySelector('.line-wheel-left')
let rightRearSlider = document.querySelector('#rangeRightRear');
let rightRearLine = document.querySelector('.rear-line-wheel-left');

rightRearSlider.addEventListener('input', (e) => {
    rangeRight(rightRearLine, e.target.value)
})

rightFrontSlider.addEventListener('input', (e) => {
    rangeRight(rightFrontLine, e.target.value)
})

function rangeRight(wheel, slider) {
    let zero = 333;
    for (let i = 0; i < slider; i++) {
        zero += 0.55;
        wheel.style.transform = `rotate(${zero}deg)`;
    }
}

// LEFT SIDE SLIDER

let leftFrontSlider = document.querySelector('#rangeLeftFront');
let leftFrontLine = document.querySelector('.line-wheel-right')
let leftRearSlider = document.querySelector('#rangeLeftRear');
let leftRearLine = document.querySelector('.rear-line-wheel-right');


leftFrontSlider.addEventListener('input', (e) => {
    rangeLeft(leftFrontLine, e.target.value)
})

leftRearSlider.addEventListener('input', (e) => {
    rangeLeft(leftRearLine, e.target.value)
})

function rangeLeft(wheel, slider) {
    let zero = 208;
    for (let i = 0; i < slider; i++) {
        zero -= 0.55;
        wheel.style.transform = `rotate(${zero}deg)`;
    }
}