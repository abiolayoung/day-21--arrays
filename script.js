// ARRAYS
// array allows us to store an ordered collection of value unlike object that stores collection of value in an unordered manner
// array provide methods to manage the order of elements
// 2 ways of creating array in javascript
// let arr = new Array() // method 1
// let arr2 = []; //method 2

// let fruits = ["apple", "orange", "plum"]
// array elements are numbered starting from index 0

// alert(fruits[0]) // this will print out the apple starting from the count of 0
// alert(fruits[2]) // will print plum

// replacing an element with array
// fruits[2] = "pear";
// alert(fruits[2]);

// adding an element to array
// fruits[3] = "lemon";
// alert(fruits[3]);

// getting the length of the array

// alert(fruits.length)

// show the whole array
// alert(fruits)

// array can store any type of data inclding functions

// how to access object and function vslue in an array
// let arr = ["apple", {name: 'abiola'}, true, function(){alert('hello')}];
// alert(arr[1].name)
// alert(arr[3]())

// arr[3]() // if alert has been specified in the function, we can just call the function name without alert

// getting the last element of an array
// alert(fruits[fruits.length-1]) // this is not a good practise as there are other methods
// alert(fruits.at(-1)) // 

// array methods
// pop, push, shift, unshift
// push method- push appends or add and element to the end while, pop remove an element from the end
// shift- remove and element from the beginner

let fruits = ["apple", "orange", "plum"]
// fruits.pop() //this will pop out plum which is the last item of the array
// fruits.push("pear") // push will add a value to the end of the array
// alert(fruits)

fruits.shift() // shift will remove the first item of the array
fruits.unshift("pear", "lemom", "grape") // unshift will add to the first of the array, you can also add multiple items by 
// specifying the items in the parenthesses
// alert(fruits)

// Arrays are can be referenced e,g
// let arr = fruits;
// alert(arr===fruits)
// arr.push("apple")
// alert(arr)

// the shift and unshift method move the array elements to either left or right , but pop and push only remove and add to the end of the array and not move their index

// how to loop over the indexes of an array
let arr = ["apple", "orange", "plum"];

// for(let i=0; i<arr.length; i++){
//     alert(arr[i])
// }

// using for off loop - for off loop is recommended
// for(let fruit of arr){
//     alert(fruit)
// }

// using for in loop - used for generic objects
for(let key in arr){
    alert(arr[key])
}

let matrix = [
    [1,2,3], [4,5,6], [7,8,9]
]
alert(matrix[3][1])





// map function
let names = ['abiola', 'adeniyi'];
let upperCaseNames = names.map(each=>each.toUpperCase())
upperCaseNames

// function capitalize(str){
//     let firstLetter = str[0];
//     let rest = str.slice[1];
//     return `${firstLetter.toUpperCase()}${rest.toLowerCase()}`;
// }
// console.log(capitalize(abiola));

// map will apply a callback function to each value of the array

// how to target the value of an array place inside of an arry

