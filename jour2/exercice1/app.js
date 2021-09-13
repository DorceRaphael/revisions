oneResult = document.querySelector(".one");
document.querySelector("#one-btn").addEventListener("click", function () {
  let y = Math.floor(Math.random() * 1000);
  oneResult.innerHTML = `<p>${y}</p>`;
});

const letters = "^[a-zA-Z_-]*$";
twoResult = document.querySelector(".two");
document.querySelector("#two-btn").addEventListener("click", function () {
  let twoInput = document.querySelector("#two-input").value;
  if (twoInput != "" && twoInput.match(letters)) {
    twoResult.innerHTML = `<p>Bonjour ${twoInput}</p>`;
  } else {
    twoResult.innerHTML = `<p>BRUH</p>`;
  }
});

const number = "^[0-9.,]*$";
twoResult = document.querySelector(".three");
document.querySelector("#three-btn").addEventListener("click", function () {
  let threeInput = document.querySelector("#three-input").value;
  if (threeInput != "" && threeInput.match(number)) {
    threeInput = parseInt(threeInput);

    threeInput += threeInput * 0.2;
    threeResult.innerHTML = `<p>${threeInput}</p>`;
  } else {
    threeResult.innerHTML = `<p>BRUH</p>`;
  }
});

fourResult = document.querySelector(".four");
document.querySelector("#four-btn").addEventListener("click", function () {
  let fourInput = document.querySelector("#four-input").value;
  if (fourInput != "" && fourInput.match(number)) {
    if (fourInput > 190) {
      fourResult.innerHTML = `<p>Trop grand pour le manège</p>`;
    } else if (fourInput < 154) {
      fourResult.innerHTML = `<p>Trop petit pour le manège</p>`;
    } else {
      fourResult.innerHTML = `<p>Super! Tu peux y aller</p>`;
    }
  } else {
    fourResult.innerHTML = `<p>BRUH</p>`;
  }
});
