const loginButton = document.querySelector(".login__button");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid = true;
    const [email, username, alamat, no_telpon, password, confirm_password] =
        form.elements;

    const [
        emailError,
        usernameError,
        alamatError,
        no_telponError,
        passwordError,
        confirm_passwordError,
    ] = document.querySelectorAll(".login__input__error p");

    // email
    if (email.value === "") {
        emailError.textContent = "Email is required";
        emailError.parentElement.hidden = false;
        isValid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
        emailError.textContent = "Email is invalid";
        emailError.parentElement.hidden = false;
        isValid = false;
    } else {
        emailError.parentElement.hidden = true;
    }

    if (username.value === "") {
        usernameError.textContent = "Username is required";
        usernameError.parentElement.hidden = false;
        isValid = false;
    } else {
        usernameError.parentElement.hidden = true;
    }

    if (alamat.value === "") {
        alamatError.textContent = "Alamat is required";
        alamatError.parentElement.hidden = false;
        isValid = false;
    } else {
        alamatError.parentElement.hidden = true;
    }

    if (no_telpon.value === "") {
        no_telponError.textContent = "No Telpon is required";
        no_telponError.parentElement.hidden = false;
        isValid = false;
    } else {
        no_telponError.parentElement.hidden = true;
    }

    // check password validity, uppercase, lowercase, number, special character
    if (password.value != "") {
        if (password.value.length < 8) {
            passwordError.textContent = "Password is too short";
            passwordError.parentElement.hidden = false;
            isValid = false;
        } else if (!password.value.match(/[A-Z]/g)) {
            passwordError.textContent =
                "Password must contain at least 1 uppercase letter";
            passwordError.parentElement.hidden = false;
            isValid = false;
        } else if (!password.value.match(/[a-z]/g)) {
            passwordError.textContent =
                "Password must contain at least 1 lowercase letter";
            passwordError.parentElement.hidden = false;
            isValid = false;
        } else if (!password.value.match(/[0-9]/g)) {
            passwordError.textContent =
                "Password must contain at least 1 number";
            passwordError.parentElement.hidden = false;
            isValid = false;
        } else {
            passwordError.parentElement.hidden = true;
        }
    } else {
        passwordError.textContent = "Password is required";
        passwordError.parentElement.hidden = false;
        isValid = false;
    }

    // check same password with confirm password
    if (confirm_password.value != "") {
        if (confirm_password.value != password.value) {
            confirm_passwordError.textContent = "Password does not match";
            confirm_passwordError.parentElement.hidden = false;
            isValid = false;
        } else {
            confirm_passwordError.parentElement.hidden = true;
        }
    } else {
        confirm_passwordError.textContent = "Confirm Password is required";
        confirm_passwordError.parentElement.hidden = false;
        isValid = false;
    }

    if (isValid) {
        form.submit();
        window.location.href = "./../../public/index.html";
    }
});
