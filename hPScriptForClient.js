var loggedInUser = localStorage.getItem('loggedInUser');
var usernameElement = document.getElementById('username');
var logoutButton = document.querySelector('.logout');

if (loggedInUser) {
    usernameElement.textContent = loggedInUser;
}

logoutButton.addEventListener('click', function() {
  // Xóa giá trị của biến loggedInUser trong Local Storage
  localStorage.removeItem('loggedInUser');
  // Chuyển hướng người dùng về trang đăng nhập
  window.location.href = 'Index.html';
});


var addQuestionBtn = document.getElementById('tao-cau-hoi-css');

addQuestionBtn.addEventListener('click', function() {
  if (loggedInUser === "admin") {
    window.location.href = "addQuestionByAdmin.html";
  } else {
    window.location.href = "addQuestionByClient.html";
  }
});
