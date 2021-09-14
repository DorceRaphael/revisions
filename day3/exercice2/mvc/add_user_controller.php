
<?php
include "../pdo/connection.php";

if (isset($_POST["name"]) && $_POST["name"] != "" 
&& isset($_POST["forname"]) && $_POST["forname"] != "" 
&& isset($_POST["gender"]) && $_POST["gender"] != ""
&& isset($_POST["sign"]) && $_POST["sign"] != "") {
    $stmt = $pdo->prepare("INSERT INTO users(name, forname, id_gender, id_sign) VALUES(?, ?, ?, ?)");
    $stmt->bindParam(1, $_POST["name"]);
    $stmt->bindParam(2, $_POST["forname"]);
    $stmt->bindParam(3, $_POST["gender"]);
    $stmt->bindParam(4, $_POST["sign"]);
    $stmt->execute();
?>
<p class="success">NICE</p>
<?php
} else {
?>
<p class="danger">VEUILLEZ ENTRER DES VALEURS CORRECTES</p>
<?php
}

?>
