var login = document.getElementById("login");
        login.onclick = function() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username == "admin" && password == "1") {
                // alert("Đăng nhập thành công");
                window.location = "homePage.html";
            } else {
                alert("Sai thông tin đăng nhập");
            }
        }

            // function register() {
            // alert("Chưa Đăng ký được!");
            // }

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});