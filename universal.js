const prompt = require('prompt-sync')();
const diceRoll = function(sides) {
  const dice = Math.floor(Math.random() * sides + 1);

  return dice
}
const arraySelection = function(array) {
  let selection = array[Math.floor(Math.random() * array.length)];

  return selection;
}
const sleep = function (milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
  currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
const pressToContinue = function() {
  const buttonPress = prompt("Press enter to continue...\n")
}
module.exports.pressToContinue = pressToContinue
module.exports.sleep = sleep
module.exports.arraySelection = arraySelection
module.exports.diceRoll = diceRoll
