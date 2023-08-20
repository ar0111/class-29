const husband = "kuddus ali";
// husband = "karim ali";
// console.log(husband);

let phone = " I phone Pro max";
phone = "Xiamoi";
// console.log(phone);

function maxNumber(array = [20, 60]){
    const max = Math.max(...array);
    return max;
}

// const biggestNumber = maxNumber([10, 90, 60]);
const biggestNumber = maxNumber();
// console.log(biggestNumber);

const myNotes = `I am mojnu of ${husband}. I have a ${phone}`;

// console.log(myNotes);

const square = number => number*number;

// console.log(square(9));

const student = {
    fullName : "Arafat Rahman",
    roll: 10,
    taka: "1K",
    address: "Shyamoli"
}

// const fullName = student.fullName;
// const taka = student.taka;
// const address = student.address;
// console.log(fullName);
// console.log(taka);
// console.log(address);

const {fullName, roll, taka} = student;

// console.log(roll);

const company = {
    companyName : "Facebook",
    ceo:{
        fullName: "Mark Juckerbag",
        id: 50,
        food: "Fried Rice"
    },
    technologyy: {
        work: "Marketing", 
        framework: "React JS"
    },
    location: "USA"
}

// console.log(company.ceo.food);
// console.log(company?.technology?.framework);

const myObject = {
    x: 2,
    y: 50,
    z: 60,
    a: 25,
    b: 70
}

const {x, y} = myObject;
// console.log(x.k?.f);

const [num1, num2, num3] = [20, 30, 40, 50];
// console.log(num1, num2, num3);

const [firstActor, secondActor] = ["Hero Alam", "Sakib Khan"];

// console.log(firstActor, secondActor);

const actors = ["Hero Alam", "Sakib Khan"];
// for(const actor of actors){
//     console.log(actor);
// }

// console.log(actors[1]);

const numbers = [10, 20, 30, 40, 50];
const output = [];
const doublelt = number => number * 2;

for(const number of numbers){
    // console.log(number);
    const result = doublelt(number);
    output.push(result);
}

// console.log(output);
const squares = numbers.map(number => number * number);
// console.log(squares);

const friends = ["Sakib", "mushfiq", "jerry"];
const friendsNameLengthArray = ["Sakib", "mushfiq", "Jerry"].map(name => name.length);

// console.log(friendsNameLengthArray);

const products = [
    {name: 'glass', price: 50, color: 'gray'},
    {name: 'shoe', price: 50, color: 'black'},
    {name: 't-shirt', price: 100, color: 'gray'},
    {name: 'pant', price: 200, color: 'yellow'}
]

// const productName = products.map(product => product.name);
const productName = products.map(product => product.color);
// console.log(productName);

// products.forEach(product => console.log(product));

const numbers1 = [45, 60, 70, 80, 90, 100];
const bigNumbers = numbers1.filter((number) => number < 80);

// console.log(bigNumbers);

const expensiveProduct = products.filter((product)=> product.color == 'gray');

// console.log(expensiveProduct);

// const yellowItems = products.find((product) => product.color == "yellow");
const yellowItems = products.find((product) => product.color == "gray");

// console.log(yellowItems);

class Subpport{
    name;
    designation = "Web Instructor";
    address;
    phoen = "015050550";

    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    
    startWork(){
        console.log(`My name is ${this.name}. I live in ${this.address}`);
    }
}

const arafatRahman = new Subpport("Arafat", "Mohammadpur");
const abdulKader = new Subpport("Abdul Kader", "Dhanmondi");

// abdulKader.startWork();
// arafatRahman.startWork();
// console.log(arafatRahman.designation);

class TeamMember{
    name;
    address = "BD";
    location = "Khulna";

    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember{
    groupSupportTime;
    designation = "Suppurt Web Instructor";

    constructor(name, address, time){
        super(name, address);
        this.groupSupportTime = time;
    }
}

const amir = new Support("Amir", "SW", 12);
console.log(amir);