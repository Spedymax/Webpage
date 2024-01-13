<?php
$data = json_decode(file_get_contents('php://input'), true);
if (isset($data['accordionData'])) {
    file_put_contents('accordionData.json', json_encode($data['accordionData']));
    echo "Дані успішно збережено.";
} else {
    echo "Виникла помилка під час збереження даних.";
}
?>
