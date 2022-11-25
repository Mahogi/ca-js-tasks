// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
const numbers2 = [1.7, 2.5, -2, 6, -5.02, 9, 1.02, 45, -69.77, 77, -12.12, 2.15, 8, -2, -4.0023, 59, 7.77, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrBy2(number) {
    return number = number * 2;
  }

  const numberTimes2 = numbers.map(mulArrBy2);
  console.log({
    numbers,
    result: numberTimes2
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(number) {
    return number = number * number;
  }

  const numberPower2 = numbers.map(powerArrBy2);
  console.log({
    numbers,
    result: numberPower2
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(number, i) {
    return number * i;
  }

  const numberMulIndex = numbers.map(mulArrElementsByIndex);
  console.log({
    numbers,
    result: numberMulIndex
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigiamų elementų masyvą');
console.log('---');
{
  function filterPositives(number) {
    return number >= 0;
  }

  const positiveNumbers = numbers.filter(filterPositives);
  console.log({
    numbers,
    result: positiveNumbers
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(number) {
    return number < 0;
  }

  const negativeNumbers = numbers.filter(filterNegatives);
  console.log({
    numbers,
    result: negativeNumbers
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(number) {
    return number % 2 === 0
  }

  const equalNumbers = numbers.filter(filterEquals);
  console.log({
    numbers,
    result: equalNumbers
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(number) {
    return number % 2 === 1 || number % 2 === -1
  }

  const oddNumbers = numbers.filter(filterOdds);
  console.log({
    numbers,
    result: oddNumbers
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
console.log('---');
{
  function arrAbsoluteValues(number) {
    if (number < 0) { 
      return number * -1 
    } else { 
      return number 
    }
  }

  const allPositive = numbers.map(arrAbsoluteValues)
  console.log({
    numbers,
    result: allPositive
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(number, i) {
    return number ** i
  }

  const powerByIndex = numbers.map(powArrElementsByIndex);
  console.log({
    numbers,
    result: powerByIndex
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(number) {
    return (number > 0) && (number % 2 === 1 || number % 2 === 0)
  }

  const naturalNumbers = numbers.filter(filterNaturals);
  console.log({
    numbers,
    result: naturalNumbers
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(number) {

    let remainder = number % 1;
    let whole = number - remainder;
      
    if (remainder <= -0.5) {
      return whole - 1;
    } else if (remainder >= 0.5) {
      return whole + 1;
    } else {
      return whole;
    }
  }

  console.log({
    numbers2,
    result: numbers2.map(absArrElements)
  });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(_, i) {
    return i % 2 === 0
  }

  console.log({
    numbers,
    result: numbers.filter(filterEverySecond)
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(_, i) {
    return i % 5 === 0
  }
  console.log({
    numbers,
    result: numbers.filter(filterEveryFifth)
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(number, i) {
    console.log(`[${i}] => ${number}`);
  }

  // numbers.map(printArr); veikia ir sitas?
  numbers.forEach(printArr);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(prevValue, number) {
    return prevValue + number;
  }

  console.log({
    numbers,
    result: numbers.reduce(sumArr)
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(numbers) {
    function sumArr(prevValue, number) {
      return (prevValue + number);
    }

    return numbers.reduce(sumArr) / numbers.length;
  }

  console.log({
    numbers,
    result: avgArr(numbers)
  });

}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(prevValue, number) {
    if (prevValue >= number) {
      return prevValue;
    } else {
      return number;
    }
  }

  console.log({
    numbers,
    result: numbers.reduce(arrMax)
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(prevValue, number) {
    if (prevValue <= number) {
      return prevValue;
    } else {
      return number;
    }
  }

  console.log({
    numbers,
    result: numbers.reduce(arrMin)
  });
}
console.log('---');
console.groupEnd()
