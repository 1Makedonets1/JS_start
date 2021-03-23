function test() {
    let frstQuestion = +prompt('Выберите вариант ответа на вопрос сколько дней в неделе? Варианты: 1 - 6 дней; 2 - 9 дней; 3 - 7 дней');
    if (frstQuestion == 3) {
        frstQuestion = 2;
    } else {
        frstQuestion = 0;
    }

    let secndQuestion = +prompt('Выберите вариант ответа на вопрос: как вы думаете что такое снег? Варианты: 1 - космическая пыль; 2 - кристалы льда; 3 - кокосовая стружка');
    if (secndQuestion == 2) {
        secndQuestion = 2;
    } else {
        secndQuestion = 0;
    }

    let threeQuestion = +prompt('Выберите вариант ответа на вопрос: существует ли Бог ? Варианты: 1 - да; 2 - нет; 3 - Бог его знает');
    if (threeQuestion == 3) {
        threeQuestion = 2;
    } else {
        threeQuestion = 0;
    }
    resultTest = frstQuestion + secndQuestion + threeQuestion;
    alert('Выш результат ' + resultTest + ' из 6 балов')
}