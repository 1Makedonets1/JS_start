function exchange() {
  let resultExcheng = prompt(
    "Введите сумму в USD которую требуется конвертировать"
  );
  let currency = prompt(
    "Выберите валюту в которую хотите конвертировать вашу сумму, где 1 = EUR; 2 = UAN; 3 = AZN"
  );
  if (isFinite(resultExcheng) && (currency.length == 1 && isFinite(currency))) {
    if (currency == 1) {
    resultExcheng *= 0.84;
  } else if (currency == 2) {
    resultExcheng *= 6.51;
  } else if (currency == 3) {
    resultExcheng *= 1.7;
  }
  alert(resultExcheng);
  } else {
    alert('Не корректный ввод! Будьте внимательней!')
  }
}

