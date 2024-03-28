#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 20000;
let myPin = 7272;
console.log(`Your Current Balance is ${myBalance}`);

let pinAnswer =await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code."
        
    }
]);


if (pinAnswer.pin === myPin){
    console.log("Your Pin Code is Correct!!!");

    let operationAns = await inquirer.prompt([
        {
            name: "operator",
            type: "list",
            message: "Please select your operator",
            choices: ["Withdraw Amount", "Check Balance"] 
        }
    ]);
    
    if (operationAns.operator === "Withdraw Amount" ){
        let amountAns = await inquirer.prompt([
            {
                name : "ammount",
                type : "number",
                message : "Enter the ammount you want to withdraw" 
            }
        ]);

        if (amountAns.ammount > myBalance){
            console.log("Insufficient Balance");
        }

        else {
            myBalance -= amountAns.ammount;
            console.log("Withdraw Successfully");
            console.log(`Your remaining balance is ${myBalance}`);
         };

         }

         else if (operationAns.operator === "Check Balance"){
            console.log(`Your Account Balance is ${myBalance}`);
        }  
}
    else {
        console.log("Incorrect pin code");
}

    