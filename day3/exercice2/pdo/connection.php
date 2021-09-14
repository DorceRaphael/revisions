<?php
$host = "localhost";
$user = "revisionsman";
$password = "123456";
$dbname = "data_day3_ex2";
$charset = "utf8";

//Data Source Name
$dsn = "mysql:host=" . $host . ";dbname=" . $dbname . ";charset=" . $charset;

// Instance PDO
$pdo = new PDO($dsn, $user, $password);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

?>
