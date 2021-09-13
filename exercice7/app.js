const y = Math.floor(Math.random() * 10 + 1);
let guess = 1;

document.querySelector("#guess-btn").addEventListener("click", function (e) {
  e.preventDefault();
  let x = document.querySelector("#guess-input").value;
  if (x == y) {
    alert(`Trouvé en ${guess} coups`);
  } else if (x > y) {
    guess++;
    console.log("Moins");
  } else {
    guess++;
    console.log("PLUS");
  }
});
