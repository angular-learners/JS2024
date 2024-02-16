console.log("DAY3 JAVASCRIPT Looping FOR");


/**
 *  1.Initilization & Declaration
 *  2.Condition
 *  3.Incriment or Decriment
 * 
 */

/**
 * Q1: Print 1-10  In Acending Order
 */
/**
 *  steps
 *  i=1  starting point,  i<=10    i=10  ending point, acending Order ++  (i+1)
 * 
 */

for (var i = 1; i <= 10; i++) {
    // console.log(i);
}

/**
 * Q2:Print even Numbers 1-10
 */

for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        //console.log(i);
    }
}

/**
 * Q3: Print Odd Numbers 1-10
 */


for (var i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        //console.log(i);
    }
}


/**
 * Q4:   Print 5 table                   5*1=5 ,5*2=10
 */
for (var i = 1; i <= 10; i++) {
    var table = 5;
    //console.log(table + "*" + i + "=" + (table * i));
}

/** Q:5
 *         *
 *         *
 *         *
 *         *
 *         *
 * 
 */
var stars = '';
for (var i = 0; i < 5; i++) {
    stars += '\n *';
}
//console.log(stars);




/**
 *    * * * * *    row=1 col=1
 *    * * * * *
      * * * * *
      * * * * *
      * * * * *
*/

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= 5; j++) {
        row += '* ';
    }
    // console.log("\n");
    // console.log(row)
}


/**           row=1, col= 5,row 2= col=4
 *    * 
 *    * * 
      * * *
      * * * * 
      * * * * *
*/
for (let row = 1; row <= 5; row++) {
    let rowNum = '';
    for (let col = 1; col <= row; col++) {
        rowNum += '* ';
    }
    // console.log("\n");
    // console.log(rowNum)
}


/**           row=1, col= 5,row 2= col=4
 *    * * * * * 
 *      * * * * 
          * * *
            * * 
              *
*/
for (let row = 5; row >= 1; row--) {
    let rowNum = '';
    for (let col = 1; col <= row; col++) {
        rowNum += '* ';
    }
    console.log("\n");
    console.log(rowNum)
}

/**           row=1, col= 5,row 2= col=4
 *    1
 *    1 2
 *    1 2 3
 *    1 2 3 4
 *    1 2 3 4 5
*/

for (let row = 1; row <= 5; row++) {
    let rowNum = '';
    for (let col = 1; col <= row; col++) {
        rowNum += col;
    }
    console.log("\n");
    console.log(" " + rowNum)
}

/***
 * 
 *       *
 *      * *
 *     * * *
 *    * * * * 
 *   * * * * *
 * 
 */
for (let i = 1; i <= 5; i++) {
    let pattern = '';
    // Adding spaces
    for (let j = 1; j <= 5 - i; j++) {
        pattern += ' ';
        // pattern = pattern + '';
    }
    // Adding asterisks
    for (let k = 1; k <= i; k++) {
        pattern += '* ';
        // pattern = pattern + "* ";
    }
    console.log(pattern);
}
// for (let i = 1; i <= 5; i++) {
//     let pattern = '';
//     // Adding spaces
//     for (let j = 1; j <= 5 - i; j++) {
//         pattern += ' ';
//     }
//     // Adding asterisks
//     for (let k = 1; k <= i; k++) {
//         pattern += '* ';
//     }
//     console.log(pattern);
// }

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

