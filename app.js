
let gamble=false;
let money = 2000;

gamblingMoney = prompt("Do you want to gamble your life away?")
// Main gambling loop
    // Ask the user if they want to gamble
    // Loop until a valid response is given
    // Ask how much money they want to gamble
    // Loop until they run out of money/decide to stop gambling/win big
   while (gamble===false) { 
        if (gamblingMoney.toLowerCase() == "yes") {
             gamble=true; // starts the game if you say yes to gambling`
           
        } else if (gamblingMoney.toLowerCase() == "no") { // Exit the game
             alert("You chose not to gamble. Goodbye loser!"); // gives a goodbye message if you follow throgh with not gambling
             money = 0;
             gamble===false;
             break;
        } else {
             gamblingMoney = prompt("Please answer 'yes' or 'no'. Do you want to gamble your life away?"); // if person doesn't answer yes or no it will keep asking for specific answers
        }
     }
    while (money > 0) {
          let bet = parseInt(prompt("You have $" + money + ". How much do you want to bet?"));
          if (bet > money) { // If the bet is higher than what you actually have it wont work due to reality
                 alert("You cannot bet more than you have!");
                 continue;
          }
          let outcome = Math.random() < 0.10 ? "win" : "lose"; //random generator of if you could win
          if (outcome == "win") {
                 money += bet
                 ;
                 alert("You won! You now have $" + money + ".");`1` // if you win it adds to your money
          } else {
                 money -= bet;
                 alert("You lost! You now have $" + money + "."); //if you lose it takes away from your money
          }

    
}

while (gamble===true);
alert("You are out of money! Game over."); // if you run out of money it ends the game
