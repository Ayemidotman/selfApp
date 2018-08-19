

function log() {
    if (document.login.username.value == "SelfApp" && document.login.password.value == "selfapp") {
        alert("Welcome")
        window.location = "index.html#services"
    } else if (document.login.username.value == "" || document.login.password.value =="") {
        alert("Empty Field");
    } else {
        alert("Incorrect password")
    }
}

function checkPass() {
    var password = document.signup.password.value
    confirmPassword = document.signup.confirm.value

    if (password != confirmPassword) {
        alert("Password Mismatch")
    } else {
        alert("Signup successful")
        window.location = "login.html"
    }
    
}


function sub(form) {
    for (var i = 0; i < form.elements.length; i++) {
        if (form.elements[i].value == "") {
            alert("Fill out all fields")
            return false
        }
    }
    return checkPass()
}
