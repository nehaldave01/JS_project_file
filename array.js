// let arr = ['a', 'b', 'c', 'd', 'e']
// console.log(arr[arr.length-1]);

// for (let i = 0; i <= arr.length-1; i++) {
//     console.log(arr[i]);
// console.log(i);
// }



// for in used to find index of array
// for(let e in arr){
// console.log(e);
// }

// for of used to find elements of an array
// for(let e of arr){
//     console.log(e);
//     }


// It does not return a new array, but instead modifies the original array.
// arr.forEach((e,i)=>{
// console.log(i);
// })

// If you need to transform the array or create a new one based on the original, you might consider using other methods like map or filter .

// arr.forEach(function(e,i){
// console.log(e);
// console.log(i);
// })


// let abc = arr.map((e, i) => {
//     return e
// })
// console.log(abc);



// let arr = ['a', 'b', 'c', 'd', "b", 'e']
// console.log(arr.indexOf("b",5))
// console.log(arr.indexOf("z"));

// console.log(arr.lastIndexOf("b",0));
// console.log(arr.lastIndexOf("z"));




// Question 1: How do you create an empty array in JavaScript?
// Using array literal syntax: let arr = [];
// Using the Array() constructor: let arr = new Array();

// let arr = ['pink','orange','purple','blue','red','black','yellow']
// console.log(arr);




// Question 2: How do you access the first and last elements of an array?
// First Element
// console.log(arr[0]);

// Last Element
// console.log(arr.length-1);



// Question 3: How do you add an element to the end of an array?

// To add an element we will add (push()) into it
// arr.push('grey');
// console.log(arr);



// Question 4: How do you remove the last element from an array?

// To remove last element of an arry we will use (pop())
// arr.pop('grey');
// console.log(arr);



// Question 5: How do you loop through an array in JavaScript?

// for loop
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// console.log(i);
// }

// foreEach()
// arr.forEach(function(e,i){
//     // console.log(e);
//     console.log(i);
// })

// foreEach()
// arr.forEach((e,i)=>{
//     // console.log(e);
//     console.log(i);
// })



// Question 6: How do you check if an element exists in an array?

// let arr = ['pink','orange','purple','blue','red','black','yellow']
// using(indexof()) method we can check if an element exists in an array

// console.log(arr.indexOf("purple"));
// console.log(arr.indexOf("cyan"));



// Question 7: How do you remove an element from an array at a specific index?

// let arr = ['pink','orange','purple','blue','red','black','yellow']
// arr.splice(4,1)
// console.log(arr);


// Question 8: What is the difference between .map() and .forEach()?

// Answer:
// .map() and .forEach() are both array methods that allow you to loop through an array, but they differ in what they return.
// .map() returns a new array with the same length as the original array, where each element is the result of applying a callback function to the original element.
// .forEach() does not return anything, but it simply executes a callback function on each element of the array.


// let number = [1,2,3,4,5]
// let square = number.map(e => e * 2)
// console.log(square);

// let square = number.forEach( e =>  console.log(e * 2));



// Question 9:
// let language = ["HTML","CSS","Javascript"] 
// console.log(language);




//  Question 10: find the last element of the array

// let language = ["HTML","CSS","Javascript"] 
// console.log(language[language.length-1]);
// console.log(language[2]);
// console.log(language.length);




//  Question 11: add a new element in the array

// let language = ["HTML","CSS","Javascript"] 
// language.unshift("Python")
// console.log(language);





//  Question 12: remove the last element from the array

// let language = ["Python","HTML","CSS","Javascript"] 
// language.pop();
// console.log(language);



//  Question 13: change element number 2 to bootstrap

// let language = ["Python","HTML","CSS","Javascript"] 
// language[2] = "Bootstrap";

// console.log(language);




//  Question 14: add an element in the end of an array

// let language = ["Python","HTML","CSS","Javascript"] 
// language.push("C++");
// console.log(language);



//  Question 15: how to remove 2 element from an array

// let language = ["Python","HTML","CSS","Javascript"] 

// language.pop();
// language.pop();

// console.log(language);



//  Question 16: keep python and remove all the element from the array

// let language = ["Python","HTML","CSS","Javascript"] 
// language.splice(1,3)
// console.log(language);



//  Question 17: empthy the given array

// let language = ["Python","HTML","CSS","Javascript"] 
// language = []

// console.log(language);




//  Question 18: find the indexof() python

// let language = ["Python","HTML","CSS","Javascript"] 
// let position = language.indexOf("Python");

// console.log(position);



//  Question 19: Is the below one is an array give ans in boolean value

// let language = ["Python","HTML","CSS","Javascript"] 
// console.log(Array.isArray(language));



//  Question 20: Is the below one is an array give ans in boolean value


// let language = "python"
// console.log(Array.isArray(language));




//  Question 21: Convert the sentence into an array of element

// let sentence = "Try to convert it into an array";
// let new_array = sentence.split('');
// let new_array = sentence.split(' ');

// console.log(new_array);




//  Question 22: Copy the given array

// let language = ["Python","HTML","CSS","Javascript"] 
// let b = language.slice();

// console.log(b);


//  Question 22: Place the given number in increment order in the array

// let number = [ 4, 6, 10, 52, 30, 25, 60]

// number.sort(function(a , b) {return a < b;});
// console.log(number);
// console.log(number.length);


//  Question 23: Use the for…of statement to iterate over an array.

// let a = ['first', 'second', 'third', 'fourth'];
// for(let e of a){
// }
// console.log(a);


//  Question 24: How do you use the filter() method to filter out odd numbers from an array?


// let num = [1,2,3,4,5,6,7,8,9]
// let odd_num = num.filter(e => e % 2!==0);

// console.log(odd_num);




//  Question 25: How do you use the filter() method to filter out even numbers from an array?


// let num = [12,52,8,7,4,16,22,33, 18,91]
// let even_num = num.filter(e => e % 2 === 0);
// console.log(even_num);



// map is used to read an array It creates a new array by calling a function on every element of the original array and storing the results in a new array. map() returns the new array, and the original array is unchanged.

// let arr1 = ["A", "b", "c", "d", "e"];
// let abc = arr1.map(e =>  e*2)
// console.log(abc);




// find method is used to find an elemet or return in an array
// let myArr = [1, 2, 3, 4, 5]
// let abc = myArr.find((e) => {
//     return e < 3
// })
// console.log(abc);


// let myArr = [1, 2, 3, 4, 5]
// let abc = myArr.find(e =>  e < 3)
// console.log(abc);



// let myArr = [1, 2, 3, 4, 5]
// let abc = myArr.filter(e =>  e < 3)
// console.log(abc);



// let myArr = [1, 2, 3, 4, 5]
// let abc = myArr.find(e => e > 6)
// console.log(abc);



// let myArr = [1, 2, 3, 4, 5]
// let abc = myArr.filter(e => e > 6)
// console.log(abc);


// let myArr = [1, 2, 3, 4, 5]
// console.log( myArr.includes(7))




// let myArr = [1, 2, 3, 4, 5]
// myArr.push(7)
// console.log(myArr);


// let myArr = [1, 2, 3, 4, 5]

// // myArr.pop()
// // myArr.pop()

// myArr.pop(myArr.pop())


// console.log(myArr);


// let myArr = [1, 2, 3, 4, 5]
// // myArr.unshift(7,3,9,0)
// myArr.shift()
// console.log(myArr);



// let myArr = ['a', 'b', 'c', 'd', 'e']
// myArr.splice(5, 0, "z","y","x")
// console.log(myArr);


// let myArr = ['a', 'b', 'c', 'd', 'e']
// myArr.splice(4,1)
// console.log(myArr);



// let myArr = ['a', 'b', 'c', 'd', 'e']
// myArr.splice(0,0,"z")
// console.log(myArr);




// let myArr = ['a', 'b', 'c', 'd', 'e']
// myArr.splice(0,1)
// console.log(myArr);



// let myArr = ['a', 'b', 'c', 'd', 'e']
// myArr.splice(2, 0, "z")
// console.log(myArr);


// let myArr = ['a', 'b', 'c', 'd', 'e']
// myArr.splice(2, 1)
// console.log(myArr);



// let myArr = ['a', 'b', 'c', 'd', 'e']
// myArr.splice(2, 2, "z")
// console.log(myArr);

const array = [1, 2, 3, 4, 5];

array.forEach(item => {
  console.log(item);
});
