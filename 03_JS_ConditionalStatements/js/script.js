console.log("DAY2 JAVASCRIPT Conditional Statements");


/* SIMPLE IF */

var x = 10;

if (x > 5) {
    console.log("X is Greater than 5");//statement
}


var age = 18;

if (age >= 18) console.log("You are Eligible for Voting");



var dob = 2001;

if (dob <= 1999) {
    console.log("I am not a 20's KID");
}







var persons = [
    {
        name: "Alice",
        age: 30,
        gender: "female",
        profession: "engineer"
    },
    {
        name: "Bob",
        age: 25,
        gender: "male",
        profession: "teacher"
    },
    {
        name: "Charlie",
        age: 35,
        gender: "male",
        profession: "doctor"
    },
    {
        name: "Diana",
        age: 40,
        gender: "female",
        profession: "lawyer"
    },
    {
        name: "Eve",
        age: 22,
        gender: "female",
        profession: "student"
    }
];


/**
 * 
 *  Q1: Print Whose Profession is Doctor
 *  Q2: Print Whose Profession is Laywer  & Teacher
 * 
 *   steps
 *   1.forEach Iterate
 *   2.if Condition  (profession=="doctor")
 * 
 */



persons.forEach(person => {
    if (person.profession.toLowerCase() == "doctor") {
        console.log(person);
    }
});

persons.forEach(person => {
    var laywer = person.profession.toLowerCase();
    var teacher = person.profession.toLowerCase();

    if (laywer == "lawyer" || teacher == "teacher") {
        console.log(person);
    }
})

var no = 10;


if (no > 0) {
    console.log("The no is true")
} else {
    console.log("The no is false");
}


var amount = 112;

if (amount >= 110) {
    console.log("You are able to buy Oil")
} else {
    console.log("Not Enough Money")
}