<?php
include "../pdo/connection.php";


$stmt = $pdo->prepare("SELECT * FROM users NATURAL JOIN genders NATURAL JOIN signs");
$stmt->execute();
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($users as $user) {?>
<div id="<?php echo $user["id"]?>">
    <p><?php echo $user["name"]?></p>
    <p><?php echo $user["forname"]?></p>
    <p><?php echo $user["gender"]?></p>
    <p><?php echo $user["sign"]?></p>
</div>
<?php
}
?>
