let circle = +prompt('Введите длинну окружности');
let square = +prompt('Введите периметр квадрата');
if (Number.isNaN(circle)) alert('Не верноо введена длина окружности! Введите число!');
else if (Number.isNaN(square)) alert('Не верно введен периметр квадрата! Введите число!');
else if (circle <= (square / 4)) alert('Окружность вписывается в квадрат');
else alert('Окружность слишком велика для этого квадрата')