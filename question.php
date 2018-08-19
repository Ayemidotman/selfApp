<?php
    $subject = filter_INPUT(INPUT_POST, 'subject');
    $text = $_POST['text'];


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

        $sql = "INSERT INTO question(Subject,Textt)
        values ('$subject', '$text')";

        if ($conn->query($sql)){
            header("location:index.html#services");
        } else {
            echo "Error:".$sql."<br>".$conn->error;
        }
        $conn->close();
    }
?>
