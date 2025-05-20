function getComputerChoice(){

function getMathInteger() {
  return Math.floor(Math.random() * 3);
}
const randomNumber= getMathInteger()

if (randomNumber===0) {
    return("Rock!")
}
else if (randomNumber===1) {
    return("Paper!")
}
else {
    return ("Scissors!")
}
}
console.log(getComputerChoice())