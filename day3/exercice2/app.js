const oneResult = document.querySelector(".one");
const userForm = document.querySelector("#user-form");
let signs = document.querySelector("#signs");
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
    document.querySelector("#name-input").value = "";
    document.querySelector("#forname-input").value = "";
    formStatus("grid");
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
  signSelected = signs.options[signs.selectedIndex].value;
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

function addUser() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    oneResult.innerHTML = this.responseText;
  };
  xhttp.open("POST", "./mvc/add_user_controller.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    `name=${nameInput}&forname=${fornameInput}&gender=${genderChecked}&sign=${signSelected}`
  );
}

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
        document.querySelector(
          `#gender${this.parentNode
            .querySelector(".user-gender")
            .getAttribute("value")}`
        ).checked = true;
        signs.value = this.parentNode
          .querySelector(".user-sign")
          .getAttribute("value");
        formStatus("grid");
      });
    });

    document.querySelectorAll("#modify-btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        nameInput = document.querySelector("#name-input").value;
        fornameInput = document.querySelector("#forname-input").value;
        genderChecked = document.querySelector(
          'input[name="gender"]:checked'
        ).value;
        signSelected = signs.options[signs.selectedIndex].value;
        modifyUser();
        formStatus("none");
      });
    });

    function deleteUser() {
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
        oneResult.innerHTML = this.responseText;
      };
      xhttp.open("POST", "./mvc/delete_user_controller.php", true);
      xhttp.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      xhttp.send(`id=${id}`);
    }

    function modifyUser() {
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
        oneResult.innerHTML = this.responseText;
      };
      xhttp.open("POST", "./mvc/modify_user_controller.php", true);
      xhttp.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      xhttp.send(
        `id=${id}&name=${nameInput}&forname=${fornameInput}&gender=${genderChecked}&sign=${signSelected}`
      );
    }
  };
  xhttp.open("POST", "./mvc/see_users_controller.php", true);
  xhttp.send();
}
