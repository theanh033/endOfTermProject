function dangNhap() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginError = document.getElementById("login-error");

    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    var account = accounts.find(function (acc) {
        return acc.username === username && acc.password === password;
    });

    if (account) {
        localStorage.setItem("loggedInUser", account.username);
        window.location.href = "khoahocuser.html";
    } 
    else if (username === "admin" && password === "admin"){
        localStorage.setItem('loggedInUser', username);
        window.location.href = "khoahocadmin.html";
    }
    else {
        loginError.textContent = "Sai tài khoản hoặc mật khẩu!";
    }
}

function dangKy() {
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;
    var registerError = document.getElementById("register-error");

    if (newUsername && newPassword) {
        var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
        var existingAccount = accounts.find(function (acc) {
            return acc.username === newUsername;
        });

        if (existingAccount) {
            registerError.textContent = "Tài khoản đã tồn tại!";
        } else {
            accounts.push({ username: newUsername, password: newPassword });
            localStorage.setItem("accounts", JSON.stringify(accounts));
            alert("Đăng ký thành công!");
            chuyenSangDangNhap();
        }
    } else {
        registerError.textContent = "Vui lòng điền đầy đủ thông tin!";
    }
}

function chuyenSangDangKy() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "block";
    document.getElementById("login-error").textContent = "";
    document.getElementById("register-error").textContent = "";
}

function chuyenSangDangNhap() {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-error").textContent = "";
    document.getElementById("register-error").textContent = "";
}