<?php
    $val = filter_INPUT(INPUT_POST, 'val');


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

        $sql = "INSERT INTO rate(Value)
        values ('$val')";

        if ($conn->query($sql)){
            echo "<script type='text/javascript'>";
            echo "alert('Thanks for rating');";
            echo "window.location = 'course.html'";
            echo "</script>";

        } else {
            echo "Error:".$sql."<br>".$conn->error;
        }
        $conn->close();
    }
?>
