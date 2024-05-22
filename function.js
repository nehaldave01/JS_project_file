// 1. simple/ normal/ traditional function
// 2. anonymous function
// 3. fat arrow function




// 1. simple/ normal/ traditional function ///////////////////////

// function total(){
//     let a=10;
//     let b=20;
//     let d=100;
//     let c=a+b;

//     return c
// }
// // console.log(total());


// FUNCTION EXPRESSION////////////////////////////////////
// let abc=total()
// console.log(abc);


// let a=10;
// function total(){
//     let b=20;
//     let c=a+b;

//     return c
// }


// console.log(total());
// console.log(total());
// console.log(total());



// CALLBACK FUNCTION//////////////////////////////////

// function total(a,b){
//     let c=a+b;
//     return c
// }
// console.log(total(1,2));
// console.log(total(10,20));





// 2. anonymous function///////////////////////////

// const total = function (a, b) {
//     return c = a + b;
// }
// console.log(total(1, 2));
// console.log(total(10, 20));


// 3. fat arrow function////////////////////////////


// const total=(a,b)=>{
//     return c=a+b
// }
// console.log(total(1, 2));
// console.log(total(10, 20));



// IN FAT ARROW AND ANONYMOUS FUNCTION YOU HAVE TO DEFINE THE VARIBLE FIRST THEN YOU CAN DECLARE//////////////////
// console.log(total(1, 2));

// const total=(a,b)=>{
//     return c=a+b
// }


// console.log(total(1, 2));

// const total = function (a, b) {
//     return c = a + b
// }



// console.log(total(1, 2));

//  function total(a, b) {
//     return c = a + b
// }



// QUESTIONS/////////////////////////////////////////////
// 1. Write a JavaScript function to print the “Hello World” message.

//   function msg(){
//        console.log("Hello world");
//   }
//   msg();





// 2. Write a function that returns the square of a number

// function findsquare(num){
//     return num*num;
// }

// console.log(findsquare(2));
// console.log(findsquare(3));
// console.log(findsquare(4));





// 3. Write a function to convert Celsius to Fahrenheit
// Function `calFahrenheit()` returns the converted Celsius value to Fahrenheit value based on the formula
//  `(Celsius × 9/5) + 32 = Fahrenheit`


// const celsius = function (cel){
//    return (cel * 9/5) + 32;
// }
// console.log(celsius(32));
// console.log(celsius(0));
// console.log(celsius(40));


// function calFahrenheit(cel) {
//     return (cel*9/5)+32; //Conversion formula
//   }
//   console.log(calFahrenheit(0)) //32
//   console.log(calFahrenheit(20)) //68
//   console.log(calFahrenheit(40)) //104





// 4. Write a function to find the area of a given Rectangle

// const rectangle = (a,b) =>{
//     return a*b;
// }
// console.log(rectangle(4,6));



// 5. reverse num 1 to 10

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }


// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }


// function number (){
//     let i = 1;
//     for(let i = 1; i <= 10; i++){
//         console.log(i);
//     }
//     return i;
// }
// number();


// function number (){
//     let i = 1;
// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }
//     return i;
// }
// number();






// Write a function to check if a number is Prime
// Function `checkPrime()` return Boolean value based on whether the number is Prime or not.


// function primenumber() {

//     let n = 20;
//     let x = 2;
//     let flag;

//     for (let i = 2; i <= n; i++) {
//         flag = true;
//         for (let x = 2; x <= i - 1; x++) {
//             if (i % x == 0) {
//                 flag = false;
//                 break;
//             }
//         } if (flag) {
//             console.log(i);
//         }

//     }
// }

// primenumber();



