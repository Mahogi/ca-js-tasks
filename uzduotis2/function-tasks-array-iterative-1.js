const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];

// for (const key in people) {
//   if (inks[key] < lowestInk) {
//     lowestInk = inks[key];
//   }
// }

// for (const key in obj) {
//   result[i] = [key, obj[key]];
//   i += 1;
// }

console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  function printPeopleInLines (person) {
    // for (let i = 0; i < people.length; i+= 1) {
      // console.log(people[i].name + " " + people[i].surname + " " + people[i].sex + " " + people[i].age + " " + people[i].income + " " + people[i].married +  + " " + people[i].hasCar);

      // let personKeys = Object.keys(people[i]);
      // console.log(personKeys[0] + ": " + people[i].name + ", " +
      //             personKeys[1] + ": " + people[i].surname + ", " +
      //             personKeys[2] + ": " + people[i].sex + ", " +
      //             personKeys[3] + ": " + people[i].age + ", " +
      //             personKeys[4] + ": " + people[i].income + ", " +
      //             personKeys[5] + ": " + people[i].married + ", " +
      //             personKeys[6] + ": " + people[i].hasCar);

      console.log(`${person.name} ${person.surname} ${person.sex} ${person.age} ${person.income} ${person.married} ${person.hasCar}`);
    }

    people.forEach(printPeopleInLines);

}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  function printNameAndSurname (person) {
    console.log(person.name + "-" + person.surname);
  }

  people.forEach(printNameAndSurname);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  function printNameSurnameMarriage (person) {
    // for (let i = 0; i < people.length; i+= 1) {
    //   console.log(`${people[i].name} ${people[i].surname} ${Object.keys(people[i])[5]}: ${people[i].married}`);
    // }

    console.log(`${person.name} ${person.surname}, married:${person.married}`);
  }

  // printNameSurnameMarriage(people);
  people.forEach(printNameSurnameMarriage);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  const sexMoney = [];

  function sexAndMoney (person) {
    sexMoney.push([person.sex, person.income]);
  }

  people.forEach(sexAndMoney);
  console.log(sexMoney);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  const nameSurnameSexArray = [];

  function printNameSurnameSex (person) {
    nameSurnameSexArray.push([person.name, person.surname, person.sex]);
  }

  people.forEach(printNameSurnameSex);
  console.log(nameSurnameSexArray);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  function printAllMales (person) {
    // for (let i = 0; i < people.length; i+= 1) {
    //   if (people[i].sex.toLowerCase() === 'male') {
    //     console.log(`${people[i].name} ${people[i].surname}`);
    //   }
    // }

    if (person.sex.toLowerCase() === 'male') {
      console.log(`${person.name} ${person.surname}`);
    }
  }

  // printAllMales(people);
  people.forEach(printAllMales);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  function printAllFemales (person) {
    if (person.sex.toLowerCase() === 'female') {
      console.log(`${person.name} ${person.surname}`);
    }
  }

  people.forEach(printAllFemales);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  function printNameSurnameHasCar (person) {
    if (person.hasCar === true) {
      console.log(`${person.name} ${person.surname}`);
    }
  }

  people.forEach(printNameSurnameHasCar);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  function printNameSurnameMarried (person) {
    if (person.married === true) {
      console.log(`${person.name} ${person.surname}`);
    }
  }

  people.forEach(printNameSurnameMarried);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  function countHowManyDriving (people) {

    let drivingMen = 0;
    let drivingWomen = 0;

    for (let i = 0; i < people.length; i+= 1) {
      if ((people[i].hasCar === true) && (people[i].sex.toLowerCase() === 'male')) {
        drivingMen += 1;
      } else if ((people[i].hasCar === true) && (people[i].sex.toLowerCase() === 'female')) {
        drivingWomen += 1;
      }
    }

    // console.log(drivingMen);
    // console.log(drivingWomen);

    const drivingPeople = {
      'male' : drivingMen,
      'female' : drivingWomen
    };

    console.log(drivingPeople);
    // console.log(drivingPeople.constructor == Object); prints true
  }

  countHowManyDriving(people);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  const newPeopleArray = [];

  function renameProperty(person) { 
    const newPerson = {
      name : person.name,
      surname : person.surname,
      sex : person.sex,
      age : person.age,
      salary : person.income,
      married : person.married,
      hasCar : person.hasCar
    }

    newPeopleArray.push(newPerson);
  }

  people.forEach(renameProperty);
  console.log(newPeopleArray);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  const newPeopleArray = [];

  function noSexNameSurname (person) {
    const newPerson = {
      age : person.age,
      salary : person.income,
      married : person.married,
      hasCar : person.hasCar
    }

    newPeopleArray.push(newPerson);
  }
      
  people.forEach(noSexNameSurname);
  console.log(newPeopleArray);  
}

console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  const newPeopleArray = [];

  function addFullNameProperty(person) { 
    const newPerson = {
      fullname : person.name + " " + person.surname,
      sex : person.sex,
      age : person.age,
      salary : person.income,
      married : person.married,
      hasCar : person.hasCar
    }

    newPeopleArray.push(newPerson);
  }

  people.forEach(addFullNameProperty);
  console.log(newPeopleArray);
}
console.groupEnd();

