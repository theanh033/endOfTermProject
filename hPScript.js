const loginForm = document.getElementById("login-form");
loginForm.onclick = function() {
  window.location.href = "signForm.html"
}

var loggedInUser = localStorage.getItem('loggedInUser');
var addQuestionBtn = document.getElementById('tao-cau-hoi-css');

addQuestionBtn.addEventListener('click', function() {
  alert("You need to login first");
  window.location.href = "signForm.html";
});
