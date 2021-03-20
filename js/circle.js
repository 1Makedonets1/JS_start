function circle() {
  const circle = +prompt("Введите длинну окружности");
  const square = +prompt("Введите периметр квадрата");
  if (Number.isNaN(circle))
    alert("Не коректно введена длина окружности! Введите число!");
  else if (Number.isNaN(square))
    alert("Не коректно введен периметр квадрата! Введите число!");
  else if (circle <= square / 4) alert("Окружность вписывается в квадрат");
  else alert("Окружность слишком велика для этого квадрата");
}
