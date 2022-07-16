import {playSound, showLetter, isLetter, randomLetter} from "./user.js"

document.querySelector(".start-btn").addEventListener("click", function(){
    let element =document.querySelector(".result");
    element.innerHTML = "😉";
    const letterToGuess = randomLetter();
    playSound(letterToGuess)
    document.addEventListener("keydown", function(event){
        if(isLetter(event.key)){
            playSound(event.key);
            showLetter(event.key);
            if(letterToGuess == event.key) {
                element.style.color = "green";
                element.innerHTML = "Success ;)";
                return;
            } else {
                element.style.color = "red";
                element.innerHTML = "Correct answer is <strong>" + letterToGuess + 
                "</strong>. Next time you will get it ;)";
                return;
            }
        }
      });
})

