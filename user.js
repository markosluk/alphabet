export function playSound(name){
    const sound = new Audio("sounds/"+ name +".mp3");
    sound.play();
}
export function showLetter(letter){
  let element = document.getElementsByClassName("letter-box")[0];
  element.innerHTML = letter;
  setTimeout(function(){
        element.innerHTML="";
  }, 2000)
}
export function isLetter(char){
  return (char.length == 1) && (/[a-z]/i).test(char);
}
export function randomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}