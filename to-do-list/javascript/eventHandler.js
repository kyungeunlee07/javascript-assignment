document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 8; i++) {
        const section = document.querySelector(`.to-do${i}`);
        registerContentHandler(section);
        deleteContentHandler(section);
        endContentHandler(section);
    }
});

function registerContentHandler(section) {
    const enterButton = section.querySelector('.enter-button');
    const toDoInput = section.querySelector('.to-do-input');

    enterButton.addEventListener('click', function() {
        const toDoText = toDoInput.value.trim();
        if (toDoText !== '') {
            toDoInput.value = toDoText;
            alert('일정이 등록되었습니다.');
        }
    });
}

function deleteContentHandler(section) {
    const deleteButton = section.querySelector('.delete-button');
    const toDoInput = section.querySelector('.to-do-input');

    deleteButton.addEventListener('click', function() {
        toDoInput.value = '';
        toDoInput.style.textDecoration = 'none';
        toDoInput.style.color = 'black';
        alert('일정이 삭제되었습니다.');
    });
}

function endContentHandler(section) {
    const doneButton = section.querySelector('.done-button');
    const toDoInput = section.querySelector('.to-do-input');

    doneButton.addEventListener('click', function() {
        const isCompleted = toDoInput.style.textDecoration === 'line-through';
        toDoInput.style.textDecoration = isCompleted ? 'none' : 'line-through';
        toDoInput.style.color = isCompleted ? 'black' : 'gray';
    });
}