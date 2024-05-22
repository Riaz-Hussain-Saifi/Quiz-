#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Welcome message
let Developer: string = "Saifi Developer's";
let quiz: string = "Quiz";
console.log(
  chalk.blueBright(
    `\n\t Welcome to the ${chalk.yellowBright(Developer)} ${chalk.greenBright(
      quiz
    )} \n`
  )
);

// Array of questions and their choices
const quizQuestions = [
  {
    name: "Q1",
    message: "What is TypeScript?",
    choices: [
      "A. A CSS framework",
      "B. A server-side language",
      "C. A superset of JavaScript",
      "D. A database query language",
    ],
    correctAnswer: "C. A superset of JavaScript",
  },
  {
    name: "Q2",
    message: "Which of the following is a feature of TypeScript?",
    choices: [
      "A. Dynamic typing",
      "B. Static typing",
      "C. Client-side rendering",
      "D. Inline styles",
    ],
    correctAnswer: "B. Static typing",
  },
  {
    name: "Q3",
    message: "How do you define an interface in TypeScript?",
    choices: [
      "A. class InterfaceName {}",
      "B. interface InterfaceName {}",
      "C. type InterfaceName = {}",
      "D. def InterfaceName {}",
    ],
    correctAnswer: "B. interface InterfaceName {}",
  },
  {
    name: "Q4",
    message: "What is the file extension for TypeScript files?",
    choices: ["A. .ts", "B. .js", "C. .tsx", "D. .jsx"],
    correctAnswer: "A. .ts",
  },
  {
    name: "Q5",
    message: "How do you compile a TypeScript file to JavaScript?",
    choices: [
      "A. tsc file.ts",
      "B. ts file.ts",
      "C. compile file.ts",
      "D. tscompile file.ts",
    ],
    correctAnswer: "A. tsc file.ts",
  },
  {
    name: "Q6",
    message: "Which keyword is used to declare a variable in TypeScript?",
    choices: ["A. let", "B. var", "C. const", "D. All of the above"],
    correctAnswer: "D. All of the above",
  },
  {
    name: "Q7",
    message: "How do you specify a function's return type in TypeScript?",
    choices: [
      "A. function name(): Type {}",
      "B. function name: Type {}",
      "C. function name -> Type {}",
      "D. function name:Type() {}",
    ],
    correctAnswer: "A. function name(): Type {}",
  },
  {
    name: "Q8",
    message: "What is the use of the readonly modifier in TypeScript?",
    choices: [
      "A. To create a variable that can be modified anywhere",
      "B. To create a variable that can be modified only within a class",
      "C. To create a variable that cannot be modified after its initial assignment",
      "D. To create a variable that can only be read by certain functions",
    ],
    correctAnswer:
      "C. To create a variable that cannot be modified after its initial assignment",
  },
  {
    name: "Q9",
    message: "Which of the following types is not a basic type in TypeScript?",
    choices: ["A. string", "B. boolean", "C. number", "D. tuple"],
    correctAnswer: "D. tuple",
  },
  {
    name: "Q10",
    message: "How do you install TypeScript using npm?",
    choices: [
      "A. npm install -g typescript",
      "B. npm install -g ts",
      "C. npm install -g ts-compiler",
      "D. npm install -g ts-node",
    ],
    correctAnswer: "A. npm install -g typescript",
  },
];

// Function to prompt questions and check answers
async function runQuiz() {
  let score = 0;
  const pointsPerQuestion = 5;
  const passingScore = 40;

  const user = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Enter your name?",
    },
    {
      name: "age",
      type: "input",
      message: "Enter your age? ",
    }
  ]);

  console.log(`\n`);
  

  for (const question of quizQuestions) {
    const answer = await inquirer.prompt([
      {
        name: "answer",
        type: "list",
        message: question.message,
        choices: question.choices,
      },
    ]);

    if (answer.answer === question.correctAnswer) {
      console.log(chalk.green("Correct! \n"));
      score += pointsPerQuestion;
    } else {
      console.log(chalk.red("Wrong! \n"));
    }
  }

  console.log(
    chalk.blue(
      `\n\t Dear ${chalk.cyanBright(user.name)} age of ${chalk.green(user.age)}, you got ${chalk.greenBright(
        score / pointsPerQuestion
      )} out of ${chalk.yellowBright(quizQuestions.length)} correct!`
    )
  );

  if (score >= passingScore) {
    console.log(
      chalk.greenBright(
        `\n\t Dear ${chalk.cyanBright(user.name)} age of ${chalk.green(
          user.age
        )} you are passed, your score is ${chalk.yellowBright(score)}.`
      )
    );
  } else {
    console.log(
      chalk.redBright(
        `Dear ${chalk.cyanBright(user.name)} age of ${chalk.green(
          user.age
        )} you are failed, your score is ${chalk.yellowBright(
          score
        )}. You need a minimum score of ${chalk.greenBright(
          passingScore
        )} to pass. \n`
      )
    );
  }
  console.log(
    chalk.bgMagenta(
      `\t\n\t/Thank you for using ${chalk.bgGreenBright(
        Developer
      )} ${chalk.bgCyan(quiz)} \n`
    )
  );

}

// Run the quiz
runQuiz();
