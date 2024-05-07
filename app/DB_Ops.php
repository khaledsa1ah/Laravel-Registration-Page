<?php

namespace App;


use mysqli;

class DB_Ops
{
    private $conn;

    public function __construct()
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "registrationpage";

        // Create connection
        $this->conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    public function insertUser($fullName, $userName, $birthdate, $phone, $address, $email, $password, $userImage)
    {
        // Prepare and bind
        $stmt = $this->conn->prepare("INSERT INTO user (full_name, username, birthdate, phone, address, email, password, user_image) 
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssssss", $fullName, $userName, $birthdate, $phone, $address, $email, $password, $userImage);
        $stmt->execute();
        $stmt->close();
    }

    public function checkUsernameExists($userName)
    {
        $stmt = $this->conn->prepare("SELECT * FROM user WHERE username = ?");
        $stmt->bind_param("s", $userName);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();
        return $result->num_rows > 0;
    }
}
