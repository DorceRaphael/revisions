const oneResult = document.querySelector(".one");
const userForm = document.querySelector("#user-form");
let sign = document.querySelector("#sign");
let signSelected = "";
let genderChecked = "";

document.querySelector("#see-btn").addEventListener("click", function (e) {
  e.preventDefault();
  seeUsers();
});

document
  .querySelector("#show-form-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    addBtnStatus("block");
    modifyBtnStatus("none");
    formStatus("grid");
    document.querySelector("#name-input").value = "bruh";
  });

document
  .querySelector("#close-form-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    formStatus("none");
  });

document.querySelector("#add-btn").addEventListener("click", function (e) {
  e.preventDefault();
  nameInput = document.querySelector("#name-input").value;
  fornameInput = document.querySelector("#forname-input").value;
  genderChecked = document.querySelector('input[name="gender"]:checked').value;
  signSelected = sign.options[sign.selectedIndex].value;
  addUser();
  formStatus("none");
});

function formStatus(status) {
  userForm.style.display = status;
}

function addBtnStatus(status) {
  document.querySelector("#add-btn").style.display = status;
}

function modifyBtnStatus(status) {
  document.querySelector("#modify-btn").style.display = status;
}

// function addUser() {
//   $.ajax({
//     url: "./mvc/add_user_controller.php",
//     type: "POST",
//     cache: false,
//     data: {
//       name: nameInput,
//       forname: fornameInput,
//       gender: genderChecked,
//       sign: signSelected,
//     },
//     success: function (response) {
//       $(".one").html(response);
//     },
//   });
// }

function addUser() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {};
  xhttp.open(
    "POST",
    "./mvc/add_user_controller.php?name=" +
      nameInput +
      "&forname=" +
      fornameInput +
      "&gender=" +
      genderChecked +
      "&sign=" +
      signSelected +
      "",
    true
  );
  xhttp.send();
}

// function seeUsers() {
//   $.ajax({
//     url: "./mvc/see_users_controller.php",
//     type: "GET",
//     cache: false,
//     success: function (response) {
//       $(".one").html(response);
//     },
//   });
// }

function seeUsers() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    oneResult.innerHTML = this.responseText;
    document.querySelectorAll("#delete-btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        id = this.parentNode.getAttribute("id");
        deleteUser();
      });
    });

    document.querySelectorAll("#show-modify-form-btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        id = this.parentNode.getAttribute("id");
        addBtnStatus("none");
        modifyBtnStatus("block");
        document.querySelector("#name-input").value =
          this.parentNode.querySelector(".user-name").textContent;
        document.querySelector("#forname-input").value =
          this.parentNode.querySelector(".user-forname").textContent;
        formStatus("grid");
      });
    });

    document.querySelectorAll("#modify-btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        // nameInput = this.parentNode.querySelector(".user-name").textContent;
        // fornameInput = this.parentNode.querySelector(".user-forname").textContent;
        // genderChecked = this.parentNode.querySelector(".user-gender").textContent;
        // signSelected = this.parentNode.querySelector(".user-sign").textContent;
        nameInput = document.querySelector("#name-input").value;
        fornameInput = document.querySelector("#forname-input").value;
        genderChecked = document.querySelector(
          'input[name="gender"]:checked'
        ).value;
        signSelected = sign.options[sign.selectedIndex].value;
        modifyUser();
        formStatus("none");
      });
    });

    // function deleteUser() {
    //   $.ajax({
    //     url: "./mvc/delete_user_controller.php",
    //     type: "POST",
    //     cache: false,
    //     data: {
    //       id: id,
    //     },
    //     success: function (response) {
    //       $(".one").html(response);
    //     },
    //   });
    // }

    function deleteUser() {
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
        oneResult.innerHTML = this.responseText;
      };
      xhttp.open(
        "POST",
        "./mvc/delete_user_controller.php?id=" + id + "",
        true
      );
      xhttp.send();
    }

    // function modifyUser() {
    //   $.ajax({
    //     url: "./mvc/modify_user_controller.php",
    //     type: "POST",
    //     cache: false,
    //     data: {
    //       id: id,
    //       name: nameInput,
    //       forname: fornameInput,
    //       gender: genderChecked,
    //       sign: signSelected,
    //     },
    //     success: function (response) {
    //       $(".one").html(response);
    //     },
    //   });
    // }

    function modifyUser() {
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
        oneResult.innerHTML = this.responseText;
      };
      xhttp.open(
        "POST",
        "./mvc/add_user_controller.php?id=" +
          id +
          "&name=" +
          nameInput +
          "&forname=" +
          fornameInput +
          "&gender=" +
          genderChecked +
          "&sign=" +
          signSelected +
          "",
        true
      );
      xhttp.send();
    }
  };
  xhttp.open("POST", "./mvc/see_users_controller.php", true);
  xhttp.send();
}
