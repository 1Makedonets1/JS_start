function year() {
  const year = +prompt("Введите год");
  if (year % 400 && year % 4 && year % 100) {
    alert("Это не высокостный год");
  } else {
    alert("Это высокостный год");
  }
}
