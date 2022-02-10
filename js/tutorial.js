//String properties and methods-------------------------------------------------------------
/*
let text = ' Rafael Cruz'
let result= text.length

console.log(result);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(1));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf('e'));
console.log(text.trim());
console.log(text.trim().toLowerCase().startsWith('rafael'));
console.log(text.includes('fael'));
console.log(text.slice(0, 2));
console.log(text.slice(-3));
*/

//arrays n for loops------------------------------------------------------------------------
/*
const names =['Anna', 'Susy', 'Bob', 'Rafael', 'Zé'];
const lastName=['Braga Neto','Silva Braga','Abreu Neto','Cruz Ferreira', 'Souza Azevedo' ];
let newArray =[];

for(let i=0; i<names.length;i++){
    console.log(i);
    console.log(names[i]);
    //newArray.push(names[i]);
    newArray.push(`${names[i]} ${lastName[i]}`)
}
console.log(newArray);
console.log(names);
*/

//Function, return, if, arrays n for loop------------------------------------------------------
/*
const gas = [20, 40, 100];
const food = [10, 40, 50];

function calcTotal(arr){
    let total = 0;
    for(let i =0; i < arr.length; i++){
        total = total + arr[i]
    }
    if(total > 100){
        console.log(`Whoa u spend more than 100`);
        return total;
    }else if(total == 100){
        console.log(`Good Job u spend only 100`);
        return total;
    }else{
        console.log(`Nice u spend less than 100`);
    }
    return total;
}

let totalGas = calcTotal(gas)
let totalFood = calcTotal(food)
let totalRandom = calcTotal([10, 50, 30]);
console.log({
    gas: totalGas,
    food: totalFood,
    random: totalRandom
})
*/

/*------------------------------------------------------------------------------------------
//unary operator - typeof
let text = 'some text';

//binary operator  - assignment
let number = 3;
let number2 = 2 + 5;

//ternary operator
//condition ? (runs if true) : (runs if false)

const value = 1 < 0

value ? console.log('value is true') :  console.log('value is false');

//if (value){
//    console.log('value is true');
//}else{
//    console.log('value is false');
//}
*/

/*
Powerfull array methods
    -forEach, map, filter, find, reduce
    *Iterate over array - no for loop required
    *Accept CALLBACK function as an, calls CALLBACK paramater.
 
const number =[0, 1, 2, 3, 4]
//show All numbers
for(i=0; i < number.length; i++){
    console.log(number[i]);
}
*/

/*
//forEach *Does not return new array*
const people =[
    {name:'Rafael', age:22, position:'dev'},
    {name:'Bob', age:24, position: 'adm'},
    {name:'Flavio', age:23, position:'electric engineer'}
]

function person(person){
    console.log(person);
}
console.log(people.forEach(person));

people.forEach(function(item){
    console.log(item.position.toUpperCase());
});
*/

/*
map 
    does return a new array
    does not change size of orinal array
    use values from original array when making new one
*/
/*
const people=[
    {name:'Rafael', age:22, position:'dev'},
    {name:'Bob', age:24, position: 'adm'},
    {name:'Flavio', age:23, position:'electric engineer'}
]
const ages = people.map(function (person){
    return person.age;
})
console.log(ages);

const newPeople = people.map(function(person){
    return {
        fristName: person.name.toUpperCase(),
        oldAges: person.age +20,
    };
});
console.log(newPeople);
*/

/*
filter
    does return a new array
    can manipulate the size of new array
    returns based on condition
*/
/*
const people=[
    {name:'Rafael', age:22, position:'dev'},
    {name:'Bob', age:24, position: 'adm'},
    {name:'Flavio', age:23, position:'electric engineer'}
]

const youngPeople = people.filter(function(person){
    return person.age <=25;
});

const developers = people.filter(function(person){
    return person.position === 'dev'
});
console.log(youngPeople);
console.log(developers);
*/

/*
find
    returns object
    returns first match, if no match undefined
    great for getting unique value
*/
/*
const people=[
    {name:'Rafael', age:22, position:'dev', id:1},
    {name:'Bob', age:24, position: 'adm', id:2},
    {name:'Flavio', age:23, position:'electric engineer', id:3}
]
const names = ['bob', 'fael', 'susy']

const person = people.find(function (person) {
    return person.id === 3;
});

console.log(names.find(function(name){
    return name ==='bob'
}));
console.log(person);
*/

/*
reduce
    iterates, callback function
    reduces to a single value - number, array, object
    1 parameter ('acc') - total of all calculations
    2 parameter ('curr') - current iteration/value
*/
/*
const people=[
    {name:'Rafael', age:22, position:'dev', id:1, salary:200.00},
    {name:'Bob', age:24, position: 'adm', id:2, salary:300.00},
    {name:'Flavio', age:23, position:'electric engineer', id:3, salary:500.00}
];
const total = people.reduce(function(acc, currItem) {
    console.log(`Current money ${currItem.salary}`);
    acc = acc + currItem.salary;
    console.log(`Total ${acc}`);
    return acc;
},0)
*/

/*
Math 
    standard built-in objects - always available
*/
/*
const number = 81;
//const result = Math.floor(number); //arredondamento para baixo
//const result = Math.ceil(number); //arredondamento para cima
//const result = Math.sqrt(number); //raiz quadrada
//const result = Math.PI; //valor de p.i 
//const result = Math.min(4, 5, 6, 7, 8, 1);//menor valor
//const result = Math.max(4, 5, 6, 7, 8, 1);//maior valor
const result = Math.floor(Math.random()*10 + 1);
console.log(result);
*/

/*
date
*/
const months=[ 
]
const days=[
]
const date = Date();
console.log(date);