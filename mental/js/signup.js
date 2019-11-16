// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var passwordPairs = {
  "sarahford": "password",
  "sford85": "password2"
}

function check(form) {
  if (passwordPairs[form.userid.value] === form.pswrd.value)
  { 
    window.open('target.html');
    alert("success");
    return false;
  }
}