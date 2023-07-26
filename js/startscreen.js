const gameStartScreen = document.createElement('div')

gameStartScreen.setAttribute('id', 'startscreen')
gameStartScreen.style.width = `${window.innerWidth}px`
gameStartScreen.style.height = `${window.innerHeight}px`
gameStartScreen.style.position = 'absolute'
gameStartScreen.style.backgroundImage = 'url(./img/game_start-bg.png)'
gameStartScreen.style.backgroundPositionY = '-100px'
gameStartScreen.style.backgroundSize = 'cover'
gameStartScreen.style.zIndex = '400'
gameStartScreen.style.display = 'block'

document.body.insertBefore(gameStartScreen, gameScreen)

const nameInput = document.createElement('input')

nameInput.setAttribute('placeholder', 'Introduce tu nombre')

nameInput.style.width = '300px'
nameInput.style.height = '60px'
nameInput.style.position = 'absolute'
//nameInput.style.background = 'transparent'
nameInput.style.border = 'none'
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
