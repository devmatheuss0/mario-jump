const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const nuvem = document.querySelector('.nuvem')
const over = document.querySelector('.game-over')
const pipe1 = document.querySelector('.pipe1')
const loop3 = document.querySelector('.loop')
const pipe2 = document.querySelector('.pipe2')


const jump = () => {
  mario.classList.add('jump')

  setTimeout(() =>{
    mario.classList.remove('jump')
  }, 500)
}


const loop = setInterval(() =>{
  const pipePosition = pipe.offsetLeft
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
  const pipe1Position = pipe1.offsetLeft
  const pipe2Position = pipe2.offsetLeft
 
  if(pipePosition <= 120 && pipePosition > 0  && marioPosition < 80){
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    pipe1.style.animation = 'none'
    pipe1.style.left = `${pipe1Position}px`

    pipe2.style.animation = 'none'
    pipe2.style.left = `${pipe2Position}`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    mario.src = './img/Mario_Death.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    over.style.display ='flex'

    clearInterval(loop)
  }
 
  if(pipe1Position <= 120 && pipe1Position > 0 && marioPosition < 80){
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`
    
    
    pipe1.style.animation = 'none'
    pipe1.style.left = `${pipe1Position}px`

    pipe2.style.animation = 'none'
    pipe2.style.left = `${pipe2Position}`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    mario.src = './img/Mario_Death.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    over.style.display = 'flex'

    clearInterval(loop)

  }
  if( pipe2Position <= 120 && pipe2Position > 0 && marioPosition < 80){
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    pipe2.style.animation = 'none'
    pipe2.style.left = `${pipe2Position}`
    
    pipe1.style.animation = 'none'
    pipe1.style.left = `${pipe1Position}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    mario.src = './img/Mario_Death.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    over.style.display = 'flex'

    clearInterval(loop)
  }

}, 10)


loop3.innerHTML += setInterval(() =>{
  loop3 = +loop
})
document.addEventListener('keydown', jump)
document.addEventListener('touchstart', jump)
