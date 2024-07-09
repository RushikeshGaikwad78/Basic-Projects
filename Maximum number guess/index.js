let targetNum = Math.floor(Math.random()*10);

let guess = 1;

let input = parseInt(prompt("Enter your number:"));

while(!input)
{
    input = parseInt(prompt("Enter a valid number:"))
}

while(input !== targetNum)
{
    guess ++;
    if (input > targetNum)
    {
        console.log("Too high!!");
        input = parseInt(prompt("Enter your number:"));
    }
    else
    {
        console.log("Too low!!");
        input = parseInt(prompt("Enter your number:"));
    }
}

console.log("YOU WIN!!!");
console.log(`Guesses you took are ${guess}`)


