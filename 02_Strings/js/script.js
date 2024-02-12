console.log("DAY1 JAVASCRIPT Strings");

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
 *  1.Iteration ==>TRADITONAL FOR ,FOREACH, FOR IN,FOR OF
 *  2.Condition==>if
 *  3. Frame the Condition (person.gender==="male")
 */


for (var i = 0; i < persons.length; i++) {
    if (persons[i].gender.toLowerCase() == "male") {
        console.log(persons[i]);
    }
}

/**
 *  1.Display List of objects  age Greater 30  
 *  2.Display List of Objects   name starts with "A"  and "B"
 *  3.Complete All Condional
 *         if
 *         if else
 *         if else if 
 *         nested 
 *         ladder if 
 * 
 * 
 * 4.Complete All Looping Statements
 *            For
 *            while
 *            Do while
 * 
 *  
 * 
 */


persons.forEach((person) => {
    // console.log(person.name.toLowerCase());
    // console.log(person.name.toUpperCase());
    // console.log(person.profession.length)
    // console.log(person.profession.trim());
    // console.log("-----------------------------------")
    //console.log(person.name.substring(0, 3))
    // console.log(person.name.concat(person.profession).toUpperCase())
    //console.log(person.name.startsWith("A"))//boolean true
    // console.log(person.profession.endsWith("r"))//boolean true
    //console.log(person.profession.charAt(1))//boolean true
})

/***
 * 
 *  lowercase
 *  uppercase
 *  trimEnd
 *  trimStart
 *  trim()
 */