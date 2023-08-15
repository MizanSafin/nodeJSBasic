/*  Write a program that finds the maximum of three numbers entered by the user:
let input = "100 30 200 110";

function maxNum(input) {
  let arr = input.split(" ");
  let numArr = arr.map((value) => Number(value));
  let total = 0;
  for (let i = 0; i < numArr.length; i++) {
    total += numArr[i];
  }
  let averageNum = total / numArr.length;
  console.log(averageNum);
}
maxNum(input);
*/

/*Write a program that finds the average of three numbers entered by the user:
function main(input) {
 
  let arr = input.split(" ");
  let numArr = arr.map((value) => Number(value));
  let total = 0;
  for (let i = 0; i < numArr.length; i++) {
    total += numArr[i];
  }
  let averageNum = total / numArr.length;
  if (averageNum % 1 === 0) {
    console.log(averageNum);
  } else {
    console.log(averageNum.toFixed(4));
  }
}
main("10 40 100");
*/

/* Write a program to convert temperature from Celsius to Fahrenheit.:
function main(input) {
  let celcius = Number(input);
  let farenheit = ((celcius * 9) / 5 + 32).toFixed(2);
  let result = `The temperature in Fahrenheit is: ${farenheit}`;
  console.log(result);
}
main("37.1");

*/
/*
let numberArr = [3, 3, 3, 5, 1, 50];

function addArrayNums() {
 let total = 0;
  for (let i = 0; i < numberArr.length; i++) {
    total += numberArr[i];
  }
  console.log(total);
 
  let result = numberArr.reduce((acc, value) => {
    return acc + value;
  }, 0);
  console.log(result);
}

addArrayNums();

 */

/* Async await IIF
(async (URL) => {
  let res = await fetch(URL);
  let data = await res.json();
  console.log(data);
})("https://jsonplaceholder.typicode.com/todos");

*/

/*
let func1 = () => {
  return 100;
};

let func2 = () => {
  return func1();
};

console.log(func1() + func2());

const cities = ["dhaka", "barishal", "khulna", "rajshahi"];

const [, , , d] = cities;

console.log(d);
*/

/*
let myFirstMap = new Map();

myFirstMap.set("country1", "Bangladesh");
myFirstMap.set("country2", "Saudi arabia");
myFirstMap.set("country3", "Malaysia");

// for (let key of myFirstMap.keys()) {
//   console.log(key);
// }

// myFirstMap.delete("country1");
// myFirstMap.clear();
// let res = myFirstMap.get("country1");
if (myFirstMap.has("country10")) {
  console.log("yes");
} else console.log("no");

let numbers = [2, 2, 3, 4, 6, 7, 1];

let res = numbers.reduce((acc, value) => acc + value);

// console.log(Math.sqrt(res));
// console.log(Math.pow(100, 2));
let val1 = Math.sin(120);
console.log(val1);

class MyClass {
  constructor(num1, num2) {
    this.number1 = num1;
    this.number2 = num2;
  }
  add() {
    let res = this.number1 + this.number2;
    console.log(`The sum of ${this.number1} & ${this.number2} is ${res}`);
  }
}
let result1 = new MyClass(10002, 12);
let result2 = new MyClass(24, 12);
result1.add();
result2.add();



class Parent {
  add(num1, num2) {
    console.log(`The sum of ${num1} and ${num2} is : ${num1 + num2}`);
  }
  substract(num1, num2) {
    console.log(`The substraction  of ${num1} and ${num2} is : ${num1 - num2}`);
  }
}

class Child extends Parent {
  demo() {
    super.add(12, 10);
    super.substract(120, 100);
  }
}

let obj1 = new Child();

obj1.demo();



function addValue(a, b = 22) {
  console.log(`The value of ${a} & ${b} is : ${a + b}`);
}

addValue(12, 100);

const people = {
  namee: "Sadman  safin",
  age: 1.5,
};

const { namee, age, sex = 0 } = people;

console.log(namee, age, sex);

const arr = [12, 33, 44, 55, 66];

const [a, b, ...r] = arr;
console.log(a, b, r);



const numArr = [1, 2, 3, 4, 5, "A", "B", "C"];

for (let item of numArr) {
  console.log(item);
}


let row1 = new Array("A", "B", "C");
let row2 = new Array("D", "E", "F");
let row3 = new Array("G", "H", "I");

let column = [row1, row2, row3];

console.log(column[2][1]);


let books = ["Bangla", "English", "Math", "Economics"];

const [a, ...x] = books;
console.log(a, x);



let MyArr = new Map();
MyArr.set("product1", "Rice");
MyArr.set("product2", "oil");
MyArr.set("product3", "Puffed rice");
MyArr.set("product4", "Biscuits");

MyArr.delete("product1");
MyArr.clear();

let res = MyArr.get("product1");
let checkPro = MyArr.has("product10");

console.log(checkPro);



const mySet = new Set();

mySet.add("sadman");
mySet.add("Safin");
mySet.add("Mizan");
mySet.add("Sahanaj");
mySet.clear();
mySet.delete("sadman");
let res = mySet.size;
let check = mySet.has("sadman");
for (let item of mySet.values()) {
  console.log(item);
}

console.log(check);



class Person {
  name(personName) {
    console.log(`The name of this person is ${personName}`);
  }
  age(personAge) {
    console.log(`The age of this person is ${personAge}`);
  }
}

let person1 = new Person();
console.log(typeof person1);
person1.name("Mizan");
person1.age(29);



class Country {
  constructor(num1, num2) {
    this.firstNum = num1;
    this.secondNum = num2;
    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
  }
  add() {
    let result = this.firstNum + this.secondNum;
    console.log(result);
  }
}

let country1 = new Country(12, 24);
country1.add();



class Person {
  add() {
    console.log(`Hello World`);
  }
}
// let person1 = new Person();
// person1.add();
// Person.add();

*/

let safin = "Sadman safin";
let mizan = "Mizanur Rahman";

let sayHi = (name) => {
  console.log(`Hello there ${name} .How Are you ?`);
};

module.exports = { safin, mizan, sayHi };
