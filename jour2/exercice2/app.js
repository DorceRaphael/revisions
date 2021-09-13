const letters = "^[a-zA-Z_-]*$";
let persons = [];
oneResult = document.querySelector(".one");
document.querySelector("#add-btn").addEventListener("click", function () {
  let addInput = document.querySelector("#add-input").value;
  if (addInput != "" && addInput.match(letters)) {
    persons.push(addInput);
    console.log(persons);
  } else {
    oneResult.innerHTML = `<p>BRUH</p>`;
  }
});

document.querySelector("#pick-btn").addEventListener("click", function () {
  const random = Math.floor(Math.random() * persons.length);
  oneResult.innerHTML = `<p>${persons[random]}</p>`;
  persons.splice(random, 1);
  console.log();
  console.log(persons);
});
