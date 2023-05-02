let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?
// Solution: 8 ​​​​​at ​​​​​​​​numPlanets​​ and ​​​1846 ​​​​​at ​​​​​​​​yearNeptuneDiscovered​​​

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); 
// Solution:  { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"})
   // Solution: Your name is Alejandro and you like purple
  getUserData({firstName: "Melissa"}) 
  // Solution: Your name is Melissa and you like green
  getUserData({}) 
  // Solution: Your name is undefined and you like green


  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Solution: Maya
console.log(second); // Solution: Marisa
console.log(third); // Solution: Chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); 
  // Solution: Raindrops on roses
  console.log(whiskers); 
  // Solution: whiskers on kittens
  console.log(aFewOfMyFavoriteThings); 
  // Solution: [ 'Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings' ]

  let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // Solution: [ 10, 30, 20 ]

var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;

// Solution: const {a, b} = obj.numbers;

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// Solution: [arr[0], arr[1]] = [arr[1], arr[0]]

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})

