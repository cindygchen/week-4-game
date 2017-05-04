//Declare other variables
var winCount = 0;
var lossCount = 0;

// functions to pick a new number, change the scoreboard and print those changes
function reset() {
	number = Math.floor(Math.random()*50);
	score = 0;
	crystal1Value= Math.floor(Math.random()*5)+1;
	crystal2Value= Math.floor(Math.random()*5)+1;
	crystal3Value= Math.floor(Math.random()*10)+1;
	crystal4Value= Math.floor(Math.random()*10)+1;
}


// prints win, loss and score numbers
function print () {
	// document.getElementById("winCount").innerHTML = winCount;
	// document.getElementById("lossCount").innerHTML = lossCount;
	// document.getElementById("score").innerHTML = score; 
	// document.getElementById("number").innerHTML = number; 
	$(".score").html(score);
	$(".number").html(number);
	$(".wins").html("Wins:" + winCount);
	$(".losses").html("Losses:" + lossCount);
}


// Compared the computer generated number to the score
function compare() {
	if (score > number) {
		lose();
	}
	else if (score === number) {
		win();
	}
}

function win() {
	winCount ++;
	reset();
}

function lose() {
	lossCount ++;
	reset();
}

// Clicking crystals will change the score
 reset();
 print();

 $(".crystal1").on("click", function() {
 	score += crystal1Value;
 	compare();
 	print();
 });

  $(".crystal2").on("click", function() {
 	score += crystal2Value;
 	compare();
 	print();
 });

 $(".crystal3").on("click", function() {
 	score += crystal3Value;
 	compare();
 	print();
 });

  $(".crystal4").on("click", function() {
 	score += crystal4Value;
 	compare();
 	print();
 });