
<?php
include "../pdo/connection.php";

if (isset($_POST["id"]) && $_POST["id"] != "") {
    $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
    $stmt->bindParam(1, $_POST["id"]);
    $stmt->execute();
?>
<p class="success">PERSONNE EFFACÉE</p>
<?php
} else {
?>
<p class="danger">VEUILLEZ ENTRER DES VALEURS CORRECTES</p>
<?php
}

?>
