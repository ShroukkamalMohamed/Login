// ~================>>>>>Elements=============================
var userName = document.getElementById("userName");
// !=============GetDataFromUrl===============================
const urlParams = new URLSearchParams(window.location.search);
const userNameParam = urlParams.get('userName');
userName.innerHTML = `Wellcom ${userNameParam}`


