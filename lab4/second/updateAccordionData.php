<?php
$data = json_decode(file_get_contents('php://input'), true);
if (isset($data['accordionData'])) {
    // Збереження даних у файл
    file_put_contents('../first/accordionData.json', json_encode($data['accordionData']));
    echo json_encode(["message" => "Дані успішно оновлено."]);
} else {
    echo json_encode(["message" => "Виникла помилка при оновленні даних."]);
}
?>
