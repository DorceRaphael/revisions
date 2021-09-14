<?php
include "./pdo/connection.php";

$stmt = $pdo->prepare("SELECT * FROM signs");
$stmt->execute([]);
$signs = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($signs as $sign) {?>
    <option value="<?php echo $sign["id_sign"]?>"><?php echo $sign["sign"]?></option>
<?php
}
?>
