function discount() {
    let summa = +prompt('Введите сумму покупки');
    if (Number.isNaN(summa)){
    alert("Не коректный ввод! Введите число!");
    } else {
        if (summa > 0 && summa <= 300) {
        summa = summa - (summa * 3 / 100);
        } else if(summa > 300 && summa <= 500) {
        summa = summa - (summa * 5 / 100);
        } else if(summa > 500) {
        summa = summa - (summa * 7 / 100);
    }
    alert('Cумма покупки co скидкой = ' + summa);
    }
}
