function threeDigit() {
    const number = prompt('Введите трехзначное число');
    if (number.length === 3 && isFinite(number)) {
      if (number[0] === number[1] || number[1] === number[2] || number[2] === number[0]) {
        alert('В этом числе есть совпадающие цифры');
      } else {
        alert('Совпадающих цифр в этом числе не найдено');
      }
    }
    else {
      alert ('Не корректный ввод!')
    }
  }