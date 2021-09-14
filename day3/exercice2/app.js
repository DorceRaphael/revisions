const oneResult = document.querySelector(".one");
let sign = document.querySelector("#sign");
let signSelected = "";
let genderChecked = "";

document.querySelector("#see-btn").addEventListener("click", function (e) {
  e.preventDefault();
  seeUsers();
});

document.querySelector("#add-btn").addEventListener("click", function (e) {
  e.preventDefault();
  nameInput = document.querySelector("#name-input").value;
  fornameInput = document.querySelector("#forname-input").value;
  genderChecked = document.querySelector('input[name="gender"]:checked').value;
  signSelected = sign.options[sign.selectedIndex].value;
  console.log(nameInput, fornameInput, genderChecked, signSelected);
  addUser();
});

function addUser() {
  $.ajax({
    url: "./mvc/add_user_controller.php",
    type: "POST",
    cache: false,
    data: {
      name: nameInput,
      forname: fornameInput,
      gender: genderChecked,
      sign: signSelected,
    },
    success: function (response) {
      $(".one").html(response);
    },
  });
}

function seeUsers() {
  $.ajax({
    url: "./mvc/see_users_controller.php",
    type: "GET",
    cache: false,
    success: function (response) {
      $(".one").html(response);
    },
  });
}
