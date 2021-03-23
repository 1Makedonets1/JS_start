function polindrom() {
    const number = prompt('Введите пятизначное число');
    if (number.length === 5 && isFinite(number)) {
        if (number[0] == number[4] && number[1] == number[3]) {
            alert('Это число является полиндромом');
    }   else {
            alert("Это число не является полиндромом")
        }
    } else {
    alert('Не корректный ввод! Введите пятизначное число!')
    }
}