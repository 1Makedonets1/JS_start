
function checkAge() {
    const age = +prompt('Введите свой возраст');
    if (Number.isNaN(age)) {
        alert('Некорректный ввод! Введите число!');
    } else if (age > 0 && age < 12) {
        alert('Вы еще ребенок');
    } else if (age > 12 && age < 18) {
        alert('Вы уже подросток');
    } else if (age > 18 && age < 60) {
        alert('Вы достаточно взрослый');
    } else if (age >= 60) {
        alert('Вы уже пенсионер');
    }
}






