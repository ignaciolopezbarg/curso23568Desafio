function validateForm() {
    var form = $(this);

    var fname = form.find("#fname").val();
    var email = form.find("#email").val();
    var psw = form.find("#psw").val();
    var pswRepeat = form.find("#psw-repeat").val();

    // Realiza las validaciones necesarias aquí.
    // Por ejemplo, puedes validar que los campos no estén vacíos.
    if (fname === "" || email === "" || psw === "" || pswRepeat === "") {
        alert("Todos los campos deben estar llenos.");
        return false;
    }

    // También puedes validar que el correo electrónico tenga el formato correcto.
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    // Aquí puedes agregar más validaciones según lo que necesites.

    return true;
}