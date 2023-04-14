<?php
// session_start();
// $us = $_SESSION["usuario"];
// if ($us == "") {
//     header("Location: index.html");
// }

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    foreach ($_POST as $name => $value) {
        if (strpos($name, '_') !== false) {
            // Dividir el nombre del parametro en ID e inventario
            $cantidad = $value;
            $id = explode("_", $name)[0]; // Obtenemos el ID del producto
            $inventario = explode("_", $name)[1]; // Obtenemos el nuevo inventario del producto
            if ($cantidad != NULL) {
                $item = array("inventario" => $cantidad); //Creamos el objecto con el producto y su cantidad
                $json = json_encode($item);

                echo $json;

                $url = "http://localhost:3002/productos/$id";
                $ch = curl_init($url);
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
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
                    echo '<script>alert("Se actualizo exitosamente el inventario!")</script>';
                    header("Location: admin-prod.php");
                } else {
                    echo "Hubo un error al crear tu orden, intentalo de nuevo $us " . $http_status;
                }

                curl_close($ch);
            }
        }
    }
}