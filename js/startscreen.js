const gameStartScreen = document.createElement('div')

gameStartScreen.setAttribute('id', 'startscreen')
gameStartScreen.style.width = `${window.innerWidth}px`
gameStartScreen.style.height = `${window.innerHeight}px`
gameStartScreen.style.position = 'absolute'
gameStartScreen.style.display = 'block'
gameStartScreen.style.backgroundImage = 'url(./img/KENNY_BG.png)'
gameStartScreen.style.backgroundSize = 'cover'
gameStartScreen.style.zIndex = '400'

document.body.insertBefore(gameStartScreen, gameScreen)

const nameInput = document.createElement('input')

nameInput.style.width = '300px'
nameInput.style.height = '60px'
nameInput.style.position = 'absolute'
nameInput.style.fontSize = '24px'
nameInput.style.textAlign = 'center'

nameInput.style.bottom = `${window.innerHeight * 0.3}px`
nameInput.style.right = `${window.innerWidth * 0.5 - 150}px`

gameStartScreen.appendChild(nameInput)

let playerName = 'PLAYER'

addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'Enter':
            gameStartScreen.style.display = 'none'
            if (nameInput.value) {
                playerName = nameInput.value
            }
            break
    }
})
