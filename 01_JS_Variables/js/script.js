console.log("DAY1 JAVASCRIPT VARIABLES");



var x = 10; //number
var y = 20; //number

console.log("The Addition of x ,y:" + (x + y));
console.log(typeof x)



var firstName = "John"; //string
var lastName = "Paul";  //string

console.log("Full Name is:" + (firstName + lastName));
console.log(typeof firstName)



var amount = 120000.0; //number
var totalMonths = 12;

console.log("Per Month Salary:" + (amount / 12));
/* Calculate Salary per month */

/** Boolean is about true / false */
var isQualified = true; //boolean
console.log("Qualified:" + isQualified);
console.log(typeof isQualified)

var isJsCompleted = false;
console.log("JS Completed:" + isJsCompleted)


/*Array */

var movies = ["RRR", "PUSHPA", "HANUMAN"];
console.log(typeof movies)

/*Object */

var person = {
    id: 1, firstName: "sai", lastName: "Kumar", email:
        "saikumar@gmail.com"
};

console.log(person);
console.log(person.firstName)
console.log(typeof person);


/* Array of Objects */

var persons = [
    {
        id: 1, firstName: "sai", lastName: "Kumar", email:
            "saikumar@gmail.com"
    },
    {
        id: 2, firstName: "vaibhav", lastName: "Kumar", email:
            "vaibhavkumar@gmail.com"
    }
];

console.log(persons);
console.log(typeof persons);