<?php
session_start();
$us = $_SESSION["usuario"];
if ($us == "") {
    header("Location: index.html");
}

$items = array(); //Creamos el objecto que contendra los items para el request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    foreach ($_POST as $name => $value) {
        if (strpos($name, 'range') !== false) {
            // Si el input contiene la palabra range, proviene de un slider
            $id = str_replace('range', '', $name); // Get the product id from the input name
            $cantidad = $value;
            if ($cantidad != 0) { // Check if cantidad is not equal to 0
                $item = array("id" => $id, "cantidad" => $cantidad); //Creamos el objecto con el producto y su cantidad
                array_push($items, $item); // Anexamos un producto con su cantidad
            }
        }
    }
}
$data = array("usuario" => $us, "items" => $items);
$json = json_encode($data);


$url = "http://localhost:3003/ordenes";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt(
    $ch,
    CURLOPT_HTTPHEADER,
    array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($json)
    )
);

$result = curl_exec($ch);
$http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if ($http_status == 200) {
    echo '<script>alert("Orden creada exitosamente")</script>';
    header("Location: user-prod.php");
} else {
    echo "Hubo un error al crear tu orden, intentalo de nuevo $us " . $http_status;
}

curl_close($ch);
// Creamos el POST request para crear la orden.
