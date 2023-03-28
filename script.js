const instrument = document.querySelectorAll('.instrument');
const keys = document.querySelectorAll('.key');

const playMusic = (target) => {
    target.nextElementSibling.play();
}

instrument.forEach(ins => {
    ins.addEventListener('click', (e) => {
        playMusic(e.target);
    })
})

addEventListener('keydown', (e)=> {
    keys.forEach(key => {
        if(e.key == key.innerHTML){
            playMusic(key);
        }
    })
})





