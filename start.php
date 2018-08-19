
<!DOCTYPE html>
<html>
<head>
    <title>SelfApp</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <script src="assets/js/main.js" type="text/javascript"></script>
    <script src="assets/js/scroll.js" type="text/javascript"></script>
</head>
<body>
    <div id="overlay">
        <a href="www.facebook.com/grace-nefi" title="Facebook"><img src="assets/img/facebook.svg" height="30"></a>
        <a href="www.twitter.com" title="Twitter"><img src="assets/img/twitter.svg" height="30"></a>
        <a href="www.instagram.com" title="Instagram"><img src="assets/img/ig.svg" height="30"></a>

        <div class="links">
            <a href="index.html#home">Home</a>
            <a href="index.html#services">Services</a>
            <a href="index.html#about">About</a><br>


            <div class="logo">
                <a href="index.html"><img src="assets/img/logo.png" height="70" width="250"></a>
            </div>
        </div>
    </div>

    <section id="login">
        <img class="background" src="assets/img/about.jpg" alt="background-image" width="100%" height="150%">
        <div class="container">
            <form name="login" method="POST" action="get.php">
                <h1>Login</h1>
                <i><input type="text" placeholder="Username" name="username" required></i>
                <hr size="1">
                <i class="pass"><input type="password" placeholder="Password" name="password" required></i>
                <hr size="1">
                <input type="submit" value="Login" class="l" name="log">
                <a href="signup.html" class="l">Signup</a>

            </form>
        </div>
    </section>
</body>
</html>
