// ?==================>>>Elements<<<<<<<<<<<<===========================
var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var SignupPassword = document.getElementById("sigunPassword");
var loginPassword = document.getElementById("loginPassword");
var loginEmail = document.getElementById("loginPassword");
var signupbtn = document.getElementById("signupbtn");
var loginbtn = document.getElementById("loginbtn");
console.log(loginbtn);
// ~===================>>>>>Variables<<<<<<<============================
var userData = [];
// ^===================>>>>>Functions<<<<<<<============================
function setLocalStorage() {
    localStorage.setItem("userData", JSON.stringify(userData))
}
function getLocalStorage() {
    data = JSON.parse(localStorage.getItem("userData"));
    console.log(data);
}
function emailValidation() {
    var regex = /^([a-z])+@[a-z]+\.com$/
    return regex.test(signupEmail.value);
}
// *======================>>>Events=====================================
signupbtn.addEventListener("click", function () {
    if (!emailValidation()) {
        userData.push({ userName: signupName.value, email: signupEmail.value, password: SignupPassword.value })
        setLocalStorage();
    }

});
loginbtn.addEventListener("click", function () {
    getLocalStorage();

})
signupEmail.addEventListener("input", function () {
    if (emailValidation()) {
        signupEmail.classList.remove("is-invalid");
        signupEmail.classList.add("is-valid");

    }
    else {
        signupEmail.classList.remove("is-valid");
        signupEmail.classList.add("is-invalid");
    }
})