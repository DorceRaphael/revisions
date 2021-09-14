const oneResult = document.querySelector(".one");
let countryNbr = document.querySelector("#country");
let countrySelected = "";

document.querySelector("#check-btn").addEventListener("click", function (e) {
  e.preventDefault();
  oneResult.innerHTML = "";
  countrySelected = countryNbr.options[countryNbr.selectedIndex].textContent;
  loadData();
});

function loadData() {
  $.ajax({
    url: "./mvc/capital_controller.php",
    type: "POST",
    cache: false,
    data: { country: countrySelected },
    success: function (response) {
      $(".one").html(response);
    },
  });
}
