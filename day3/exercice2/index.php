<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Exercice 1</title>
  </head>
  <body>
    <section class="section-padding one-section">
      <div class="center">
        <h2 class="section-title">ONE</h2>
        <div class="line"></div>
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
          <select name="sign" id="sign">
            <?php include "./mvc/option_controller.php";?>
          </select>
          <button id="see-btn">SEE</button>
          <button id="add-btn">ADD</button>
        </form>
        <div class="one-result">
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
    <!--------------------------------------------- JQUERY -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!--------------------------------------------- SCRIPT -->
    <script src="app.js"></script>
  </body>
</html>
