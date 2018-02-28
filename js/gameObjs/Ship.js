class Ship extends GameObject {
	constructor() {
		super();
		this.hp = 3;
		this.speed = 3;

		/* Firing rate stuff */
		this.isShooting = false;
		this.fireRate = 5;
		this.nextShotIn = 0;

		/* Bind external methods */
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);

	}

	/**
	 * Draws a new ship and puts it on the canvas. Does not put it on the camera
	 * @return {None} [description]
	 */
	create() {
		this.ship = new PIXI.Sprite(TEXTURES.shipHealthy);
		this.ship.x = renderer.screen.width / 2 
		this.ship.y = renderer.screen.height / 2;
		this.ship.pivot.x = this.ship.width / 2;
		this.ship.pivot.y = this.ship.height / 2;

		app.stage.addChild(this.ship)
		window.addEventListener('mousemove', this.handleMouseMove, false);
		window.addEventListener('mousedown', this.handleMouseDown, false);
		window.addEventListener('mouseup', this.handleMouseUp, false);
	}

	/**
	 * Returns the angle of the ship facing towards the mouse
	 * @return {Number} Angle in radians
	 */
	get angle() {
		let mousePos = renderer.plugins.interaction.mouse.global;
		return Math.atan2(mousePos.y - this.ship.y, mousePos.x - this.ship.x) - Math.PI / 2;
	}

	handleMouseMove(e) {
		if (this.ship != null) {
			this.ship.rotation = this.angle;
		}
	}

	handleMouseDown() {
		this.isShooting = true;
	}

	handleMouseUp() {
		this.isShooting = false;
	}

	update(delta) {
		/* Check inputs first */
		if (Input.right.isDown || Input.D.isDown) {
			camera.x -= this.speed * delta;
		}
		if (Input.left.isDown || Input.A.isDown) {
			camera.x += this.speed * delta;
		}
		if (Input.up.isDown || Input.W.isDown) {
			camera.y += this.speed * delta;
		}
		if (Input.down.isDown || Input.S.isDown) {
			camera.y -= this.speed * delta;
		}

		/* Update firing rate */
		this.nextShotIn -= delta;
		if (this.nextShotIn <= 0 && this.isShooting){
			this.nextShotIn = this.fireRate;
			let bullet = new ShipBullet(this.ship.x - camera.x, this.ship.y - camera.y, this.angle);
		}

		camera.children.forEach(child => {
			//console.log(child.constructor.name);
		})
	}
}