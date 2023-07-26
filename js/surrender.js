const surrenderButton = document.createElement("button")
surrenderButton.backgroundColor = "black"
surrenderButton.style.width = "50px"
surrenderButton.style.height = "50px"
surrenderButton.style.position = "absolute"
surrenderButton.style.top = "10px"
surrenderButton.style.left = "15px"

document.body.insertBefore(surrenderButton, gameScreen)

surrenderButton.onclick = () => {
    Game.restart()
    gameStartScreen.style.display = "block"
}
