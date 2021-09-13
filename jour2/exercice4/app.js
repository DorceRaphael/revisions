const letters = "^[a-zA-Z_-]*$";
oneResult = document.querySelector(".one");
var data = "";
var dataFiltered = "";
let countryNbr = document.querySelector("#country-nbr");

document.querySelector("#check-btn").addEventListener("click", function (e) {
  e.preventDefault();
  value = countryNbr.options[countryNbr.selectedIndex].value;
  loadData(value, "Africa");
});

function loadData(slice, country) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    data = JSON.parse(this.responseText);
    data = data.filter((element) => element.continent == country);
    data = data.slice(0, slice);
    console.log(data);
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}
