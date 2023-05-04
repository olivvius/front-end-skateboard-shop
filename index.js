//alert("le fichier fonctionne");
const backchange = document.querySelector("#btn1");
const nav = document.querySelector("nav");
//console.log(backchange);
//backchange.style.background = "black";
backchange.addEventListener("click", () => {
  nav.style.background = "white";
});
let pseudo = "";
let language = "";
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
console.log(inputName);
inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});
select.addEventListener("input", (e) => {
  language = e.target.value;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(yes);
});
