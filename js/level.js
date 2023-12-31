class Level {
    constructor(gameScreen, gameSize, initialLevel, player) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.player = player
        this.currentLevel = initialLevel
        this.platforms = []

        this.init(this.currentLevel)
    }

    init(currentLevel) {
        this.startLevel(currentLevel)
    }

    startLevel(currentLevel) {
        if (currentLevel !== this.player.previousLevel) {
            this.clearLevel()
        }
        const levelElements = levelData[currentLevel]
        levelElements.platforms.forEach((platform) => {
            this.platforms.push(
                new Platform(
                    this.gameScreen,
                    this.gameSize,
                    platform.x,
                    platform.y,
                    platform.w,
                    platform.h
                )
            )
        })
        if (currentLevel === 4) {
            this.finishElement = document.createElement('div')
            this.finishElement.setAttribute('id', 'finish')

            this.finishElement.style.position = 'absolute'
            this.finishElement.style.width = `200px`
            this.finishElement.style.height = `120px`
            this.finishElement.style.left = `${this.gameSize.w / 2 - 100}px`
            this.finishElement.style.top = `400px`
            this.finishElement.style.backgroundImage = 'url(./img/wings.png)'
            this.finishElement.style.backgroundSize = 'cover'
            this.finishElement.style.backgroundPosition = 'center'
            this.finishElement.style.zIndex = '201'

            this.gameScreen.appendChild(this.finishElement)
        } else {
            if (document.querySelector('#finish')) {
                document.querySelector('#finish').remove()
            }
        }

        document.body.querySelector('#game-screen').style.backgroundImage =
            levelElements.backGround
    }

    clearLevel() {
        this.platforms.forEach((platform) => {
            platform.platformElement.remove()
        })
        this.platforms = []
    }

    checkCollision() {
        let playerLeft = this.player.playerPos.x
        let playerRight = this.player.playerPos.x + this.player.playerSize.w
        let playerTop = this.player.playerPos.y
        let playerBottom = this.player.playerPos.y + this.player.playerSize.h

        if (this.player.playerLevel === 4) {
            if (
                playerRight >= this.gameSize.w / 2 - 100 &&
                playerLeft <= this.gameSize.w / 2 + 200 &&
                playerBottom >= 400 &&
                playerTop <= 520
            ) {
                Game.setTop()
                Game.cleanBoard()
                Game.createBoard()

                setTimeout(() => {
                    document.body.querySelector('#wii-theme').pause()
                    document.querySelector('#endGame').style.display = 'block'
                    endGameVideo.play()
                }, 300)
            }
        }
        this.platforms.forEach((eachPlatform) => {
            let platformLeft = eachPlatform.position.x
            let platformRight = eachPlatform.position.x + eachPlatform.size.width
            let platformTop = eachPlatform.position.y
            let platformBottom = eachPlatform.position.y + eachPlatform.size.height

            if (
                playerRight >= platformLeft &&
                playerLeft <= platformRight &&
                playerBottom >= platformTop &&
                playerTop <= platformBottom
            ) {
                if (playerBottom < platformTop + 60 && this.player.playerVel.y > 25) {
                    if (this.player.lifesCount > 0) {
                        document.querySelector('#fall').play()

                        this.gameScreen.querySelector('#player').style.transform =
                            'rotate(-90deg)'

                        let count = this.player.lifesCount
                        this.player.lifesCount--

                        document.body.querySelector(
                            `#lifes :nth-child(${count})`
                        ).style.backgroundImage = 'url(./img/heart_empty.png)'

                        if (this.player.lifesCount === 0) {
                            this.gameScreen.querySelector('#player').style.transform =
                                'rotate(-90deg)'
                            this.gameScreen.querySelector(
                                '#player'
                            ).style.backgroundImage = 'url(./img/Kenny-fall-dead.png)'
                            Game.gameOver()
                        }
                    }
                }
                if (
                    Math.abs(
                        playerLeft +
                            this.player.playerSize.w / 2 -
                            (platformLeft + eachPlatform.size.width / 2)
                    ) <
                    eachPlatform.size.width / 2
                ) {
                    if (this.player.playerVel.y < 0) {
                        this.player.playerPos.y = platformBottom
                        this.player.playerVel.y *= -0.6
                        document.querySelector('#bounce').play()
                    } else {
                        this.player.onGround = true
                        this.player.playerPos.y = platformTop - this.player.playerSize.h
                    }
                } else {
                    if (playerTop !== platformTop - this.player.playerSize.h) {
                        this.player.playerVel.x *= -0.6
                        document.querySelector('#bounce').play()
                        if (playerRight >= platformRight) {
                            this.player.playerPos.x = platformRight
                        } else {
                            this.player.playerPos.x =
                                platformLeft - this.player.playerSize.w
                        }
                    } else {
                        this.player.onGround = false
                        this.player.playerVel.y += this.player.gravity
                    }
                }
            }
        })
    }
}
