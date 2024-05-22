// let num = 10;
// while (num <= 5) {
//     console.log(num);
//     num++;
// }


// let a = 11;
// do {
//     if (a <= 10) {

//         console.log(a);
//     } else {
//         console.log("not found");
//     }

//     a++
// } while (a <= 5)

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// leap year/////////////////
 
// for loop//////

// let year=1500;
// while(year<=2000){
//     if (year%4===0 && (year%100!==0 || year%400===0)){
// console.log(year);
//         }
//         year++;
// }




// DO WHILE//////////////////////////////////
// let year = "1500";
// do{
// if(year % 4 == 0){
//    if(year % 100 == 0){
//        if(year % 400 == 0){
//             console.log(" a leap year");
//        }else{
//             console.log("not a leap year");
//        }
//    }else{
//      console.log("A leap year");
//    }
// }else{
//     console.log("Not a leap year");
// }
 
// }while(year<=2000)


// DO WHILE LOOP ///////////////////////////////
// let year = 1500;
// do{
//     if (year%4===0 && (year%100!==0 || year%400===0)){
//         console.log(year);
//     }
//     year++;
 
// }while(year<=2000)


// for loop////////////////////////////

// let year = 1500;

// for( year=1500; year <= 2024; year++){
//     if(year%4 === 0 && (year%100!==0 || year%400===0)){
//         console.log(year);   
//     }
// }




// EVEN OLD SITUATION IN WHILE////////////////////////

// let num = 1;
// while(num <= 100){
//     if(num%2 == 0){
//        console.log(num  + ` ${"it is a even number"}`);
//     }else{
//         console.log(num  + ` ${"it is a odd number"}`);
//     }
//     num++;
// }


// EVEN/////////////////////////////////
// let num = 2;
// while(num <= 100){
//     if(num % 2 == 0){
//         console.log(num);
//     }
//     num++;
// }

// ODD//////////////////////////////////
// let num = 5;
// while(num <= 100){
//     if(num % 2 != 0){
//         console.log(num);
//     }
//     num++;
// }




// EVEN OLD SITUATION IN DO WHILE////////////////////////

// let num = 3;

// do{
//    if(num % 2 == 0){
//        console.log(num + ` ${"is an even num"}`);
//    }else{
//        console.log(num + ` ${"is an odd num"}`);
//    }
//     num++;
// }while(num <= 100)


// do{
//     if(num % 2 == 0){
//        console.log(num + ` ${"is an even num"}`);
//     }
//     num++;

// }while(num <= 100)

// do{
//     if(num%2 != 0){
//         console.log(num + `${"is an odd num"}`);
//     }
//     num++;
// }while(num <= 100)


// EVEN OLD SITUATION IN For LOOP////////////////////////

// let num = 1;

// for(num=1; num<=50; num++){
//     if(num % 2 == 0){
//         console.log(num + ` ${"is an even num"}`);
//     }else{
//         console.log(num + ` ${"is an odd num"}`);
//     }
// }

// for(num=1; num<=50; num++){
//     if(num % 2 == 0){
//         console.log(num + ` ${"is an even num"}`);
//     }
// }

// for(num=1; num<=50; num++){
//     if(num%2 != 0){
//        console.log(num + ` ${"is an odd num"}`);
//     }   
// }

// PRIME NUMBER///////////////////////////

// let n = 20;
// let x = 2;
// let flag;

// for(let i = 2; i <= n; i++){
//     flag = true;
//     for(let x = 2; x <= i-1; x++){
//          if(i % x == 0){
//          flag = false;
//         break;
//         }
//     } if(flag){
//         console.log(i);
//     }
// }

// Write a JavaScript program that displays the largest integer among two integers./////////////4

// let num1 = 25;
// let num2 = 35;
// if(num1 > num2){
//     if(num2 > num1){
//          console.log("both are equal");
//     }else{
//          console.log(num1 + "is the largest");
//     }
// }else{
//     console.log(num2 + "is the largest");
// }






// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

// let a = -5;
// let b = -2;
// let c = -6;
// let d = 0;
// let e = -1;

// if(a>b && a>c && a>d && a>e){
//    console.log(a);
// } else if (b>a && b>c && b>d && b>e){
//     console.log(b);
// }else if(c>a && c>b && c>d && c>e){
//     console.log(c);
// }else if(d>a && d>b && d>c && d>e){
//     console.log(d);
// }else{
//     console.log(e);
// }






// Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :

// let n = 0;
// for(n = 0; n <= 15; n++){
//    if(n % 2 == 0){
//      console.log(n + ` ${"even number"}`);
//    }else{
//      console.log(n + ` ${"odd number"}`);
//    }
// }



// let thisIsAnArray = ["element1", "element2", "element3", "element4"];
// for (var i = 0; i < thisIsAnArray.length; i++) {
//   console.log(thisIsAnArray[i]);
// }






// let numbersArray = [1, 13, 22, 123, 49];
// let sum = 0;

// for (let i = 0; i < numbersArray.length; i++) {
//   sum = sum + numbersArray[i];
// }
// console.log("The sum is: " + sum);



