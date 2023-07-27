const Game = {
	gameScreen: document.querySelector('#game-screen'),
	gameSize: {
		w: window.innerHeight + 200,
		h: window.innerHeight,
	},
	framesCounter: 0,
	player: undefined,
	currentLevel: 0,
	topPlayers: [],
	keys: {
		UP: {
			code: 'Space',
			pressed: false,
		},
		LEFT: {
			code: 'ArrowLeft',
			pressed: false,
		},
		RIGHT: {
			code: 'ArrowRight',
			pressed: false,
		},
	},

	init() {
		this.setDimensions()
		this.setEventListeners()
		this.start()
	},

	setDimensions() {
		this.gameScreen.style.width = `${this.gameSize.w}px`
		this.gameScreen.style.height = `${this.gameSize.h}px`
	},

	start() {
		this.createElements()
		this.gameLoop()
	},

	setEventListeners() {
		addEventListener('click', e => {
			const clickX = e.clientX
			const clickY = e.clientY
			const rect = this.gameScreen.getBoundingClientRect()
			const divX = rect.left
			const divY = rect.top
			const offsetX = clickX - divX
			const offsetY = clickY - divY
			this.player.playerPos.x = offsetX
			this.player.playerPos.y = offsetY
			this.player.onGround = false
		})
		addEventListener('keyup', e => {
			switch (e.code) {
				case this.keys.UP.code:
					this.keys.UP.pressed = false
					break
				case this.keys.LEFT.code:
					this.keys.LEFT.pressed = false
					break
				case this.keys.RIGHT.code:
					this.keys.RIGHT.pressed = false
					break
			}
		})
		addEventListener('keydown', e => {
			switch (e.code) {
				case this.keys.UP.code:
					this.keys.UP.pressed = true
					break
				case this.keys.LEFT.code:
					this.keys.LEFT.pressed = true
					break
				case this.keys.RIGHT.code:
					this.keys.RIGHT.pressed = true
					break
			}
		})
	},

	createElements() {
		this.player = new Player(this.gameScreen, this.gameSize, this.keys)
		this.level = new Level(this.gameScreen, this.gameSize, this.player.playerLevel, this.player)
		this.lifes = new Lifes(this.player, this.player.lifesCount, this.gameScreen)

		this.createBoard()
	},

	createBoard() {
		const ol = document.createElement('ol')
		ol.setAttribute('id', 'topPlayers')
		document.querySelector('#ranking').appendChild(ol)

		for (let i = 0; i < localStorage.length; i++) {
			this.topPlayers.push({
				name: localStorage.key(i),
				value: Math.round(localStorage.getItem(localStorage.key(i))),
			})
		}

		this.topPlayers.sort((a, b) => {
			return b.value - a.value
		})

		this.topPlayers.slice(0, 10).forEach(eachPlayer => {
			const li = document.createElement('li')
			li.innerText = `${eachPlayer.name} ${eachPlayer.value}`
			document.querySelector('#topPlayers').appendChild(li)
		})

		const kennyLogoImg = document.createElement('img')

		kennyLogoImg.setAttribute('src', './../img/logo-game.png')
		kennyLogoImg.setAttribute('id', 'blessedKenny')
		kennyLogoImg.style.width = '400px'
		kennyLogoImg.style.position = 'absolute'
		kennyLogoImg.style.top = '20px'

		document.querySelector('#leaderBoard').appendChild(kennyLogoImg)

		const controlsImg = document.createElement('img')

		controlsImg.setAttribute('src', './../img/controls.png')
		controlsImg.setAttribute('id', 'controls')
		controlsImg.style.width = '400px'
		controlsImg.style.position = 'absolute'
		controlsImg.style.bottom = '10px'

		document.querySelector('#leaderBoard').appendChild(controlsImg)
	},

	cleanBoard() {
		document.querySelector('#topPlayers').remove()
		document.querySelector('#controls').remove()
		this.topPlayers = []
	},

	gameLoop() {
		this.drawAll()
		this.level.checkCollision()

		window.requestAnimationFrame(() => this.gameLoop())
	},

	drawAll() {
		this.player.move()
	},

	setTop() {
		let currentRecord = window.localStorage.getItem(playerName)
		if (currentRecord < this.player.maxHeight) {
			window.localStorage.setItem(playerName, this.player.maxHeight)
		}
	},

	gameOver() {
		this.setTop()
		this.cleanBoard()
		this.createBoard()

		document.body.querySelectorAll('#heart').forEach(eachLife => {
			eachLife.style.backgroundImage = 'url(./img/heart_empty.png)'
		})

		document.body.querySelector('#wii-theme').pause()

		setTimeout(() => {
			gameOverScreen.style.display = 'block'
			gameOverVideo.play()
		}, 300)
	},

	restart() {
		location.reload()
	},
}
