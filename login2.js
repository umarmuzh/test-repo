var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value; // Mengambil nilai input bagi nama pengguna.
    var password = document.getElementById("password").value; // Mengambil nilai input bagi kata laluan.

if ( username == "Formget" && password == "formget#123"){
    alert("Login successfully"); // Memaparkan alert "Log masuk berjaya" sekiranya berjaya login.
window.location = "BMI_kira.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

