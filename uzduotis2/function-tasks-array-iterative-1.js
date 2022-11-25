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

console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  people.forEach(function (person) {
    console.log(`${person.name} ${person.surname} ${person.sex} ${person.age} ${person.income} ${person.married} ${person.hasCar}`);
  });
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  people.forEach(function ({name, surname}) {
    console.log(name + "-" + surname);
  });
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  people.forEach(function ({name, surname, married}) {
    console.log(`${name} ${surname}, married:${married}`);
  });
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  const sexAndMoney = people.map(function ({sex, income}) {
    return ([sex, income]);
  });
  
  console.log(sexAndMoney);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  const nameSurnameSexArray = people.map(function ({name, surname, sex}) {
    return [name, surname, sex];
  });

  console.log(nameSurnameSexArray);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  console.table(people.filter(function ({sex}) {
    return sex.toLowerCase() === 'male';
  }));
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  console.table(people.filter(function ({sex}) {
    return sex.toLowerCase() === 'female';
  }));
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  people.forEach(  function ({name, surname, hasCar}) {
    if (hasCar) {
      console.log(`${name} ${surname}`);
    }
  });
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  console.table(people.filter(function({married}) {
    return married;
  }));
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  const drivingPeople = {
    'male' : 0,
    'female' : 0
  };

  people.reduce( function (driving, {hasCar, sex}) {
    if (hasCar && sex.toLowerCase() === 'male') {
      driving.male += 1;
    } else if (hasCar && sex.toLowerCase() === 'female') {
      driving.female += 1;
    }
    return driving;
  }, drivingPeople);

  console.log(drivingPeople);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  const newPeopleArray = people.map(function ({ income, ...rest }) { 
    return {
      salary : income,
      ...rest
    };
  });
  console.table(newPeopleArray);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  function noSexNameSurname ({age, income, married, hasCar}) {
    const newPerson = {
      age,
      income,
      married,
      hasCar
    }
    return newPerson;
  }
      
  const newPeopleArray = people.map(noSexNameSurname);
  console.log(newPeopleArray);  
}

console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  function addFullNameProperty({name, surname, ...rest}) { 
    const newPerson = {
      fullname : name + " " + surname,
      ...rest
    }
    return newPerson;
  }

  const newPeopleArray = people.map(addFullNameProperty);
  console.table(newPeopleArray);
}
console.groupEnd();

