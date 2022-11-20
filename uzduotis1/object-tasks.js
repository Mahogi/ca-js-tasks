console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  const drinks1 = [
    {name: 'lemonade', price: 90}, 
    {name: 'lime', price: 432}, 
    {name: 'peach', price: 23}
  ];

  function sortDrinkByPrice(drinks) {
    drinks.sort((a, b) => (a.price > b.price) ? 1 : -1);
    return drinks;
  }
  ats = sortDrinkByPrice(drinks1);
  console.log(ats);
  
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  function addName(obj, name, value) {
    function objectify (name, value) {
      return {
        [name]: value
      }
    }
    newObj = objectify (name, value);

    return Object.assign(obj, newObj)
  }

  console.log(addName({}, "Brutus", 300));
  console.log(addName({ piano: 500 }, "Brutus", 400));
  console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));

}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
  function generation(x, y) {
    const title = {
      "-3": 'great grand',
      "-2": 'grand',
      "-1": '',
      "0": 'me!',
      "1": '',
      "2": 'grand',
      "3": 'great grand',
    };
    ats = title[x];
    if ((y === 'm') && (x > 0)) {
      return ats += 'son';
    }
    else if ((y === 'm') && (x < 0)) {
      return ats += 'father';
    }

    if ((y === 'f') && (x > 0)) {
      return ats += 'daughter';
    }
    else if ((y === 'f') && (x < 0)){
      return ats += 'mother';
    }

    return ats;
  }

  console.log(generation(2, "f"));
  console.log(generation(-3, 'm'));
  console.log(generation(1, "f"));
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
  hand1 = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ];
  hand2 = [
    { tile: "B", score: 2 },
    { tile: "V", score: 4 },
    { tile: "F", score: 4 },
    { tile: "U", score: 1 },
    { tile: "D", score: 2 },
    { tile: "O", score: 1 },
    { tile: "U", score: 1 }
  ]

  // Cia mano sprendimas, neziurejau i destytojo
  function maximumScore(tileHand) {
    let sum = 0;
    for (let i = 0; i < tileHand.length; i+= 1) {
      sum += tileHand[i].score;
    }

    return sum;
  }

  console.log(maximumScore(hand1));
  console.log(maximumScore(hand2));
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  function calculateDifference(obj, limit) {
    money = Object.values(obj);
    sum = 0;
    for (let i = 0; i < money.length; i +=1) {
      sum += money[i];
    }

    return sum - limit;
  }
  console.log(calculateDifference({ "baseball bat": 20 }, 5));
  console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
  console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
  function toArray(obj) {
    const result = [];
    let i = 0;
    for (const key in obj) {
      result[i] = [key, obj[key]];
      i += 1;
    }
  
    return result;
  }
  
  const arr1 = toArray({ a: 1, b: 2, c: 6 });
  const arr2 = toArray({ shrimp: 15, tots: 122});
  
  console.log(arr1);
  console.log(arr2);
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
  function inkLevels(inks) {
    lowestInk = Object.values(inks)[0];
    // console.log(lowestInk);
    for (const key in inks) {
      if (inks[key] < lowestInk) {
        lowestInk = inks[key];
      }
    }

    return lowestInk;
    /* ALTERNATIVE SOLUTION
    return Math.min(...Object.values(inks)); */
  }

  console.log(inkLevels({
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
  }));
  console.log(inkLevels({
    "cyan": 432,
    "magenta": 543,
    "yellow": 777
  }));
  console.log(inkLevels({
    "cyan": 700,
    "magenta": 700,
    "yellow": 0
  }));
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
  const stolenItems1 = {
    tv: 30,
    skate: 20,
    stereo: 50,
  };
  const stolenItems2 = {
    painting: 20000,
  };
  const stolenItems3 = {};

  function calculateLosses(obj) {
    lossesSum = 0;
    for (const item in obj) {
      lossesSum += obj[item];
    }
    if (lossesSum > 0) {
      return lossesSum;
    } else {
      return "Lucky you!";
    }
  }

  console.log(calculateLosses(stolenItems1));
  console.log(calculateLosses(stolenItems2));
  console.log(calculateLosses(stolenItems3));
}
console.groupEnd();
