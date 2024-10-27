<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    echo "Nome: " . htmlspecialchars($username) . "<br>";
    echo "Senha: " . htmlspecialchars($password) . "<br>";
}
?>