#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 20000;
let myPin = 7272;
console.log(chalk.grey.bold(`Your Current Balance is ${myBalance}`));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code."
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green.bold("Your Pin Code is Correct!!!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operator",
            type: "list",
            message: "Please select your operator",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operator === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "ammount",
                type: "number",
                message: "Enter the ammount you want to withdraw"
            }
        ]);
        if (amountAns.ammount > myBalance) {
            console.log(chalk.red.bold("Insufficient Balance"));
        }
        else {
            myBalance -= amountAns.ammount;
            console.log(chalk.blue.bold("Withdraw Successfully"));
            console.log(chalk.blue.bold(`Your remaining balance is ${myBalance}`));
        }
        ;
    }
    else if (operationAns.operator === "Check Balance") {
        console.log(chalk.green.bold(`Your Account Balance is ${myBalance}`));
    }
}
else {
    console.log(chalk.red("Incorrect pin code"));
}
