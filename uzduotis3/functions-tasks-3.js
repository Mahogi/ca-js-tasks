

console.group("11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių");
{
  function isEvenNumberOfLetters(str) {
    if (str.length % 2 === 0) return true;
    else return false;
  }
  console.log('---');
  console.log({
    'labas': isEvenNumberOfLetters('labas'),
    'kempės': isEvenNumberOfLetters('kempės'),
    '123123': isEvenNumberOfLetters('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
  const vowels = ['a', 'A', 'ą', 'Ą', 'e', 'E', 'ę', 'Ę', 'ė', 'Ė', 'i', 'I', 'į', 'Į', 'y', 'Y', 'o', 'O', 'u', 'U', 'ų', 'Ų', 'ū', 'Ū']; 

  function getNumberOfVowels(str) {
    let totalNumberofVowels = 0;
    for (i in str) {
      if (vowels.includes(str[i])) {
        totalNumberofVowels += 1;
      }
    }
    return totalNumberofVowels;
  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfVowels('aaaaa'),
    'sasasasa': getNumberOfVowels('sasasasa'),
    'aeyuioąčė': getNumberOfVowels('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
  const vowels = ['a', 'A', 'ą', 'Ą', 'e', 'E', 'ę', 'Ę', 'ė', 'Ė', 'i', 'I', 'į', 'Į', 'y', 'Y', 'o', 'O', 'u', 'U', 'ų', 'Ų', 'ū', 'Ū'];

  function getNumberOfConsonants(str) {
    let totalNumberofConsonants = 0;
    for (i in str) {
      let isConsonant = !(vowels.includes(str[i])) ? true : false;
      if (isConsonant) {
        totalNumberofConsonants += 1;
      }
    }
    return totalNumberofConsonants;
  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfConsonants('aaaaa'),
    'sasasasa': getNumberOfConsonants('sasasasa'),
    'aeyuioąčė': getNumberOfConsonants('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaitmenų");
{

  function isOnlyLetters(str) {
    for (i in str) {
      //elementas yra dalijamas is 1 kad, jeigu yra skaicius, jo tipas taptu number
      //tada tikrinama ar elementas yra skaicius, kuriuo atveju ciklas nutraukiamas
      if (!(isNaN(str[i]/1))) {
         return false;
      }   
    }
     return true;
  }

  console.log('---');
  console.log({
    'labas': isOnlyLetters('labas'),
    'kempės': isOnlyLetters('kempės'),
    '123123': isOnlyLetters('123123'),
    'hello2hello': isOnlyLetters('hello2hello'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
  function letterACount(str) {
    let letterA = 0;
    for (i in str) {
      if (str[i].includes('a')) {
        letterA += 1;
      }
    }
    return letterA;
  }
  console.log('---');
  console.log({
    'labas': letterACount('labas'),
    'kempės': letterACount('kempės'),
    '123123': letterACount('123123'),
    'kebabas': letterACount('kebabas'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje");
{
  function letterCount(str, searchLetter) {
    let answer = 0;
    for (i in str) {
      if (str[i].includes(searchLetter)) {
        answer += 1;
      }
    }
    return answer;
  }
  console.log('---');
  console.log({
    'labas, a': letterCount('labas', 'a'),
    'kempės, k': letterCount('kempės', 'k'),
    '123123, z': letterCount('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
{
  function indexOfLetterA(str) {
    // if (str.indexOf("a") < 0) return "Nera";
    return str.indexOf("a");
  }
  console.log('---');
  console.log({
    'labas': indexOfLetterA('labas'),
    'kempės': indexOfLetterA('kempės'),
    '123123': indexOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje");
{
  function indexOfLetter(str, searchLetter) {
    // if (str.indexOf(searchLetter) < 0) return "Nera";
    return str.indexOf(searchLetter);
  }
  console.log('---');
  console.log({
    'labas, a': indexOfLetter('labas', 'a'),
    'kempės, k': indexOfLetter('kempės', 'k'),
    '123123, z': indexOfLetter('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje");
{
  function indexesOfLetterA(str) {
    const aIndexArray = [];
    let indexOfA = str.indexOf("a");

    while (true) {
      if (indexOfA < 0) break;
      aIndexArray.push(str.indexOf("a", indexOfA))
      indexOfA = str.indexOf("a", indexOfA+1); // 0
    }

    return aIndexArray;
  }
  console.log('---');
  console.log({
    'labas': indexesOfLetterA('labas'),
    'kempės': indexesOfLetterA('kempės'),
    '123123': indexesOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje");
{

  const letterEVariations = 'eęė';
  const letterAVariations = 'aą';
  const letterIVariations = 'iį';
  const letterUVariations = 'uūų';

  const additionalLTChecks = {
    a: letterAVariations,
    ą: letterAVariations,
    i: letterIVariations,
    į: letterIVariations,
    e: letterEVariations,
    ę: letterEVariations,
    ė: letterEVariations,
    u: letterUVariations,
    ų: letterUVariations,
    ū: letterUVariations
  }

  function indexesOfLetter(str, searchLetter) {
    const search = additionalLTChecks[searchLetter] ?? searchLetter;
    const letterRegex = new RegExp(search);
    const foundResults = str.search(letterRegex);
    console.log(foundResults);
    // code ...
  }
  console.log('---');
  console.log({
    'labas, a': indexesOfLetter('labas', 'a'),
    'kempės, m': indexesOfLetter('kempės', 'm'),
    '123123, 2': indexesOfLetter('123123', '2'),
  })
  console.log('---');
}
console.groupEnd();
console.log();