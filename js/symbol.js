function symbol() {
  const number = +prompt("Введите цифру от 0 до 9");
  let message = '';
  switch (number) {
    case 1:
      message = '!';
      break;
    case 2:
      message = '@';
      break;
    case 3:
      message = '#';
      break;
    case 4:
      message = '$';
      break;
    case 5:
      message = '%';
      break;
    case 6:
      message = '^';
      break;
    case 7:
      message = '&';
      break;
    case 8:
      message = '*';
      break;
    case 9:
      message = '(';
      break;
    case 0:
      message = ')';
      break;
    default:
      message = `Нет такого символа введите число от 0 до 9`;
  }
  alert(`это цифра имеет символ:  ${message}`);
}
