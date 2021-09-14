<?php
include "../pdo/connection.php";

$country = "";
if (isset($_POST["country"]) && $_POST["country"] != "") {
    $country = $_POST["country"];
} else {
    $country = "Zimbabwe";
}

$stmt = $pdo->prepare("SELECT * FROM europe WHERE country = ?");
$stmt->bindParam(1, $country);
$stmt->execute();
$countries = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($countries as $country) {?>
<div>
    <p><?php echo $country["country"]?></p>
    <p><?php echo $country["capital"]?></p>
</div>
<?php
}
?>
