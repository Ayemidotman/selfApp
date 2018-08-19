<?php session_start();
    include("connect.php");

    $con = mysqli_connect("localhost", "root", "", "selfApp");
    if (isset($_POST['log'])){
        $username = mysqli_real_escape_string($con,$_POST['username']);
        $password = mysqli_real_escape_string($con,$_POST['password']);

        if ($username!="" && $password!="") {
            $sql  = "SELECT * FROM accounts WHERE username='$username' and password='$password'";
            $result = mysqli_query($con,$sql);
            $row = mysqli_fetch_array($result,MYSQLI_ASSOC);

            $count = mysqli_num_rows($result);

            if ($count ==1) {
                $_SESSION['username'] = $username;
                header("location:index.html#services");
            } else {
                echo "<script type='text/javascript'>";
                echo "alert('Username or Password mismatch');";
                echo "window.location = 'login.html'";
                echo "</script>";
            }
        } else {
            echo "<script type='text/javascript'>";
            echo "alert('Please fill out fie');";
            echo "window.location = 'login.html'";
            echo "</script>";
        }
    } else {
        echo "<script type='text/javascript'>";
        echo "alert('Error in connection');";
        echo "window.location = 'index.html'";
        echo "</script>";
    }

?>
