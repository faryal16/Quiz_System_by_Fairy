#! /usr/env/node
import inquirer from "inquirer";
import chalk from "chalk";
//welcome message
console.log(chalk.bold.magenta("\n\t~~~~~~~~ Welcome To My Project ~~~~~~~~~\t\n"));
console.log(chalk.bold.magenta("\n\t\t~~~~~~ QUIZ SYSTEM ~~~~~~\n"));
console.log("^".repeat(50));
// make a object
let quiz = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: chalk.rgb(255, 125, 0)(`\nWhat are the three main 'simple types' in TypeScript?\n`),
        choices: ["A)Object,Array,Symbol", "B)Object,String,Number", "C)Boolean,Number,string", "D)Array,Object,Boolean"]
        // C)boolean ,Number,String
    },
    {
        name: "Question_2",
        type: "list",
        message: chalk.rgb(255, 125, 0)(`\nWho developed TypeScript language?\n`),
        choices: ["A)Apple", "B)IBM", "C)Microsoft", "D)Google"]
        //    "C)Microsoft"
    },
    {
        name: "Question_3",
        type: "list",
        message: chalk.rgb(255, 125, 0)(`\nWhat are variables in Typescript?\n`),
        choices: ["A)variable name should contain alphabets and numeric digits",
            "B)A variable name cannot begin with a digit",
            "C)It cannot contain spaces and special characters except underscore (_) and dollar ($) sign",
            "D)All of the above "]
        //  "D)All of the above 
    },
    {
        name: "Question_4",
        type: "list",
        message: chalk.rgb(255, 125, 0)("\nWhat type of assignment is this variable, 'const fullName: string = 'Dylan Israel';'?\n"),
        choices: ["A)Implicit", "B)Explicit", "C)Both (A) and (B)", "D)None of the Above"]
        // "B)Explicit"
    },
    {
        name: "Question_5",
        type: "list",
        message: chalk.rgb(255, 125, 0)("\nWhat is the purpose of the type keyword in TypeScript?\n"),
        choices: ["A)To define a new type", "B)To define a new class", "C)To define a new function",
            "D)To define a new variable"]
        //A) To define a new type
    }
]);
let score = 0;
//using switch case
switch (quiz.Question_1) {
    case "C)Boolean,Number,string":
        console.log(chalk.bold.green("\n\t1. CORRECT!!\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("\n\t1. INCORRECT!!\t\n"));
}
switch (quiz.Question_2) {
    case "C)Microsoft":
        console.log(chalk.bold.green("\n\t2. CORRECT!!\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("\n\t2. INCORRECT!!\t\n"));
}
switch (quiz.Question_3) {
    case "D)All of the above ":
        console.log(chalk.bold.green("\n\t3. CORRECT!!\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("\n\t3. INCORRECT!!\t\n"));
}
switch (quiz.Question_4) {
    case "B)Explicit":
        console.log(chalk.bold.green("\n\t4. CORRECT!!\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("\n\t4. INCORRECT!!\t\n"));
}
switch (quiz.Question_5) {
    case "A)To define a new type":
        console.log(chalk.bold.green("\n\t5. CORRECT!!\t\n"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("\n\t5. INCORRECT!!\t\n"));
}
console.log(chalk.bold.rgb(255, 51, 102)(`Score: ${score}\n`));
console.log("^".repeat(50));
