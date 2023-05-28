// create random number and change images for player1
var randomNumber1 = Math.floor(6 * Math.random()) + 1;
var randomImageSrc1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc1);

// create random number and change images for player2
var randomNumber2 = Math.floor(6 * Math.random()) + 1;
var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2);

// show the results
var result = ""
if (randomNumber1 > randomNumber2){
    result = "😊 Player1 Win"
} else if (randomNumber1 == randomNumber2){
    result = "Draw! 😎"
} else{
    result = "Player2 Win 😆"
}
document.querySelector("h1").innerHTML = result;

// refresh the webpage while making sounds
var audioElement = document.getElementById("audioElement");

const refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener("click", function() {
  audioElement.play();
  setTimeout(function() {
    location.reload();
  }, 1000);
});


