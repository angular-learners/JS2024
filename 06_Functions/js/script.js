console.log("JS Functions");


/**
 *  1.Function with Parameters
 *  2.Function Without Paramters
 *  3.Function With Paramters and return type
 *  4.Function without Paramters and without return type
 */


function printNumbers() {
    // var limit = prompt("Enter limit");
    /**
     * Default Nature of prompt value is string
     * so we need to convert string to Number
     */
    var limit = Number(prompt("Enter limit"));
    /**
     * Steps
     *  starting point=1,endingpoint limit
     */

    for (var i = 1; i <= limit; i++) {
        console.log(i);
    }
}

//printNumbers();

/**
 * 
 *  Q2: Give a number
 *  from input ,check Wheather number is even or Not
 *  using functions
 * 
 */

function printEvenOrOdd() {
    /**
     * Steps
     * 1.Prompt
     * 2.Create a variable and Store Prompt value
     * 3.Check the Prompt value either even or odd
     */

    var num = Number(prompt("Enter any Value"));
    if (num % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }

}

//printEvenOrOdd();


/**
 * 
 * Q3:Print Wheater Postive or Negative Number

 * sample Input:-1
 * Output:Negative Number
 * sample Input:1
 * Output:Postive Number
 */

function isPostiveOrNegativeNumber() {
    var number = Number(prompt("Enter any number"));
    if (number >= 0) {
        console.log("Postive Number");
    } else {
        console.log("Negative Number");
    }
}
//isPostiveOrNegativeNumber();


/**
 * Add two numbers
 * 
 */

function add(num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
}
// add(10, 20);



/***
 * 
 *   1.Create Bank Account with some Feilds
 *   2.Check Wheater account number is Valid Or Not
 *   3.Deposit Money
 *   4.With Draw Money
 *   5.Show balance
 * 
 * 
 */

function createAccount(accountNumber, acccountHolderName) {
    var accountNumberAsString = accountNumber.toString();
    var accountNumberLength = accountNumberAsString.length;
    if (accountNumberLength == 10) {
        console.log('AcccontNumber:' + accountNumber);
        console.log('Name:' + acccountHolderName);
        var intialBalance = 5000;
        var pinNumber = 2352;
        var selectOption = Number(prompt("1.Deposit 2.Withdraw 3.My Balance"));
        var promptPin = Number(prompt("Enter Your Pin"))
        if (promptPin === pinNumber) {
            switch (selectOption) {
                case 1:
                    var amount = Number(prompt("Enter amount to deposit"));
                    depositAmount(amount, intialBalance);
                    break;
                case 2:
                    var amount = Number(prompt("Enter amount to Withdraw"));
                    withDrawAmount(amount, intialBalance);
                    break;
                case 3:
                    console.log("My Balance:" + intialBalance);
                    break;
            }
        } else {
            console.log("Invalid PIN")
        }

    } else {
        console.log("Invalid Account Number");
    }
}
createAccount(1001000010, "Sai Kumar");

function withDrawAmount(wAmount, intialBalance) {
    var myBalance = intialBalance - wAmount;
    console.log("Witdrawn Successfully");
    console.log("MyBalance:" + myBalance);
}


function depositAmount(amount, intialBalance) {
    intialBalance = intialBalance + amount;
    console.log("Deposited Successfully");
    console.log("My Balance:" + intialBalance);
}

/**
 *  HINT:: BANK NAME,CARD YEAR
 *  SBI , ICICI AXIS
 *
 */
/**
 *
 *  Insert Card
 *  Card Insterted Sucessfully
 *  Validing
 * 2022
 *  2024
 *  Card Verified Successfully
 *  Car Expired
 *
 *
 */

//(SBI,2024)