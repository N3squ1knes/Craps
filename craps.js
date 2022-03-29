var wins = 0
//this stores the wins
var losses= 0
//this stores the losses
var ties = 0
//this stores the ties

function playCraps()
{
    console.log("playCraps() started...")
    var die1 = 6 * Math.random(); 
    //stores the value for die1
    var roundDie1 = Math.ceil(die1); 
    //this is the value that gets shown to the user die1
    console.log("The rounded number is " + roundDie1); 
    //This is shown on the console of the web page
    document.getElementById("die1Res").innerHTML = "die 1: " + roundDie1; 
    //This is to show it on the main web page
    var die2 = 6 * Math.random();
    //stores value for die2
    var roundDie2 = Math.ceil(die2); 
    //this is the value that gets shown to the user for die2
    console.log("The rounded number is " + roundDie2); 
    //This is shown on the console of the web page
    document.getElementById("die2Res").innerHTML = "die 2: " + roundDie2; 
    //This is to show it on the main web page
    var sum = roundDie1 + roundDie2; 
    //stores value for the sum of die1 and die2
    console.log("the sum of the two dice rolls is: " + sum); 
    //This is shown on the console web page
    document.getElementById("sumRes").innerHTML = "sum: " + sum; 
    //this is to show it on the main web page
    if(sum == 7 || sum == 11) 
    //this determines if lost the game
    {
        document.getElementById("crapsRes").innerHTML = "CRaPS, you lose. :)";
        losses = losses + 1;
        document.getElementById("Lose").innerHTML = "Your losses: " + losses;
    }
    else if (roundDie1 == roundDie2 && roundDie1 % 2 == 0)
    //this will determine if you won the game
    {
        document.getElementById("crapsRes").innerHTML = "Doubles, you won";
        wins = wins + 1;
        document.getElementById("Wins").innerHTML = "Your wins: " + wins;
    }
    else 
    //this will determine if you won the game
    {
        document.getElementById("crapsRes").innerHTML = "Tie. Sorry, try again :(";
        ties = ties + 1;
        document.getElementById("Ties").innerHTML = "Your Ties: " + ties;
    }

}