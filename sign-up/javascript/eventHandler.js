function validation() {
    const submitButton = document.querySelector('.submit-button');

    submitButton.addEventListener('click', function() {
        if (!isDuplicatedIdChecked()) {
            alert('아이디 중복체크 여부를 확인해 주세요.');
            return false;
        } else if (!isBlank()) {
            alert('내용을 빠짐없이 입력해 주세요.');
            return false;
        } else if (!isValidId() || !isValidPassword()) {
            alert('입력한 내용을 확인해 주세요.');
            return false;
        } else {
            registerMember();
            return true;
        }
    });
}

function registerMember() {
    var idInput = document.querySelector('id-input');
    var userArr = ['abcd123', 'hi123', 'hi1234', '54321hi', '2130koo', 'kk7890'];

    userArr.push(idInput);
    alert('회원가입이 완료되었습니다!');
    console.log(userArr);
}

function isDuplicatedIdChecked() {
    isChecked = false;

    var idInput = document.querySelector('.id-input');
    var id = idInput.value.trim();
    var userArr = ['abcd123!', 'hi123*', 'hi1234?', '54321hi!!', '2130koo^', 'kk7890!'];

    if (!isValidId()) {
        idInput.style.color = 'red';
        return false;
    } else if (userArr.includes(id)) {
        alert('이미 사용 중인 ID입니다.');
        idInput.style.color = 'red';
        return false;
    } else {
        alert('사용 가능한 ID입니다.');
        idInput.style.color = 'green';
        return true;
    }
}

function isBlank() {
    var idInput = document.querySelector('.id-input');
    var pwInput = document.querySelector('.pw-input');

    if(idInput.value.length == 0) {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
        document.idInput.focus();
        return false;
    }
    else if(pwInput.value == "") {
        alert("비밀번호를 입력해주세요.");
        document.pwInput.focus();
        return false;
    }
    else {
        return true;
    }
}

function isValidId() {
    const idInput = document.querySelector('.id-input');
    var id = idInput.value.trim();

    var idRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_])/;
    var koreanRegex = /[가-힣]/;

    if (idRegex.test(id) && !koreanRegex.test(id)) {
        return true;
    } else {
        if (!idRegex.test(id)) {
            alert('아이디는 영문자와 숫자, 특수문자를 반드시 포함해야 합니다.');
            return false;
        } else if (koreanRegex.test(id)) {
            alert('아이디에는 한국어를 포함할 수 없습니다.');
            return false;
        }
        return false;
    }
}

function isValidPassword() {
    const inputPassword = document.querySelector('.pw-input').value;
    
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

    if (passwordRegex.test(inputPassword) == true) 
        return true;
    else {
        alert('비밀번호는 최소 8자에서 16자까지, 영문자와 특수 문자를 반드시 포함되어야 합니다.');
		inputPassword.style.color = 'red';
    }
}
