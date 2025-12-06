// QNO.1
let n = Number (prompt("Enter a number:"));
sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first " + n + " natural numbers is: " + sum);

// QNO.2 

let a = Number(prompt("enter 1st number"));
let b = Number(prompt("enter 2nd nmber"));
let sum = a + b
alert ("the sum of two no. is " + sum);

// Qno. 3

let m = +prompt("enter strating No.");
let n = +prompt("enter ending No.");
sum = 0;

for (let i=m ; i <= n; i++){
    sum += i;
}
console.log( sum)

//qno. 4
let m = +prompt("Enter a number");
let oddSum = 0;

for (let i = 1; i <= m; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        oddSum += i;
    }
}

console.log("Sum of odd numbers:", oddSum);

