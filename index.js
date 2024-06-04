function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
 
//Function to check who wins
function findWinner(dice1, dice2){
    if (dice1>dice2){
        return "🚩Player 1 wins!";
    }else if (dice2>dice1){
        return "Player 2 wins!🚩";
    }else{
        return "Draw!";
    }
}
 
function rollDice(){
    //Modify first image
    var img1 = document.querySelector(".img1");
    var rndInt1 = randomInt(1, 6)
    var newImg1 = "images/dice" + rndInt1.toString() + ".png";
    img1.src = newImg1;
 
    //Modify second image
    var img2 = document.querySelector(".img2");
    var rndInt2 = randomInt(1, 6)
    var newImg2 = "images/dice" + rndInt2.toString() + ".png";
    img2.src = newImg2;
 
    document.querySelector("div h1").innerHTML = findWinner(rndInt1, rndInt2)
    //console.log(findWinner(rndInt1,rndInt2))
    
}
 
//Here is the perfomance block that help us understand how the page came to be.
const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        //console.log(entry);
        if (entry.type === "reload") {
            rollDice();
        }
    });
});
 
observer.observe({ type: "navigation", buffered: true });