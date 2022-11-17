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
  ats = addName({ piano: 500, stereo: 300 }, "Caligula", 440);
  console.log(ats);

}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{

}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{

}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{

}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{

}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{

}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{

}
console.groupEnd();
