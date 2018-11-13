<?php

    if (!isset($_POST["username"]) || !isset($_POST["password"])){
        print json_encode(array("message" => "nenhuma credencial foi informada", "status" => "fail"));
        return;
    }

    $username = $_POST["username"];
    $password = $_POST["password"];

    if ($username != "admin" || $password != "1234"){
        print json_encode(array("message" => "Credenciais inválidas!", "status" => "fail"));
        return;
    }

    print json_encode(array("message" => "Seja bem vindo, Administrador", 
                            "user" => "Administrador", "status" => "success",
                            "avatar" => "https://2.bp.blogspot.com/-sd3-qRwRfV0/V1Wvk7JNWpI/AAAAAAAAChI/icW6RpJ5Zlc_snXiNYK2qEWN2lViWAz8ACLcB/s400/Untitled.png"));
?>