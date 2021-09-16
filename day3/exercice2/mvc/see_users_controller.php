<?php
include "../pdo/connection.php";


$stmt = $pdo->prepare("SELECT * FROM users NATURAL JOIN genders NATURAL JOIN signs");
$stmt->execute();
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($users as $user) {?>
<div class="user" id="<?php echo $user["id"]?>">
    <p class="user-name"><?php echo $user["name"]?></p>
    <p class="user-forname"><?php echo $user["forname"]?></p>
    <p value="<?php echo $user["id_gender"]?>" class="user-gender"><?php echo $user["gender"]?></p>
    <p value="<?php echo $user["id_sign"]?>" class="user-sign"><?php echo $user["sign"]?></p>
    <button class="user-btn" id="show-modify-form-btn"><i class="far fa-edit"></i></button>
    <button class="user-btn" id="delete-btn"><i class="far fa-trash-alt"></i></button>
</div>
<?php
}
?>