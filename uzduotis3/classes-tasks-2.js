console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    name;
    age; 
    height;
    weight;

    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge() {
      return this.name + " is age " + this.age;
    }

    getHeight() {
      return this.name + " is " + this.height + "cm";
    }

    getWeight() {
      return this.name + " weighs " + this.weight + "kg";
    }
  }

  p1 = new Player("David Jones", 25, 175, 75);
  console.log(p1.getAge()); // David Jones is age 25
  console.log(p1.getHeight()); // David Jones is 175cm
  console.log(p1.getWeight()); // David Jones weighs 75kg
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
    firstNumber;
    secondNumber;

    add(firstNumber, secondNumber) {
      return firstNumber + secondNumber;
    }

    subtract(firstNumber, secondNumber) {
      return firstNumber - secondNumber;
    }

    multiply(firstNumber, secondNumber) {
      return firstNumber * secondNumber;
    }

    divide(firstNumber, secondNumber) {
      return firstNumber / secondNumber;
    }
  }

  var calculator = new Calculator();
  console.log(calculator.add(10, 5));  // 15
  console.log(calculator.subtract(10, 5)); // 5
  console.log(calculator.multiply(10, 5)); // 20
  console.log(calculator.divide(10, 5)); // 2
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    firstname;
    lastname;

    constructor (firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.fullname = firstname + " " + lastname;
      this.email = (`${firstname}.${lastname}@company.com`).toLowerCase();
    }
  }

  emp1 = new Employee("John", "Smith")
  console.log(emp1.fullname ); // "John Smith"

  emp2 = new Employee("Mary",  "Sue")
  console.log(emp2.email); // "mary.sue@company.com"

  emp3 = new Employee("Antony", "Walker")
  console.log(emp3.firstname ); // "Antony"
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    name;
    age; 

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    compareAge(other) {
      if (this.age < other.age) {
        return other.name + " is older than me.";
      } else if (this.age > other.age){
        return other.name + " is younger than me.";
      } else {
        return other.name + " is the same age as me."
      }
    }
  }

  p1 = new Person("Samuel", 24);
  p2 = new Person("Joel", 36);
  p3 = new Person("Lily", 24);
  
  console.log(p1.compareAge(p2)); // "Joel is older than me."

  console.log(p2.compareAge(p1)); // "Samuel is younger than me."

  console.log(p1.compareAge(p3)); // "Lily is the same age as me."
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Circle {
    radius;

    constructor(radius) {
      this.radius = radius;
    }

    getArea() {
      return Math.PI * this.radius * this.radius;
    }

    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  let q = new Circle(4.44);
  console.log(q.getArea()); // 61.93210093580775
  console.log(q.getPerimeter()); // 27.897342763877365
  console.log(Math.PI); // 3.141592653589793

}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    fname;
    lname;

    constructor(fname, lname) {
      this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();
      this.fullname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase() + " " + lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();
      this.initials = fname.charAt(0).toUpperCase() + "." + lname.charAt(0).toUpperCase();
    }
  }

  a1 = new Name("john", "SMITH");
  console.log(a1.fname); // "John"
  console.log(a1.lname); // "Smith"
  console.log(a1.fullname); // "John Smith"
  console.log(a1.initials); // "J.S"
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  class IceCream {
    flavor;
    numSprinkles;

    constructor(flavor, numSprinkles) {
      this.flavor = flavor;
      this.numSprinkles = numSprinkles;
    }
  }

  function sweetestIcecream(arr) {
    let sweetestOfAll = 0;
    for (i in arr) {
      let sweetness;

      if (arr[i].flavor === "Plain") {
        sweetness = 0 + arr[i].numSprinkles;
      } else if (arr[i].flavor === "Vanilla" || arr[i].flavor === "ChocolateChip"){
        sweetness = 5 + arr[i].numSprinkles;
      } else if (arr[i].flavor === "Strawberry" || arr[i].flavor === "Chocolate"){
        sweetness = 10 + arr[i].numSprinkles;
      }
      // console.log(arr[i].flavor + " " + sweetness);
      if (sweetestOfAll < sweetness) {
        sweetestOfAll = sweetness;
      }
    }
    console.log("Sweetest icecream value is: " + sweetestOfAll);
    return sweetestOfAll;
  }

  ice1 = new IceCream("Chocolate", 13);
  ice2 = new IceCream("Vanilla", 0);
  ice3 = new IceCream("Strawberry", 7);
  ice4 = new IceCream("Plain", 18);
  ice5 = new IceCream("ChocolateChip", 3);
  ice6 = new IceCream("Chocolate", 23);
  ice7 = new IceCream("Strawberry", 0);
  ice8 = new IceCream("Plain", 34);
  ice9 = new IceCream("Plain", 81);
  ice10 = new IceCream("Vanilla", 12);

  sweetestIcecream([ice1, ice2, ice3, ice4, ice5]); // ➞ 23

  sweetestIcecream([ice3, ice1]); // ➞ 23

  sweetestIcecream([ice3, ice5]); // ➞ 17
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OnesThreesNines {
    number;

    constructor(number) {
      this.ones = Math.floor(number / 1);
      this.threes = Math.floor(number / 3);
      this.nines = Math.floor(number / 9);
    }
  }

  let n1 = new OnesThreesNines(5);
  console.log(n1.nines); // ➞ 0
  console.log(n1.ones); // ➞ 5
  console.log(n1.threes); // ➞ 1
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  class User {
    static userCount = 0;
    username;
	
    constructor(username) {
      User.userCount += 1;
      this.username = username;
    }
  }

  u1 = new User("johnsmith10");
  console.log(User.userCount); // ➞ 1

  u2 = new User("marysue1989")
  console.log(User.userCount); // ➞ 2

  u3 = new User("milan_rodrick")
  console.log(User.userCount); // ➞ 3

  console.log(u1.username); // "johnsmith10"
  console.log(u2.username); // "marysue1989"
  console.log(u3.username); // "milan_rodrick"
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  class Book {
    title;
    author;

    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    getTitle() {
      return `Title: ${this.title}`;
    }

    getAuthor() {
      return `Author: ${this.author}`;
    }
  }

  const PP = new Book("Pride and Prejudice", "Jane Austen");
  const H = new Book("Hamlet", "William Shakespeare");
  const WP = new Book("War and Peace", "Leo Tolstoy");

  console.log(PP.title); // "Pride and Prejudice"
  console.log(PP.author); // "Jane Austen"
  console.log(WP.getTitle()); // "Title: War and Peace"
  console.log(WP.getAuthor()); // "Author: Leo Tolstoy"

}
console.groupEnd();