let number = +prompt('Введите число от 0 до 9');
    switch (number) {
        case 0: {
            alert('это число имеет символ: ")"')
        }
        case 1: {
            alert('это число имеет символ: "!"');
            break;
        }
        case 2: {
             alert('это число имеет символ: "@"');
             break;
         }
        case 3: {
            alert('это число имеет символ: "#"');
            break;
        }
        case 4: {
             alert('это число имеет символ: "$"');
             break;
         }
        case 5: {
            alert('это число имеет символ: "%"');
            break;
        }
        case 6: {
            alert('это число имеет символ: "^"');
            break;
        }
        case 7: {
            alert('это число имеет символ: "&"');
            break;
        }
        case 8: {
            alert('это число имеет символ: "*"');
            break;
        }
        case 9: {
            alert('это число имеет символ: "("');
            break;
        }
        default: {
            alert('Нет такого символа введите число от 0 до 9');
        }
    }