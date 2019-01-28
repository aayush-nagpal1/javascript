function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);

}

function guessTheNumber(){
    let userChoice = document.getElementById("input").value;
    let random = getRandom(1,10);
    if(userChoice === random) {
        alert("Good work");
    }
    else{
        alert("Not matched");
    }
}