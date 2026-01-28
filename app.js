console.log("prompt");
console.log("response");

person = prompt("please enter a valid number");
while (isNaN(person)) {

}
console.log("The number you entered is: " + person);
alert("The number you entered is: " + person);






let gamble=false;
let money=20;

gamblingMoney = prompt("Do you want to gamble your life away?")
// Main gambling loop
do {
    // Ask the user if they want to gamble
    // Loop until a valid response is given
    // Ask how much money they want to gamble
    // Loop until they run out of money/decide to stop gambling/   win big
   while (gamble==false) { 
        if (gamblingMoney.toLowerCase() == "yes") {
             gamble=true;
             money = parseInt(prompt("How much money do you want to gamble?"));
        } else if (gamblingMoney.toLowerCase() == "no") {
             alert("You chose not to gamble. Goodbye!");
             break;
        } else {
             gamblingMoney = prompt("Please answer 'yes' or 'no'. Do you want to gamble your life away?");
        }
     }
    while (money > 0) {
          let bet = parseInt(prompt("You have $" + money + ". How much do you want to bet?"));
          if (bet > money) { // If the bet is higher than what you actually have it wont work due to reality
                 alert("You cannot bet more than you have!");
                 continue;
          }
          let outcome = Math.random() < 0.5 ? "win" : "lose"; //random generator of if you could win
          if (outcome == "win") {
                 money += bet;
                 alert("You won! You now have $" + money + ".");`1`
          } else {
                 money -= bet;
                 alert("You lost! You now have $" + money + ".");
          }

    
}
}
 while (money > 0);
if (money <= 0) {
    alert("You are out of money! Game over.");
    gamble = false;
}

