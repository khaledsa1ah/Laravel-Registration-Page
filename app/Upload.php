<?php

namespace App;

class Upload{
    public function __construct() {}

    public function uploadImage($userName)
    {
        $targetDir = "uploads/";

        if (!file_exists($targetDir)) {
            mkdir($targetDir, 0777, true);
        }

        $uniqueFilename = $userName . '' . date('Ymd_His') . '' . $_FILES['user_image']['name'];

        // Handle file upload (move uploaded file to dynamically created directory)
        $targetFile = $targetDir . $uniqueFilename;
        if (move_uploaded_file($_FILES["user_image"]["tmp_name"], $targetFile)) {
            return true;
        }
        else{
            return false;
        }
    }
}
