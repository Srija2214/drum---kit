const drums = document.getElementsByClassName("drum");

const handleClick = (event) => {
  const clickedButton = event.target.textContent;
  makeSound(clickedButton);
};

const handleKeyPress = (event) => {
  const keyPressed = event.key;
  makeSound(keyPressed);
};

for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", handleClick);
}

document.addEventListener("keypress", handleKeyPress);

const makeSound = (key) => {
  switch (key) {
    case "w":
      const tom1 = new Audio(/sounds/tom1.mp3);
      tom1.play();
      break;
    case "a":
      const tom2 = new Audio(/sounds/tom2.mp3);
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio(/sounds/tom3.mp3);
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio(/sounds/tom4.mp3);
      tom4.play();
      break;
    case "j":
      const snare = new Audio(/sounds/snare.mp3);
      snare.play();
      break;
    case "k":
      const crash = new Audio(/sounds/crash.mp3);
      crash.play();
      break;
    case "l":
      const kick = new Audio(/sounds/kick.mp3);
      kick.play();
      break;
    default:
      break;
  }
};