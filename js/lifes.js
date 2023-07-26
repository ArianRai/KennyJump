class Lifes {
    constructor(player, playerLifes, gameScreen) {
        this.player = player
        this.playerLifes = playerLifes
        this.gameScreen = gameScreen

        this.init()
    }

    init() {
        this.lifeDiv = document.createElement('div')

        this.lifeDiv.style.position = 'absolute'
        this.lifeDiv.style.bottom = '0'
        this.lifeDiv.setAttribute('id', 'lifes')

        document.body.insertBefore(this.lifeDiv, this.gameScreen)

        for (let i = 0; i < this.playerLifes; i++) {
            this.lifeContainer = document.createElement('div')

            this.lifeContainer.setAttribute('id', 'heart')
            this.lifeContainer.style.position = 'absolute'
            this.lifeContainer.style.width = `90px`
            this.lifeContainer.style.height = `80px`
            this.lifeContainer.style.left = `15px`
            this.lifeContainer.style.bottom = `${i * 120 + 30}px`
            this.lifeContainer.style.backgroundImage = 'url(./img/heart_full.png)'
            this.lifeContainer.style.backgroundSize = 'cover'

            this.lifeDiv.appendChild(this.lifeContainer)
        }
    }
}
