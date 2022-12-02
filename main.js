let userName = "Flor";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello");

const userQuestion = "she will write her entire essay today?";
console.log(`${userName} has asked if ${userQuestion}`);
//Above is the code for users, below is a random number generator which applies to the response made by thr eightBall variable.

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('My sources say no');
    break;
  case 6:
    console.log('Outlook not so good');
    break;
  case 7:
    console.log('Signs point to yes');
    break;
  default:
    console.log('I am broken right now. Ben?.');
    break;
}
// The code below is ommited due to it not working to serve the randomly generated number with the corresponding prompt...