<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
require_once("../bd/pizzas.php");

$result = array(
    "isSuccess"=> true,
    "status"=> 200,
    "result"=> $pizzas,
    "request_time"=> date("d/m/y H:i:s")
);

$pizzas_to_json = json_encode($result);
echo $pizzas_to_json;


?>