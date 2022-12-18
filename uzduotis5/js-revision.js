const peopleData = [{
    name: 'Jonas',
    surname: 'Jonauskas',
    age: 55,
    height: 186,
    weight: 90,
    sex: 'male',
}, {
    name: 'Ona',
    surname: 'Onauskienė',
    age: 66,
    height: 165,
    weight: 110,
    sex: 'female',
}, {
    name: 'Petras',
    surname: 'Petrauskas',
    age: 15,
    height: 175,
    weight: 97,
    sex: 'male',
}, {
    name: 'Juozas',
    surname: 'Juozauskas',
    age: 27,
    height: 189,
    weight: 62,
    sex: 'male',
}, {
    name: 'Marija',
    surname: 'Murauskytė',
    age: 17,
    height: 177,
    weight: 71,
    sex: 'female',
}, {
    name: 'Liucija',
    surname: 'Lempauskienė',
    age: 33,
    height: 172,
    weight: 66,
    sex: 'female',
}, {
    name: 'Vytautas',
    surname: 'Lebedauskis',
    age: 17,
    height: 177,
    weight: 98,
    sex: 'male',
}, {
    name: 'Bobutė',
    surname: 'Bobauskienė',
    age: 76,
    height: 163,
    weight: 120,
    sex: 'female',
}];

console.group('2.');
{
    peopleData.forEach( (person) => console.table(person));
    peopleData.forEach( (person) => console.log(`${person.name} ${person.surname}, KMI indeksas: ${(person.weight / (person.height/100)**2).toFixed(2)}`));
}

console.groupEnd();

console.group('3.');
{
    const longNAme = peopleData.filter( ({name}) => name.length > 6);
    console.log("Ilgesni vardai nei 6 simboliai");
    console.table(longNAme);

    const weight80 = peopleData.filter( ({weight}) => weight > 80);
    console.log("Didesnis svoris nei 80");
    console.table(weight80);

    const height185 = peopleData.filter( ({height}) => height > 185);
    console.log("Didesnis aukstis nei 185");
    console.table(height185);
}
console.groupEnd();

console.group('4.');
{
    const personHeight = peopleData.map( ({height}) => height);
    console.log(personHeight);
    const personWeight = peopleData.map( ({weight}) => weight);
    console.log(personWeight);
    const HeightWeightAge = peopleData.map ( ({height, weight, age}) => ({
        height: height,
        weight: weight,
        age: age,
    }));
    // const HeightWeightAge = peopleData.map ( ({height, weight, age}) => ({
    //     height, weight, age
    // }));
    console.log(HeightWeightAge);
    const KMI = peopleData.map ( ({height, weight}) => (weight / (height/100)**2).toFixed(2));
    console.log(KMI);
    const ageAndKMI = peopleData.map( ({height, weight, age}) => [
        ((weight / (height/100)**2).toFixed(2)), age
    ])
    console.log(ageAndKMI);
}
console.groupEnd();

console.group('5.');
{
    const weightAverage = peopleData.reduce( (prevSum, {weight}) => prevSum + weight / peopleData.length, 0);
    console.log("Weight average: " + weightAverage);
    const heightAverage = peopleData.reduce( (prevSum, {height}) => prevSum + height / peopleData.length, 0);
    console.log("Height average: " + heightAverage);
}
console.groupEnd();
console.log("-------------------------- 2 Dalis ------------------------  ");

class Person {
    name;
    surname;
    age;
    height;
    weight;
    sex;

    constructor({name, surname, age, height, weight, sex}) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.sex = sex;
    }

    getBMI () {
        return (this.weight / (this.height/100)**2).toFixed(2)
    }

    toString () {
        return `${this.name} ${this.surname}, age: ${this.age}, height: ${this.height}, weight: ${this.weight}, sex: ${this.sex}`
    }
}

const people = peopleData.map(person => new Person(person));
console.table(people);

console.group('1.');
{
    const fatWomen = people.filter( ({age, weight, sex}) => age < 20 && weight > 70 && sex === "female");
    console.table(fatWomen);
}
console.groupEnd();

console.group('2.');
{
    const skinnyMen = people.filter((person) => person.age > 25 && person.getBMI() < 18, 5);
    console.table(skinnyMen);
}
console.groupEnd();

console.group('3.');
{
    const fatKids = people.filter( (person) => person.age < 18 && person.getBMI() > 30);
    console.table(fatKids);
}
console.groupEnd();

console.group('4.');
{
    const fatElderly = people.filter( (person) => person.age >= 65 && person.getBMI() > 30);
    console.table(fatElderly);
}
console.groupEnd();

console.group('5.');
{
    const badWeightPeople = people.filter( (person) => person.getBMI() < 18.5 || person.getBMI() > 25);
    console.table(badWeightPeople);
}
console.groupEnd();