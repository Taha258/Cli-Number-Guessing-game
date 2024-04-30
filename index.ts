#! /usr/bin/env node 
import inquirer from "inquirer";
console.log("\n\t Wellcome to Cli Number Guessing Game \n");

const randomNumber = Math.floor(Math.random() * 3 + 1);
const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Enter your guess number(Number Limit from 1 to 3).",
    },
]);
//Using if statement 

if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulation you guess a correct number");
}else{
    console.log("Sorry,you guess a wrong number.");  
}
