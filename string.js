// JavaScript String is a sequence of characters, typically used to represent text. It is enclosed in single or double quotes and supports various methods for text manipulation.

// 1. Using Template Literals (String Interpolation)
// let str = 'Template Litral String';
// let newStr = `String created using ${str}`;
// console.log(newStr);


2.// Create Empty Strign with Single Quotes
// let str1 = '';
// Create Empty Strign with Double Quotes
// let str2 = "";

// let str1 = ''; 
// let str2 = ""; 
// console.log("Empty String with Single Quotes: " + str1); 
// console.log("Empty String with Double Quotes: " + str2);


// Basic Operations on JavaScript Strings

// 1.Length

// let str = 'JavaScript'; 
// let len = str.length; 
// console.log("String Length: " + len);

// 2. String Concatenation

// let str1 = 'Vanilla'; 
// let str2 = 'Icecream'; 
// let result = str1 + str2; 
// console.log("Concatenated String: " + result);


// 3. Escape Characters

// \' - Inserts a single quote;
// \" - Inserts a double quote ;
// \\ - Inserts a backslash;

// const str1 = "\'Let\' others do there work"; 
// const str2 = "\"Let\" others do there work"; 
// const str3 = "\\Let\\ others do there work"; 

// console.log(str1); 
// console.log(str2); 
// console.log(str3);



// 4. Find Substring of a String
// substring(starting index, length);

// let str = 'JavaScript Tutorial'; 
// let substr = str.substring(0, 10); 
// console.log(substr);



// 5. Convert String to Uppercase and Lowercase
// toUpperCase();
// toLowerCase();


// let str = 'JavaScript'; 
// let upperCase = str.toUpperCase(); 
// let lowerCase = str.toLowerCase(); 

// console.log(upperCase); 
// console.log(lowerCase);


// 6. Find the index of a substring within a string using indexOf() method.

// let sen = "Let's find Divya, where she is?"
// let searchStr = sen.indexOf("Divya");
// console.log(searchStr);



// 7. Replace occurrences of a substring with another using replace() method.
// let str = "Let's find Divya, where she is?"; 
// let newStr = str.replace('Divya', 'Shubh'); 
// newStr = newStr.replace("she","he")

// console.log(newStr);



// 8.Trimming Whitespace from String
// Remove leading and trailing whitespaces using trim() method.

// let str = '        JavaScript        ';
// let newStr = str.trim();

// console.log(newStr);



// 9. Access Characters from String
// Access individual characters in a string using bracket notation and charAt() method.

// let str = "new text space"

// let newStr = str.charAt(3);
// console.log(newStr);


// 10.String Comparison in JavaScript
// There are some inbuilt methods that can be used to compare strings such as 
// the equality operator and another like localeCompare() method.
// let str1 = "John"; 
// let str2 = new String("John"); 

// console.log(str1 == str2); 
// console.log(str1.localeCompare(str2));


// 11.slice()
// Define a string variable 
// let A = 'Keep it up';

// let b = A.slice(0, 4);
// let c = A.slice(5, 7);
// let d = A.slice(8);

// console.log(b);
// console.log(c);
// console.log(d);



// let str = "Mind, Power, Soul";

// let part = str.replace("Power", "Space");
// part = str.replace("Soul", "Wind")

// console.log(part);


// trim() Method
// let str = 'oldlady    ';
// let newStr = 'oldlady was standing';


// let newStr2 = str.trim();

// console.log(str.length);
// console.log(newStr2.length)




// trimStart() 
// Define a string variable 
// let str = "      Soul";
// console.log(str);

// let newStr1 = str.trimStart();

// console.log(newStr1);



// trimEnd()
// Define a string variable 
// let str = "Purple     ";

// console.log(str);
// let newStr = str.trimEnd();
// console.log(newStr);



// padStart()
// pad a string with another string until it reaches the given length. The padding is applied from the left end of the string.

// let str = '1234'
// let newStr = str.padStart(8,0);
// let newStr = str.padStart(length,object to be passed);
// console.log(newStr);


// let a = 'abc';
// let b = a.padStart(5);

// console.log(b);



// padEnd()
// let a = 'abc';
// let b = a.padEnd(5);

// console.log(b);



// let str = 'abc';
// let newStr = str.padEnd(5,'*');

// console.log(newStr);



// split()
// split([separator, [,limit]]);

// let str = 'JavaScript String split';
// let substrings = str.split(' ');

// console.log(substrings);

// let str = 'JavaScript String split';
// let substrings = str.split(' ',1);

// console.log(substrings);

// let a = "Good Morning! How are you? This is John. John is my friend.";
// let b = a.split(/[!,?,.]/);

// console.log(b);


// repeat()
// it repeacts the sentence

// let str = "India won the match";
// let newStr = str.repeat(2);

// console.log(`${newStr}\n`);
