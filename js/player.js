class Player {
	constructor(gameScreen, gameSize, keys) {
		this.gameScreen = gameScreen
		this.gameSize = gameSize
		this.keys = keys
		this.playerPos = {
			x: 100,
			y: 900,
		}
		this.playerSize = {
			w: 60,
			h: 80,
		}
		this.playerVel = {
			x: 0,
			y: 0,
		}
		this.playerSpeed = 8
		this.onGround = false
		this.gravity = 0.4
		this.chargingJump = false
		this.chargedJump = 0
		this.chargedJumpMAX = 18
		this.chargedJumpFrec = 0.4
		this.sideJump = 10
		this.bounce = -0.3
		this.globalFriction = 0.988
		this.lifesCount = 3
		this.maxHeight = 0
		this.playerLevel = 0
		this.previousLevel = -1

		this.init()
	}

	init() {
		this.playerElement = document.createElement('div')

		this.playerElement.setAttribute('id', 'player')
		this.playerElement.style.position = 'absolute'
		this.playerElement.style.width = `${this.playerSize.w}px`
		this.playerElement.style.height = `${this.playerSize.h}px`
		this.playerElement.style.left = `${this.playerPos.x}px`
		this.playerElement.style.top = `${this.playerPos.y}px`
		this.playerElement.style.backgroundImage = 'url(./img/Kenny.png)'
		this.playerElement.style.backgroundSize = 'cover'

		this.gameScreen.appendChild(this.playerElement)

		this.barElement = document.createElement('progress')

		this.barElement.setAttribute('id', 'jumpCharge')
		this.barElement.setAttribute('max', '18')
		this.barElement.setAttribute('value', '0')
		this.barElement.style.width = '80px'
		this.barElement.style.height = '30px'
		this.barElement.style.position = 'absolute'
		this.barElement.style.left = '38px'
		this.barElement.style.bottom = '30px'
		this.barElement.style.transform = 'rotate(-90deg)'
		this.barElement.style.zIndex = '100'

		this.playerElement.appendChild(this.barElement)
	}

	move() {
		if (this.onGround) {
			this.playerVel.y = 0
			if (!this.keys.LEFT.pressed || !this.keys.RIGHT.pressed) {
				this.playerVel.x = 0
			}
			if (this.keys.UP.pressed && !this.chargingJump) {
				this.chargingJump = true
			}
			if (this.keys.UP.pressed && this.chargingJump) {
				if (this.chargedJump <= this.chargedJumpMAX) {
					this.chargedJump += this.chargedJumpFrec
					this.barElement.value = this.chargedJump
				}
			} else if (this.keys.LEFT.pressed && !this.chargingJump) {
				this.playerVel.x = -this.playerSpeed
			} else if (this.keys.RIGHT.pressed && !this.chargingJump) {
				this.playerVel.x = this.playerSpeed
			} else if (!this.keys.UP.pressed && this.chargingJump) {
				if (this.keys.LEFT.pressed) {
					this.playerVel.x = -this.sideJump
				} else if (this.keys.RIGHT.pressed) {
					this.playerVel.x = this.sideJump
				}
				this.playerVel.y = -this.chargedJump
				this.onGround = false
				this.barElement.value = 0
			}
		}

		if (!this.onGround) {
			this.playerVel.y += this.gravity
			this.chargedJump = 0
			this.chargingJump = false
			this.playerVel.x *= this.globalFriction
		}

		this.playerPos.x += this.playerVel.x
		this.playerPos.y += this.playerVel.y

		this.checkBorderCollision()
		this.updatePosition()
	}

	checkBorderCollision() {
		if (this.playerPos.x > this.gameSize.w - this.playerSize.w) {
			this.playerVel.x *= this.bounce
			this.playerPos.x = this.gameSize.w - this.playerSize.w
		} else if (this.playerPos.x < 0) {
			this.playerVel.x *= this.bounce
			this.playerPos.x = 0
		}

		if (this.playerPos.y < 0) {
			this.previousLevel = this.playerLevel
			this.playerLevel++
			Game.level.init(this.playerLevel, this.previousLevel)
			this.playerPos.y = this.gameSize.h - this.playerSize.h - 1
		}

		if (this.playerPos.y + this.playerSize.h > this.gameSize.h) {
			if (this.playerLevel > 0) {
				this.previousLevel = this.playerLevel
				this.playerLevel--
				Game.level.init(this.playerLevel)
				this.playerPos.y = 1
			}
		}
	}

	updatePosition() {
		this.playerElement.style.left = `${this.playerPos.x}px`
		this.playerElement.style.top = `${this.playerPos.y}px`

		let currentHeight =
			this.gameSize.h * this.playerLevel + (this.gameSize.h - this.playerPos.y)

		if (currentHeight > this.maxHeight) {
			this.maxHeight = currentHeight
		}
	}
}
