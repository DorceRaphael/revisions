const prenom = "Raph";
const nom = "Bruh";

const one = document.querySelector(".one");
one.innerHTML = `<p>Votre nom est ${nom} et votre prénom est ${prenom}</p>`;

const two = document.querySelector(".two");
two.addEventListener("click", function () {
  two.style.backgroundColor = "rgb(222, 49, 99)";
  two.style.borderRadius = "2.5rem";
});

const films = ["film1", "film2", "film3", "film4", "film5"];
let currentFilm = "";
const three = document.querySelector(".three");
const threeResult = document.querySelector(".three-result");
three.addEventListener("click", function () {
  let random = Math.floor(Math.random() * films.length);
  if (random == currentFilm && random < films.length - 1) {
    random += 1;
  } else if (random == currentFilm && random == films.length - 1) {
    random -= 1;
  }
  currentFilm = random;
  threeResult.innerHTML = `<p>${films[random]}</p>`;
});

var fourResult = document.querySelector(".four-result");
var encrypt = document.querySelector("#encrypt");
encrypt.addEventListener("click", function () {
  var userInput = document.querySelector(".user-input").value;
  var result = [];
  const alphabetMin = "abcdefghijklmnopqrstuvwxyz";
  const alphabetMaj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let pos = -1;
  for (let i = 0; i < userInput.length; i++) {
    if (alphabetMin.indexOf(userInput[i]) >= 0) {
      pos = alphabetMin.indexOf(userInput[i]);
      result.push(alphabetMaj[pos]);
    } else if (alphabetMaj.indexOf(userInput[i]) >= 0) {
      pos = alphabetMaj.indexOf(userInput[i]);
      result.push(alphabetMin[pos]);
    }
  }
  result = result.toString().replace(/,/g, "");
  fourResult.innerHTML = `<p>${result}</p>`;
});

var generate = document.querySelector("#generate");
var fiveResult = document.querySelector(".five-result");
var chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;
var password = "";
generate.addEventListener("click", function () {
  password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  fiveResult.innerHTML = `<p>${password}</p>`;
});
