const gameStartScreen = document.createElement("div")

gameStartScreen.setAttribute("id", "startscreen")
gameStartScreen.style.width = `${window.innerWidth}px`
gameStartScreen.style.height = `${window.innerHeight}px`
gameStartScreen.style.position = "absolute"
gameStartScreen.style.display = "block"
gameStartScreen.style.backgroundImage = "url(./img/KENNY_BG.jpg)"
gameStartScreen.style.backgroundSize = "cover"
gameStartScreen.style.zIndex = "400"

document.body.insertBefore(gameStartScreen, gameScreen)

const nameInput = document.createElement("input")

nameInput.style.width = "300px"
nameInput.style.height = "60px"
nameInput.style.position = "absolute"
nameInput.style.bottom = `${window.innerHeight * 0.3}px`
nameInput.style.right = `${window.innerWidth * 0.5 - 150}px`

gameStartScreen.appendChild(nameInput)

const startGameButton = document.createElement("button")

startGameButton.style.width = "300px"
startGameButton.style.height = "60px"
startGameButton.style.position = "absolute"
startGameButton.innerText = "START"
startGameButton.style.bottom = `${window.innerHeight * 0.2}px`
startGameButton.style.right = `${window.innerWidth * 0.5 - 150}px`

gameStartScreen.appendChild(startGameButton)

let playerName = ""

startGameButton.onclick = () => {
    gameStartScreen.style.display = "none"
    playerName = nameInput.value
}
