const letters = "^[a-zA-Z_-]*$";
const oneResult = document.querySelector(".one");
let departements = document.querySelector("#departements");

function check() {
  let nameInput = document.querySelector("#name-input").value;
  let fornameInput = document.querySelector("#forname-input").value;
  if (
    nameInput != "" &&
    fornameInput != "" &&
    nameInput.match(letters) &&
    fornameInput.match(letters)
  ) {
    let value = departements.options[departements.selectedIndex].value;
    if (value >= 17 && value <= 42) {
      oneResult.innerHTML = `<p class="success">Vous êtes éligible</p>`;
    } else {
      oneResult.innerHTML = `<p class="danger">Vous n'êtes pas éligible</p>`;
    }
  } else {
    oneResult.innerHTML = `<p class="danger">BRUH</p>`;
  }
}

document.querySelector("#check-btn").addEventListener("click", function (e) {
  e.preventDefault();
  check();
});

const getDepartements = async () => {
  try {
    const resp = await fetch(
      `https://geo.api.gouv.fr/departements?fields=nom,code`
    );
    const data = await resp.json();
    for (i = 0; i < data.length; i++) {
      let option = document.createElement("option");
      option.value = data[i].code;
      option.textContent = data[i].nom;
      departements.appendChild(option);
    }
  } catch (error) {}
};

getDepartements();
