const endGameScreen = document.createElement('div')

endGameScreen.setAttribute('id', 'endGame')
endGameScreen.style.width = `${window.innerHeight + 204}px`
endGameScreen.style.height = `${window.innerHeight}px`
endGameScreen.style.position = 'absolute'
endGameScreen.style.display = 'none'
endGameScreen.style.backgroundColor = 'black'
endGameScreen.style.zIndex = '400'
endGameScreen.style.marginLeft = '120px'

document.body.insertBefore(endGameScreen, gameScreen)

const restartEndGameButton = document.createElement('img')

restartEndGameButton.setAttribute('src', './img/restart.png')
restartEndGameButton.style.width = '200px'
restartEndGameButton.style.height = '120px'
restartEndGameButton.style.zIndex = '400'
restartEndGameButton.style.position = 'absolute'
restartEndGameButton.style.bottom = '20px'
restartEndGameButton.style.right = '20px'
restartEndGameButton.style.cursor = 'pointer'

endGameScreen.appendChild(restartEndGameButton)

const endGameVideo = document.createElement('video')

endGameVideo.setAttribute('id', 'Fin')
endGameVideo.style.position = 'absolute'
endGameVideo.style.width = '100%'
endGameVideo.style.height = '100%'
endGameScreen.appendChild(endGameVideo)

const endGameVideoSrc = document.createElement('source')
endGameVideoSrc.setAttribute('src', './video/Dancing-Kenny_endGame.mp4')
endGameVideoSrc.setAttribute('type', 'video/mp4')
endGameVideo.appendChild(endGameVideoSrc)

restartEndGameButton.onclick = () => {
    Game.restart()
}
