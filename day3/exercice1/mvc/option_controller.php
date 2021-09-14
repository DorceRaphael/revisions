<?php
include "./pdo/connection.php";

$stmt = $pdo->prepare("SELECT * FROM europe");
$stmt->execute([]);
$countries = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($countries as $country) {?>
    <option value=""><?php echo $country["country"]?></option>
<?php
}
?>
