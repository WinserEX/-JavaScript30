function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //Selects tag audio
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //Selects class key
  if (!audio) return; // stops the function all together.
  audio.currentTime = 0; //Rewinds sound to the start.
  audio.play();
  key.classList.add('playing'); //Adds class 'playing'
};
 
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //Skip it if ain't a transform.
  this.classList.remove('playing');
     
};
 
const keys = document.querySelectorAll('.key'); 
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
 
window.addEventListener('keydown', playSound);