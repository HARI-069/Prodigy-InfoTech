// ---Hex Array---
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

const randomNumber = () => Math.trunc(Math.random() * hex.length);

btn.addEventListener("click", function () {
  let hexNum = "#";
  for (let i = 0; i < 6; i++) hexNum += hex[randomNumber()];
  //   console.log(hexNum);
  document.body.style.backgroundColor = hexNum;
  color.textContent = hexNum;
});
