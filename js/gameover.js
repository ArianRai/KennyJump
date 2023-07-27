const gameOverScreen = document.createElement('div')

gameOverScreen.setAttribute('id', 'gameOver')
gameOverScreen.style.width = `${window.innerHeight + 204}px`
gameOverScreen.style.height = `${window.innerHeight}px`
gameOverScreen.style.position = 'absolute'
gameOverScreen.style.display = 'none'
gameOverScreen.style.backgroundColor = 'black'
gameOverScreen.style.zIndex = '400'
gameOverScreen.style.marginLeft = '120px'

const gameScreen = document.querySelector('#game-screen')
document.body.insertBefore(gameOverScreen, gameScreen)

const restartButton = document.createElement('img')

restartButton.setAttribute('src', './img/restart.png')
restartButton.style.width = '200px'
restartButton.style.height = '120px'
restartButton.style.zIndex = '400'
restartButton.style.position = 'absolute'
restartButton.style.bottom = '20px'
restartButton.style.right = '20px'
restartButton.style.cursor = 'pointer'

gameOverScreen.appendChild(restartButton)

const gameOverVideo = document.createElement('video')

const gameOverVideosArray = [
    '../video/han-matado-a-kenny-1.mp4',
    '../video/han-matado-a-kenny-2.mp4',
    '../video/han-matado-a-kenny-3.mp4',
    '../video/han-matado-a-kenny-4.mp4',
]

let randomGameOverVideoIndex = Math.round(Math.random() * 3)
let videoRandom = gameOverVideosArray[randomGameOverVideoIndex]

gameOverVideo.setAttribute('id', 'Habeis-matado-a-Kenny')
gameOverVideo.style.position = 'absolute'
gameOverVideo.style.width = '100%'
gameOverVideo.style.height = '100%'
gameOverScreen.appendChild(gameOverVideo)

const gameOverVideoSrc = document.createElement('source')
gameOverVideoSrc.setAttribute('src', `${videoRandom}`)
gameOverVideoSrc.setAttribute('type', 'video/mp4')
gameOverVideo.appendChild(gameOverVideoSrc)

restartButton.onclick = () => {
    Game.restart()
}
