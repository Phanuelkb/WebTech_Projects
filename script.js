function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

  

    if (name === "" || email === "" || phone === "") {
        alert("Please fill in all required fields.");
        return false;
    }


    return true;
}

function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username === "" || password === "") {
        alert("Please fill in both username and password.");
        return false;
    }

    return true;
}


