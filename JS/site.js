// ?==================>>>Elements<<<<<<<<<<<<===========================
var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var SignupPassword = document.getElementById("sigunPassword");
var loginPassword = document.getElementById("loginPassword");
var loginEmail = document.getElementById("loginEmail");
var signupbtn = document.getElementById("signupbtn");
var loginbtn = document.getElementById("loginbtn");
var warningNotify = document.getElementById("warningNotify");
var successNotify = document.getElementById("successNotify");
// ~===================>>>>>Variables<<<<<<<============================
var userData = [];

// ^===================>>>>>Functions<<<<<<<============================
function setLocalStorage() {
    localStorage.setItem("userData", JSON.stringify(userData))
}
function getLocalStorage() {
    return JSON.parse(localStorage.getItem("userData"));
}
function emailValidation() {
    var regex = /^([A-Z]|[a-z]){1,}@([A-Z]|[a-z]){1,}\.com$/
    return regex.test(signupEmail.value);
}
function inputValidations() {
    //to check each input is full 
    if (signupName.value == "") {
        alterMassage(warningNotify, "Please Enter Your Name");
        return false;
    }
    else if (signupEmail.value == "") {
        alterMassage(warningNotify, "Please Enter Your Email");
        return false;
    }
    else if (SignupPassword.value == "") {
        alterMassage(warningNotify, "Please Enter Password");
        return false;
    }
    else {
        removeNotification();
        return true;
    }
}
function checkLoginInputs() {
    if (loginEmail.value == "") {
        alterMassage(warningNotify, "Please Enter Your Email");
        return false;
    }
    else if (loginPassword.value == "") {
        alterMassage(warningNotify, "Please Enter Password");
        return false;
    }
    else {
        removeNotification();
        return true;
    }
}
function clearInputs() {
    signupName.value = "";
    signupEmail.value = "";
    SignupPassword.value = "";
    loginEmail.value = "";
    loginPassword.value = "";

}
// !=======================>>>Notifications===============================
function alterMassage(element, massage) {
    element.innerHTML = massage
    element.classList.remove("d-none");
    element.classList.add("d-flex");
}
function removeNotification() {
    warningNotify.classList.remove("d-flex");
    warningNotify.classList.add("d-none");
    successNotify.classList.remove("d-flex");
    successNotify.classList.add("d-none");
}
// *======================>>>Events=====================================
signupbtn.addEventListener("click", function () {
    if (inputValidations() && emailValidation()) {
        userData.push({ userName: signupName.value, email: signupEmail.value, password: SignupPassword.value })
        setLocalStorage();
        clearInputs();
        alterMassage(successNotify, "Sign Up Succesfully");
    }
});
loginbtn.addEventListener("click", function () {
    var data = getLocalStorage();

    console.log(data);
    if (data == null) {
        return alterMassage(warningNotify, "Please Signup frist")
    }
    if (checkLoginInputs()) {

        var checkIFUserExist = data.find(e => e.email == loginEmail.value);
        console.log(checkIFUserExist);
        if (!checkIFUserExist) {
            alterMassage(warningNotify, "There Are No User With This Email")
        }
        else {
            removeNotification();
            if (checkIFUserExist.password == loginPassword.value) {
                var path = `/Pages/wellcomePage.html?userName=${checkIFUserExist.userName}`
                window.location.href = 'http://' + window.location.host + path;;
                clearInputs();
                alterMassage(successNotify, "log In Succesfully");

            }
            else {
                alterMassage(warningNotify, "Wrong Password");
            }

        }
    }
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