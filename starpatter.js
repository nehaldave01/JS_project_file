// for(let i=1;i<=10;i++){
//     console.log(i);

// }

// for(let i=10;i>=1;i--){
//     console.log(i);
//     process.stdout.write(String(i))

// }



let a="*"
for(let i=1;i<=5;i++){

    for(let j=1;j<=i;j++){
process.stdout.write(a)
    }
console.log("");
}




// for(let i=5;i>=1;i--){

//     for(let j=1;j<=i;j++){
// process.stdout.write(a )
//     }
// console.log("");
// }



// for(let i=5; i>=1; i--){
//       for(let j=5; j>=1; j--){
//         process.stdout.write(a)
//       }
//       console.log("");
// }


// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
// process.stdout.write(a)
//     }
// console.log("");
// }
// for(let i=5;i>=1;i--){

//     for(let j=1;j<=i;j++){
// process.stdout.write(a)
//     }
// console.log("");
// }



// let rows = 5;
// let pattern = "";

// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       pattern += num;
//    }

//    pattern += "\n";
// }
// console.log(pattern);


// for(let a = 1; a <= 5; a++){
//     for(let i =1; i<=a; i++){
//         process.stdout.write(String(a));
//     }
//     console.log("");
// }



// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     let space  = '  ';
//     process.stdout.write(space.repeat((n-i)) + str.repeat(i) + "\n");
// }





// let n = 5;
// for (let i = n; i >= 1; i--) {
//     let str = "* ";
//     let space  = '  ';
//     process.stdout.write(space.repeat(n-i)+str.repeat(i) + "\n");
// }


// let rows = 5;
// let pattern = "";

// for (let n = 1; n <= rows; n++) {
//     // Inner Loop - I -> prints spaces
//     for (let space = 1; space <= rows - n; space++) {
//         pattern += " ";
//     }

//     // Inner Loop - II -> prints stars
//     for (let num = 1; num <= 2 * n - 1; num++) {
//         pattern += "*";
//     }
//     pattern += "\n";
// }

// process.stdout.write(pattern);













// let n = 5;
// for(let i=1; i<=n; i++){

// for(let j=1; j<=n-i; j++){
//     console.log(" ");
// }
// for(let j=1; j<=i; j++){
//     console.log("*");
// }
// console.log("\n");
// }

// let n=6
// for(let i=1;i<=n;i++){
//     let str="*"
//     let space= " "
//     process.stdout.write(space.repeat(n-i) + str.repeat(i)+"\n")
// }

