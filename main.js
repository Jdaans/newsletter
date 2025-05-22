const emailLabel = document.getElementById('email-label');
const emailInput = document.getElementById('email-input');
const emailError = document.getElementById('email-error');

function validateEmail () {

    if (!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      emailError.innerHTML = "valid email required";
      return false;
    }
       emailError.innerHTML = "";
       return true;


}