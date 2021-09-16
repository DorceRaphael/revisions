const oneResult = document.querySelector(".one");
let countryNbr = document.querySelector("#country");
let countrySelected = "";

document.querySelector("#check-btn").addEventListener("click", function (e) {
  e.preventDefault();
  oneResult.innerHTML = "";
  countrySelected = countryNbr.options[countryNbr.selectedIndex].textContent;
  answerInput = document.querySelector("#answer-input").value;
  loadData();
});

function loadData() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    oneResult.innerHTML = this.responseText;
  };
  xhttp.open("POST", "./mvc/capital_controller.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(`country=${countrySelected}&answer=${answerInput}`);
}
