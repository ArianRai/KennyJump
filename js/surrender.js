const surrenderButton = document.createElement('button')

surrenderButton.setAttribute('id', 'surrenderButton')
surrenderButton.setAttribute('title', 'Surrender')
surrenderButton.style.width = '90px'
surrenderButton.style.height = '70px'
surrenderButton.style.position = 'absolute'
surrenderButton.style.top = '30px'
surrenderButton.style.left = '15px'
surrenderButton.style.backgroundColor = 'rgb(70, 70, 70)'
surrenderButton.style.backgroundImage = 'url(./../img/Death_Surrender.png)'
surrenderButton.style.backgroundSize = 'cover'
surrenderButton.style.border = 'none'
surrenderButton.style.cursor = 'pointer'

document.body.insertBefore(surrenderButton, gameScreen)

surrenderButton.onclick = () => {
    Game.gameOver()
}
