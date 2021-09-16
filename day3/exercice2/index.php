<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!------------------ FONT AWESOME ------------------>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Exercice 1</title>
  </head>
  <body>
    <section class="section-padding one-section">
      <div class="center">
        <h2 class="section-title">ONE</h2>
        <div class="line"></div>
        <div class="overlay display-none" id="user-form">
          <form action="">
          <div>
              <label for="name">Nom</label>
              <input
                type="text"
                name="name"
                id="name-input"
                autocomplete="off"
              />
            </div>
            <div>
              <label for="forname">Prénom</label>
              <input
                type="text"
                name="forname"
                id="forname-input"
                autocomplete="off"
              />
            </div>
            <div class="radio">
              <input
                type="radio"
                id="gender1"
                name="gender"
                value="1"
                checked
              />
              <label for="gender1">Homme</label>
              <input
                type="radio"
                id="gender2"
                name="gender"
                value="2"
              />
              <label for="gender2">Femme</label>
            </div>
            <select name="signs" id="signs">
              <?php include "./mvc/option_controller.php";?>
            </select>
            <div class="btn-container">
              <button class="base-btn" id="add-btn">AJOUTER</button>
              <button class="base-btn" id="modify-btn">MODIFIER</button>
              <button class="base-btn" id="close-form-btn">FERMER</button>
            </div>
          </form>
        </div>
        <div class="btn-container">
          <button class="base-btn" id="see-btn">VOIR</button>
          <button class="base-btn" id="show-form-btn">AJOUTER</button>
        </div>
        <div class="one-table">
          <article>
            <div>
                <p class="bold">NOM</p>
                <p class="bold">PRENOM</p>
                <p class="bold">GENRE</p>
                <p class="bold">SIGNE</p>
            </div>
          </article>
          <article class="one"></article>
        </div>
      </div>
    </section>
    <!--------------------------------------------- SCRIPT -->
    <script src="app.js"></script>
  </body>
</html>
