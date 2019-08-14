function playSound(e) {
    //console.log(e)
    

    //audio element
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    //console.log(audio)
    //key element
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    //console.log(key)
    
    //check to see if there are any audio element with data-key attr.
    if(!audio) {return;}
    
    //reset audio to start to enable keypress multiple times before whole audio ends
    audio.currentTime = 0;
    audio.play()

    //adds playing class when key is pressed
    key.classList.add('playing')

}

//create a function to remove transtion
function removeTransition(e) {
    console.log(e)
    
    if(e.propertyName !== 'transform') return; 
    console.log(e.propertyName);

    console.log(this);
    
    this.classList.remove('playing')
    
}   

const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
})

window.addEventListener('keydown', playSound);