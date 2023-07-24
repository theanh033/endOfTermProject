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
  window.location.href = 'signForm.html';
});

function BackHomeUser(){
    window.location.href = "homePageForClient.html"
}

function addOption() {
    var optionsContainer = document.getElementById('options-container');
    var optionIndex = optionsContainer.getElementsByClassName('option').length;

    var optionDiv = document.createElement('div');
    optionDiv.classList.add('option');

    var checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.name = 'correct-option';

    var textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.name = 'option-text';
    textInput.placeholder = 'Đáp án ' + (optionIndex + 1);

    optionDiv.appendChild(checkboxInput);
    optionDiv.appendChild(textInput);

    optionsContainer.appendChild(optionDiv);
}

document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var question = document.getElementById('question').value;
    var questionType = document.getElementById('question-type').value;
    var optionsContainer = document.getElementById('options-container');
    var options = optionsContainer.getElementsByClassName('option');

    var optionList = Array.from(options).map(function(option) {
        var checkboxInput = option.querySelector('input[type="checkbox"]');
        var textInput = option.querySelector('input[type="text"]');

        return {
            text: textInput.value.trim(),
            correct: checkboxInput.checked
        };
    });

    var questionTable = document.getElementById('question-list');
    var newRow = questionTable.insertRow();

    newRow.innerHTML = `
        <td>${question}</td>
        <td>${questionType === 'single' ? 'Một đáp án' : 'Nhiều đáp án'}</td>
        <td>${optionList.length}</td>
        <td>${optionList
            .filter(function(option) {
                return option.correct;
            })
            .map(function(option) {
                return option.text;
            })
            .join(', ')}</td>
        <td>${loggedInUser}</td>
    `;

    document.getElementById('question').value = '';
    document.getElementById('question-type').value = 'single';
    optionsContainer.innerHTML = '';

    // Lưu danh sách câu hỏi vào Local Storage
    var questions = [];
    for (var i = 0; i < questionTable.rows.length; i++) {
        var questionRow = questionTable.rows[i];
        var question = {
            question: questionRow.cells[0].textContent,
            questionType: questionRow.cells[1].textContent === 'Một đáp án' ? 'single' : 'multiple',
            options: [],
            correctAnswers: questionRow.cells[3].textContent.split(', '),
            user: questionRow.cells[4].textContent
        };

        for (var j = 4; j < questionRow.cells.length - 1; j++) {
            question.options.push(questionRow.cells[j].textContent);
        }

        questions.push(question);
    }

    localStorage.setItem('questions', JSON.stringify(questions));
});

// Kiểm tra xem đã có danh sách câu hỏi trong Local Storage chưa
var storedQuestions = localStorage.getItem('questions');
if (storedQuestions) {
    var questions = JSON.parse(storedQuestions);
    var questionTable = document.getElementById('question-list');

    questions.forEach(function(question) {
        var newRow = questionTable.insertRow();
        newRow.innerHTML = `
            <td>${question.question}</td>
            <td>${question.questionType === 'single' ? 'Một đáp án' : 'Nhiều đáp án'}</td>
            <td>${question.options.length}</td>
            <td>${question.correctAnswers.join(', ')}</td>
            <td>${question.user}</td>
        `;
        for (var i = 0; i < question.options.length; i++) {
            var cell = newRow.insertCell();
            cell.textContent = question.options[i];
        }
    });
}

