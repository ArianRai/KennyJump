const surrenderButton = document.createElement('button')
surrenderButton.setAttribute('id', 'surrenderButton')
surrenderButton.setAttribute('title', 'Surrender')
surrenderButton.style.width = '90px'
surrenderButton.style.height = '70px'
surrenderButton.style.position = 'absolute'
surrenderButton.style.top = '50px'
surrenderButton.style.left = '15px'

document.body.insertBefore(surrenderButton, gameScreen)

surrenderButton.onclick = () => {
    Game.gameOver()
}
