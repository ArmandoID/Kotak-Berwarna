const boxes = [
    { id: "red", color: "#ff0000", delay: 1000 },
    { id: "green", color: "#00b600", delay: 2000 },
    { id: "blue", color: "#307cff", delay: 3000 },
    { id: "yellow", color: "#ffff00", delay: 4000 }
];

boxes.forEach(({ id, color, delay }) => {
    const box = document.getElementById(id);
    setTimeout(() => {
        box.style.backgroundColor = color;
    }, delay);
})

/*
const redBox = document.getElementById("red");
const greenBox = document.getElementById("green");
const blueBox = document.getElementById("blue");
const yellowBox = document.getElementById("yellow");

function redColor() {
    redBox.style.backgroundColor = "#ff0000";
} setTimeout(redColor, 1000);

function greenColor() {
    greenBox.style.backgroundColor = "#00b600";
} setTimeout(greenColor, 2000);

function blueColor() {
    blueBox.style.backgroundColor = "#307cff";
} setTimeout(blueColor, 3000);

function yellowColor() {
    yellowBox.style.backgroundColor = "#ffff00";
} setTimeout(yellowColor, 4000);
*/