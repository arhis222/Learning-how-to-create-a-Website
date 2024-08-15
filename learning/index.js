//console.log(`Hello from index.js`);
//console.log(`console writing is fun!`);

//window.alert(`I'm an alert!`);
//window.alert(`This is another alert!`);

/*
document.getElementById("myH1").textContent = `Hello from index.js!`;
document.getElementById("myP").textContent = `I'm in a p tag!`;

let age = 2**3 %2;
let price = 5.5;
let f_name = "Console"
let var_bool = true;

console.log(age);
console.log(`Your name is ${f_name} and You are ${age} years old!`); // you cant use " in this case"
console.log("type of age:", typeof age, "\ntype of price:", typeof price, "\ntype of name:", typeof f_name , "\ntype of var_bool:", typeof var_bool);
*/

document.getElementById("myH1").textContent = `Hello!`;
document.getElementById("mylabel").textContent = `username:`;

let step = 1; // to watch the step

document.getElementById("mysubmit").onclick = function() {
    let input = document.getElementById("myinput").value;
    if (step === 1) {
        console.log("username is", input);
        document.getElementById("myH1").textContent = `Hello ${input}!`;
        document.getElementById("mylabel").textContent = `password:`;
        document.getElementById("myinput").value = "";
        step = 2; // next step
    } else if (step === 2) {
        console.log("password is", input);
        document.getElementById("mylabel").textContent = `username:`;
        document.getElementById("myinput").value = "";
        step = 1; // return to step 1
    }
};

/*
let age = window.prompt("How old are you?"); //prompt always returns a string
age = Number(age);
age +=1; //if you dont use Number() it will concatenate the number with the string
console.log("Next year you will be", age);
*/

/*
let x = "essay";
let y = "essay";
let z = "essay";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);4
*/

//const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

/*
//PI = 0; //this will give an error because PI is a constant


radius = Number(window.prompt("Enter the radius of the circle:"));
circumference = 2 * PI * radius;
console.log(`The circumference of the circle is ${circumference}`);

*/

document.getElementById("calculateBtn").onclick = function() {
    radius = Number(document.getElementById("myinput2").value);
    circumference = 2 * PI * radius;
    document.getElementById("result").textContent = `The circumference of the circle is ${circumference}cm`;
    document.getElementById("myinput2").value = "";
}


/*
//ternary operator = condition ? true : false

let year = 2021;
let is_leap_year;

is_leap_year = (year % 4 === 0) ? "Yes" : "No";

console.log(`${year} is a leap year: ${is_leap_year}`);

*/

/*
let adress = "https://www.google.com";
adress = adress.replace("google", "youtube");
console.log(adress);

*/





