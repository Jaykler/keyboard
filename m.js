window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop function from running all together
    audio.play();
    audio.currentTime = 0; // rewind to the start
    key.classList.add('playing');
    setTimeout(function(){
        
    },0.07);
    console.log(key);
});
    
function removeTransion(e){
    if (e.propertyName !== 'transform') return; //skip it if its not a transform
    console.log(e.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransion));