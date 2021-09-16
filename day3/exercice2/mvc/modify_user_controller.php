
<?php
include "../pdo/connection.php";

if (isset($_POST["id"]) && $_POST["id"] != "" 
    && isset($_POST["name"]) && $_POST["name"] != "" 
    && isset($_POST["forname"]) && $_POST["forname"] != "" 
    && isset($_POST["gender"]) && $_POST["gender"] != ""    
    && isset($_POST["sign"]) && $_POST["sign"] != "") {
        $stmt = $pdo->prepare("UPDATE users SET name = ?, forname = ?, id_gender = ?, id_sign = ? WHERE id = ?");
        $stmt->bindParam(1, $_POST["name"]);
        $stmt->bindParam(2, $_POST["forname"]);
        $stmt->bindParam(3, $_POST["gender"]);
        $stmt->bindParam(4, $_POST["sign"]);
        $stmt->bindParam(5, $_POST["id"]);
        $stmt->execute();
?>
<p class="success">PERSONNE MODIFIEE</p>
<?php
} else {
?>
<p class="danger">VEUILLEZ ENTRER DES VALEURS CORRECTES</p>
<?php
}

?>
