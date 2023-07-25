class Platform {
	constructor(gameScreen, gameSize, positionX, positionY, sizeW, sizeH) {
		this.gameScreen = gameScreen
		this.gameSize = gameSize
		this.position = {
			x: positionX,
			y: positionY,
		}

		this.size = {
			width: sizeW,
			height: sizeH,
		}

		this.init()
	}

	init() {
		this.platformElement = document.createElement('div')

		this.platformElement.style.position = 'absolute'
		this.platformElement.style.width = `${this.size.width}px`
		this.platformElement.style.height = `${this.size.height}px`
		this.platformElement.style.left = `${this.position.x}px`
		this.platformElement.style.top = `${this.position.y}px`
		this.platformElement.style.backgroundColor = `yellow`

		this.gameScreen.appendChild(this.platformElement)
	}
}
