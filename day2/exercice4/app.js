const letters = "^[a-zA-Z_-]*$";
oneResult = document.querySelector(".one");
let data = "";
let dataFiltered = "";
let countryNbr = document.querySelector("#country-nbr");

function getSelectedCheckboxValues(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  return values;
}

document.querySelector("#check-btn").addEventListener("click", function (e) {
  e.preventDefault();
  oneResult.innerHTML = "";
  countrySelected = countryNbr.options[countryNbr.selectedIndex].value;
  for (let i = 0; i < getSelectedCheckboxValues("continent").length; i++) {
    loadData(countrySelected, getSelectedCheckboxValues("continent")[i]);
  }
});

function loadData(sliceParam, countryParam) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    data = JSON.parse(this.responseText);
    data = data.filter((element) => element.continent == countryParam);
    data = data.slice(0, sliceParam);
    console.log(data);
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
      let dataItem = document.createElement("div");
      dataItem.innerHTML = `<p class="continent">${data[i].continent}</p>
      <p class="country">${data[i].country}</p>`;
      oneResult.appendChild(dataItem);
    }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}
