// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
const numbers2 = [1, 2.5, -2, 6, -5, 9, 1.02, 45, -69.77, 77, -12, 2.15, 8, -2, -4.0023, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrBy2(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
      result[i] = arr[i] * 2;
    }
    return result;
  }
  console.log({
    numbers,
    result: mulArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
      result[i] = arr[i] * arr[i];
    }
    return result;
  }
  console.log({
    numbers,
    result: powerArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
      result[i] = arr[i] * i;
    }
    return result;
  }
  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigiamų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] >= 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log({
    numbers,
    result: filterPositives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] < 0) {
          result.push(arr[i]);
        }
    }
    return result;
  }
  console.log({
    numbers,
    result: filterNegatives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log({
    numbers,
    result: filterEquals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
      if ((arr[i] % 2 === 1) || (arr[i] % 2 === -1)) {
        //skaiciai po kablelio yra nei lyginiai nei nelyginiai, tad jie atmetami
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log({
    numbers,
    result: filterOdds(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] < 0) {
        result[i] = arr[i] * -1;
      } else {
        result[i] = arr[i];
      }
    }
    return result;
  }

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
      
      if (i == 0) {
        result[i] = 0;
      } else {
        let j = 1;
        result[i] = arr[i];
        while (j < i){
          result[i] = result[i] * arr[i];
          j += 1;
        }
      }

      // result[i] = arr[i] * -1;
    }
    return result;
  }
  console.log({
    numbers,
    result: powArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
      // Jei neneigiamas skaicius dalijasi is 2 su nulio liekana, arba 0.5 reiskia jis naturalus
      if ((arr[i] > 0) && ((arr[i] % 2 === 1) || (arr[i] % 2 === 0))){
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log({
    numbers,
    result: filterNaturals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % 1 === 0) {
        result[i] =  arr[i];
      } else {
        // I am sorry in advance
        let likutis = arr[i];
        if (likutis > 0) {
          while ((likutis-1) > 0) {
            likutis -= 1;
          }
        } else {
          while ((likutis+1) < 0) {
            likutis += 1;
          }
        }

        result[i] = arr[i] - likutis; 
      }
      
    }
    return result;
  }
  console.log({
    numbers2,
    result: absArrElements(numbers2)
  });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
      }
    return result;
    }

  console.log({
    numbers,
    result: filterEverySecond(numbers)
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i += 5) {
        result.push(arr[i]);
      }
    return result;
  }
  console.log({
    numbers,
    result: filterEveryFifth(numbers)
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      console.log("[" + i + "] => " + arr[i]);
    }
  }
  printArr(numbers);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i += 1) {
      suma += arr[i];
    }
    return suma;
  }

  console.log({
    numbers,
    result: sumArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i += 1) {
      suma += arr[i];
    }
    return suma / arr.length;
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
  function arrMax(arr) {
    let didziausias = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] > didziausias) {
        didziausias = arr[i];
      }
    }
    return didziausias;
  }

  console.log({
    numbers,
    result: arrMax(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(arr) {
    let maziausias = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] < maziausias) {
        maziausias = arr[i];
      }
    }
    return maziausias;
  }

  console.log({
    numbers,
    result: arrMin(numbers)
  });
}
console.log('---');
console.groupEnd();
