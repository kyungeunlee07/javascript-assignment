function blankCheck() {
    if(document.id-container.id-input.value.length == 0) {
        alert("아이디를 입력해주세요.");
        document.id-container.id-input.focus();
        return false;
    }
    else if(document.pw-contaienr.pw-input.value == "") {
        alert("비밀번호를 입력해주세요.");
        document.id-container.id-input.focus();
        return false;
    }
    else {
        return true;
    }
}


function validPassword() {
    const inputPassword = document.querySelector('.pw-input');

    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*?_]).{8,16}$/;

    if (passwordRegex.test(inputPassword) == true) 
        return true;
    else {
        alert('비밀번호는 최소 8자에서 16자까지, 영문자와 특수 문자를 포함해야 합니다.');
		inputPassword.style.color = 'red';
    }
}
