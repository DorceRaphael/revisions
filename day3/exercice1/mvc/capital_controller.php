<?php
include "../pdo/connection.php";

$country = "";
if (isset($_POST["country"]) && $_POST["country"] != "") {
    $country = $_POST["country"];
} else {
    $country = "Zimbabwe";
}

$stmt = $pdo->prepare("SELECT * FROM europe WHERE country = ?");
$stmt->execute([$country]);
$countries = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($countries as $country) {?>
    <p><?php echo $country["capital"]?></p>
<?php
}
?>
