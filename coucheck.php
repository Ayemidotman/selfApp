<?php session_start();
    $server = "localhost";
    $user = "root";
    $pass = "";
    $db = "selfapp";

    // create connection
    $mysqli = mysqli_connect($server, $user, $pass, $db);

    // check connection
    if(!$mysqli){
        die("Connection error: " . mysqli_connect_error());
    }
    echo "Connection: Success";
    if (isset($_SESSION['username'])){
        header("location:course.html");
    } else {
        echo "<script type='text/javascript'>";
        echo "alert('Please login to access service');";
        echo "window.location = 'login.html'";
        echo "</script>";
    }

    function security($str, $sqlHandle){
        $secured = strip_tags($str);
        $secured = htmlspecialchars($secured);
        $secured = mysqli_real_escape_string($sqlHandle, $secured);

        return $secured;
    }



?>
