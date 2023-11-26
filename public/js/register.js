function validateForm() {
    var name = document.forms["myForm"]["fname"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["psw"].value;
    var confirmPassword = document.forms["myForm"]["psw-repeat"].value;

    if (name == "" || email == "" || password == "" || confirmPassword == "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return false;
    }
}