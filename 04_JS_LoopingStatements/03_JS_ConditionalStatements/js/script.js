console.log("DAY2 JAVASCRIPT Looping Statements");


var x = 1;// starting point 
var limit = 10; // ending point
while (x <= limit) {//condition
    //  console.log(x);// statement1  "prints the numbers"
    x++;//statement2              "incriments the x value"
}

/**
 * Q1:Print Even Numbers 1-20
 * 
 *  steps
 *  1.Intilization (starting point ==>1)
 *  2.Limit        (ending point ===> 20)
 *  3.Condition    (y<=20)
 *  4.Check even Condtion & print Only even
 *   (y%2==0)     % gives Remainder
 *  5.Incriment Or decriment
 */



var y = 1;// starting point 
var limit2 = 20; // ending point
while (y <= limit2) {//condition
    if (y % 2 == 0) {//checks wheather remainder is 0 or not
        console.log(y);// statement1  "prints the numbers"
    }
    y++;//statement2              "incriments the x value"
}




/**
 *  print 1-50
 *  print  multiple of 3  star
 *  print  mutiple  of 5  Good  star
 *  print multiple of 3 & 5 super star
 */
//if else  if
// 1
// 2
// Star
// 4
// Good Star
// Star
// 7
// 8
// Star
// Good star
// 11
// star
// 13
// 14
// Super Star


















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

