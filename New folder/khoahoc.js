// Lấy thông tin đăng nhập từ Local Storage
var loggedInUser = localStorage.getItem('loggedInUser');
var usernameElement = document.getElementById('username');
var logoutButton = document.querySelector('.logout-button');

if (loggedInUser) {
    usernameElement.textContent = loggedInUser;
}

// Xử lý sự kiện click của nút đăng xuất
logoutButton.addEventListener('click', function() {
    // Xóa giá trị của biến loggedInUser trong Local Storage
    localStorage.removeItem('loggedInUser');
    // Chuyển hướng người dùng về trang đăng nhập
    window.location.href = 'dangnhap.html';
});