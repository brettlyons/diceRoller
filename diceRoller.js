// function diceRoller returns a random # between 1 and 6.
// snd iteration, diceRoller ( param ) returns param #'s beween 1 and 6
// third iteration, diceRoller ( param1, param2 ) returns param 1 random numbers between 1 and param2


//var diceRoller = function ( ) {
  //return (Math.floor((Math.random()*6 + 1 ))) ; // this returns a number
//}
//console.log("" + diceRoller());

//var diceRoller2 = function ( quantDice ) {
  //var output = [];
  //for ( var i = 0 ; i < quantDice ; i++ ) {
    //output.push(Math.floor((Math.random()*6 + 1 )))
  //}
//return output;
//}
//console.log(diceRoller2( 3, 10 ) + "");

var diceRoller3 = function ( quantDice, numSides ) {
  var sides = Number(numSides) || 6;
  console.log("quantDice: " + quantDice + "Sides: " + sides);
  var output = [];
  for ( var i = 0 ; i < quantDice ; i++ ) {
    output.push(Math.floor((Math.random()*sides + 1 )))
  }
return output;
}

console.log(diceRoller3( 3 ) + "");
console.log(diceRoller3( 3, 20 ) + "");

