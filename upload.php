<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $targetDir = "uploads/";
    $fileName = basename($_FILES["file"]["name"]);
    $targetFilePath = $targetDir . $fileName;

    // Create directory if not exists
    if (!is_dir($targetDir)) {
        mkdir($targetDir, 0777, true);
    }

    // Upload file
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)) {
        echo "File uploaded successfully: " . $fileName;
    } else {
        echo "Error uploading your file.";
    }
}
?>
