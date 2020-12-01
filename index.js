console.log("@copyright_Pratim");
var readlineSync = require("readline-sync");
var chalk = require('chalk');
var userName = readlineSync.question(chalk.bold.greenBright("What is your name ?"));
console.log(chalk.red(`Hi ${userName} 😄 `));
console.log(chalk.bold.yellow("Welcome to Pratim's Quiz on Movie Dialouges 😵"));
console.log(chalk.bold.green("              Lets go         "));
console.log(chalk.red('            **********       '));

var score = 0;

var questionBank=[
 { 
   question:
  
   `1.Which President said this dialouge "Bade Bade desho mein aisi choti choti batein hoti rehti cenorita" 
   a:Barack Obama 
   b:Putin 
   c:Xi Jinping
   d:Ram Nath Kovind`,
   answer : `a`
 },
  { 
   question:
   `2.My mama always said you got to put the past behind you before you can move on belongs to 
   a:Remember Me
   b:The Vow 
   c:Forest Gump
   d:Blue Valentine`,
   answer : `c`
 },
  { 
   question: 
   `3.Oh yes, the past can hurt.But you either run from it, or learn from it is from
   a:Tarzen 
   b:The Lion King 
   c:Zumbo
   d:Ben 10`,
   answer : `b`
 },
  { 
   question:
  
   `4.Basanti in kutto ke samne maat nachna is a famous dialouge from
   a:Race 3 
   b:Sholay
   c:ABCD
   d:Barfi`,
   answer : `b`
 },
  { 
   question:
   `5.Picture abhi baaki hai mere dost is srk famous dialouge from
   a:Chennai Express
   b:Ra One 
   c:Zero
   d:Om Shanti Om`,
   answer : `d`
 }
];

function play(questions,answers){
  var useraswers = readlineSync.question(questions);
  if(useraswers === answers){
    console.log( chalk.bold.yellow('You choosed :') ,useraswers.toUpperCase());
    console.log(chalk.bold.green('You are Right ✔'));
    score++;
  }else{
    console.log(chalk.bold.redBright('You are wrong ❌'));
    console.log( chalk.bold.magenta('You choosed :') ,useraswers.toUpperCase());
    score--;
  }
  console.log(chalk.bold.blue('Your Score :'),score);
  console.log('-------------')
}
for (var i =0 ; i< questionBank.length ; i++){
  var questions = questionBank[i];
  play(questions.question,questions.answer)
  yay();
}

function yay(){
  if(score === 5){
    console.log(chalk.bold.red("Yay You scored Full Marks Congrats"))
  }
}
 console.log(chalk.bold.cyanBright("Hope you enjoyed the quizzz", userName.toUpperCase()));
 console.log(chalk.bold.yellowBright(`Your Highest Score is : ${score}`));
 console.log(chalk.bold.blue("Byyy....."))
 

 
