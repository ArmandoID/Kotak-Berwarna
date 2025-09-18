const boxes = document.querySelectorAll(".box");
const colors = ["#ff0000","#00b600", "#307cff", "#ffff00"];

boxes.forEach((box, index) => {
  setTimeout(() => {
    box.style.background = colors[index];
  }, (index + 1) * 1000);
});

boxes.forEach((box, index) => {
  setTimeout(() => {
    box.style.borderRadius = "50%";
  }, (boxes.length + index + 1) * 1000);
});
