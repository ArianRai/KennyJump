const surrenderButton = document.createElement('button')

surrenderButton.setAttribute('id', 'surrenderButton')
surrenderButton.setAttribute('title', 'Surrender')
surrenderButton.style.width = '90px'
surrenderButton.style.height = '95px'
surrenderButton.style.position = 'absolute'
surrenderButton.style.top = '30px'
surrenderButton.style.left = '20px'
surrenderButton.style.backgroundColor = 'transparent'
surrenderButton.style.backgroundImage = 'url(./../img/death-logo.png)'
surrenderButton.style.backgroundSize = 'contain'
surrenderButton.style.border = 'none'
surrenderButton.style.cursor = 'pointer'
surrenderButton.style.backgroundRepeat = 'no-repeat'

document.body.insertBefore(surrenderButton, gameScreen)

surrenderButton.onclick = () => {
    Game.gameOver()
}
