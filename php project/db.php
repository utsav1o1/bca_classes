<?php
// db.php
function connectDatabase() {
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $dbname = 'product_database';

    // Create connection
    $conn = new mysqli($host, $user, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}
?>
