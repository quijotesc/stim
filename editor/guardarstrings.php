<?php

ini_set('display_errors', 'On');

error_reporting(E_ALL);

$post_data = file_get_contents('php://input');

if (!empty($post_data)) {
	copy('strings.json',time() . ".json");
    $file = fopen('strings.json', 'w+');
    fwrite($file, $post_data);
    fclose($file);
    echo 'success';
} 

?>