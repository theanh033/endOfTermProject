var input_username = document.getElementById("new-username");
var input_email = document.getElementById("new-email");
var input_password = document.getElementById("new-password");

document.getElementById("form-register").addEventListener('submit', function(e) {
    event.preventDefault();
    var username = input_username.value;
    var email = input_email.value;
    var password = input_password.value;

    if (username != 0 && password != 0) {
        var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
        var existingAccount = accounts.find(function (acc) {
            return acc.email === email;
        });

        var usedUsername = accounts.find(function(acc){
            return acc.username == username;
        });

        if (existingAccount) {
            alert("Tài khoản đã tồn tại!");
            // registerError.textContent = "Tài khoản đã tồn tại!";
        } else if (usedUsername) {
            alert("Tên đã được sử dụng");
        } else {
            accounts.push({ username: username, email: email, password: password });
            localStorage.setItem("accounts", JSON.stringify(accounts));
            container.classList.remove('right-panel-active');
        }
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
        // registerError.textContent = "Vui lòng điền đầy đủ thông tin!";
    }
});

document.getElementById("form-login").addEventListener('submit', function(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = input_email.value;
    var password = document.getElementById("password").value;

    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    var account = accounts.find(function (acc) {
        return username === acc.username && password === acc.password;
    });

    if (account) {
        localStorage.setItem("loggedInUser", account.username);
        window.location.href = "homePageForClient.html";
    } 
    else if (username === "admin" && password === "admin"){
        localStorage.setItem('loggedInUser', username);
        window.location.href = "homePageForAdmin.html";
    }
    else {
        alert("Tài khoản hoặc mật khẩu không hợp lệ!");
        // loginError.textContent = "Tài khoản hoặc mật khẩu không hợp lệ!";
    }
});


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});