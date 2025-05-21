const watch = document.getElementById("watch");
const colors = ['#ff0057', '#00f7ff', '#ff6a00', '#aaff00', '#ff00aa'];
let current = 0;

function changeColor() {
  current = (current + 1) % colors.length;
  watch.style.filter = `drop-shadow(0 0 20px ${colors[current]})`;
}
