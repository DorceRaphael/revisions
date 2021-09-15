const body = document.querySelector("body");
const birthdayBtn = document.querySelector("#birthday");

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 82) {
    body.style.backgroundColor = "red";
  } else if (e.keyCode == 71) {
    body.style.backgroundColor = "green";
  } else if (e.keyCode == 66) {
    body.style.backgroundColor = "blue";
  } else if (e.keyCode == 80) {
    body.style.backgroundColor = "pink";
  } else if (e.keyCode == 89) {
    body.style.backgroundColor = "yellow";
  } else if (e.keyCode == 38) {
    birthdayBtn.classList.toggle("display-none");
  } else {
    body.style.backgroundColor = "white";
  }
});

birthdayBtn.addEventListener("click", () => {
  function getAge() {
    const dateString = prompt("Please enter your birthday:", "YYYY/MM/DD");
    const days = Math.floor(
      (new Date() - new Date(dateString)) / (1000 * 60 * 60 * 24)
    );
    if (days / 365 > 25) {
      console.log("BIENVENUE");
    } else {
      let wait = 9125 - days;
      console.log(`You have to wait ${wait} days`);
    }
  }
  getAge();
});
