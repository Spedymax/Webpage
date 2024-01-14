<?php
header('Content-Type: application/json');
$accordionData = json_decode(file_get_contents('../first/accordionData.json'), true);
echo json_encode($accordionData);
?>
