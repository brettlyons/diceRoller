// function DiceRoller returns a random # between 1 and 6.
// snd iteration, DiceRoller ( param ) returns param #'s beween 1 and 6
// third iteration, DiceRoller ( param1, param2 ) returns param 1 random numbers between 1 and param2


//function DiceRoller1( ) {
  //return (Math.floor((Math.random()*6 + 1 ))) ; // this returns a number
//}
//console.log("" + DiceRoller());

//var DiceRoller2 = function ( quantDice ) {
  //var output = [];
  //for ( var i = 0 ; i < quantDice ; i++ ) {
    //output.push(Math.floor((Math.random()*6 + 1 )))
  //}
//return output;
//}
//console.log(DiceRoller2( 3, 10 ) + "");

function DiceRoller(numSides) {
  this.numDice = 1;
  this.sides = Number(numSides) || 6;
  this.output = []
  this.roll = function ( quantDice, localNumSides ) {
    this.output = [];
    this.numDice = quantDice || 1;
    this.sides = localNumSides || this.sides;
    for ( var i = 0 ; i < this.numDice ; i++ ) {
      this.output.push(Math.floor((Math.random()*this.sides + 1 )))
    }
  }
  this.hand = function () {
    console.log(this.output);
  }
}

var game = new DiceRoller();
game.hand();
console.log("+++");
game.roll();
game.hand();
console.log("+++");
game.roll(4);
game.hand();
console.log("+++ New Dice Roller");
var game = new DiceRoller(9);
game.hand();
game.roll(5);
console.log("+++");
game.hand();
console.log("Hand Length: " + game.output.length);
game.roll(4);
console.log("+++");
game.hand();
console.log("Hand Length: " + game.output.length);
game.roll(7, 10);
game.hand();
console.log("Hand Length: " + game.output.length);
console.log("+++");

