const letters = "^[a-zA-Z_-]*$";
let persons = [];
let personsPicked = [];

if (JSON.parse(localStorage.getItem("persons", persons))) {
  persons = JSON.parse(localStorage.getItem("persons", persons));
}
if (JSON.parse(localStorage.getItem("personsPicked", personsPicked))) {
  personsPicked = JSON.parse(
    localStorage.getItem("personsPicked", personsPicked)
  );
}
console.log(persons);
console.log(personsPicked);

const oneResult = document.querySelector(".one");
document.querySelector("#add-btn").addEventListener("click", function () {
  let addInput = document.querySelector("#add-input").value;
  if (addInput != "" && addInput.match(letters)) {
    persons.push(addInput);
    localStorage.setItem("persons", JSON.stringify(persons));
  } else {
    oneResult.innerHTML = `<p>BRUH</p>`;
  }
});

document.querySelector("#pick-btn").addEventListener("click", function () {
  let random = Math.floor(Math.random() * persons.length);
  personsPicked.push(persons[random]);
  oneResult.innerHTML = `<p>${persons[random]}</p>`;
  persons.splice(random, 1);
  localStorage.setItem("persons", JSON.stringify(persons));
  localStorage.setItem("personsPicked", JSON.stringify(personsPicked));
});
