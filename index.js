import {playSound, showLetter, isLetter} from "./user.js"

document.addEventListener("keydown", function(event){
    if(isLetter(event.key)){
        playSound(event.key);
        showLetter(event.key);
    }
  });
