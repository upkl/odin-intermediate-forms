const form = document.querySelector("form");

const pass1 = document.querySelector(".login-field input#password")
const pass2 = document.querySelector(".login-field input#confirm")

const passwordChecker = () => {
    if (pass2.value != pass1.value) {
        pass2.classList.add("invalid");
        pass2.classList.remove("valid");
        console.log("IV", pass2.classList);
    } else {
        pass2.classList.add("valid");
        pass2.classList.remove("invalid");
        console.log("V", pass2.classList);
    };
};

pass2.addEventListener("input", passwordChecker);
pass1.addEventListener("input", passwordChecker);
