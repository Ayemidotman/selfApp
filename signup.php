<?php
    $username = filter_INPUT(INPUT_POST, 'username');
    $password = filter_INPUT(INPUT_POST, 'password');
    $confirm = filter_INPUT(INPUT_POST, 'confirm');
    $email = filter_INPUT(INPUT_POST, 'email');
    $gender = filter_INPUT(INPUT_POST, 'gender');
    $telephone = filter_INPUT(INPUT_POST, 'number');
    $age = filter_INPUT(INPUT_POST, 'age');
    $address = filter_INPUT(INPUT_POST, 'location');

    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "selfApp";

    // create connection
    $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

    if (mysqli_connect_error()){
        die('Connect Error('.mysql_errno().')')
            .mysqli_connect_error();
    } else {
        $sql = "INSERT INTO accounts(Username,Password,Confirm,email,Gender,telephone,Age,Address)
        values ('$username', '$password', '$confirm', '$email', '$gender', '$telephone', '$age', '$address')";

        if ($conn->query($sql)){
            header("location:signup.html");
        } else {
            echo "Error:".$sql."<br>".$conn->error;
        }
        $conn->close();
    }
?>
