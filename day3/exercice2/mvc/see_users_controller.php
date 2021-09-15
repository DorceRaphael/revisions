<?php
include "../pdo/connection.php";


$stmt = $pdo->prepare("SELECT * FROM users NATURAL JOIN genders NATURAL JOIN signs");
$stmt->execute();
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($users as $user) {?>
<div class="user" id="<?php echo $user["id"]?>">
    <p><?php echo $user["name"]?></p>
    <p><?php echo $user["forname"]?></p>
    <p><?php echo $user["gender"]?></p>
    <p><?php echo $user["sign"]?></p>
    <button class="user-btn" id="modify-btn"><i class="far fa-edit"></i></button>
    <button class="user-btn" id="delete-btn"><i class="far fa-trash-alt"></i></button>
</div>
<?php
}
?>

<script>
document.querySelector("#delete-btn").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(this.parentNode.getAttribute("id"));
});
</script>