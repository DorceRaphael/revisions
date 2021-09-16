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
          <select name="country" id="country">
            <?php include "./mvc/option_controller.php";?>
          </select>
          <div>
              <label for="answer">Devine la capitale</label>
              <input
                type="text"
                name="answer"
                id="answer-input"
                autocomplete="off"
              />
            </div>
          <button id="check-btn">CHECK</button>
        </form>
        <div>
          <article>
            <div>
                <p class="bold">PAYS</p>
                <p class="bold">CAPITALE</p>
            </div>
          </article>
          <article class="one"></article>
        </div>
      </div>
    <!--------------------------------------------- SCRIPT -->
    <script src="app.js"></script>
  </body>
</html>
