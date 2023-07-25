const gameOverScreen = document.createElement('div')

gameOverScreen.setAttribute('id', 'gameOver')
gameOverScreen.style.width = `${window.innerHeight + 200}px`
gameOverScreen.style.height = `${window.innerHeight}px`
gameOverScreen.style.position = 'absolute'
// gameOverScreen.style.display = 'none'

gameOverScreen.style.backgroundColor = 'black'
gameOverScreen.style.zIndex = '400'
gameOverScreen.style.marginLeft = '120px'
let gameScreen = document.querySelector('#game-screen')
document.body.insertBefore(gameOverScreen, gameScreen)

const restartButton = document.createElement('button')
restartButton.innerText = 'RESTART'
restartButton.style.width = '300px'
restartButton.style.height = '80px'
restartButton.style.position = 'absolute'
restartButton.style.bottom = '50px'
restartButton.style.right = '100px'

gameOverScreen.appendChild(restartButton)
