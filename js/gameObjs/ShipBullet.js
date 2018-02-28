class ShipBullet extends Bullet {
	constructor (x, y, angle, speed = 8) {
		super(x, y, angle, speed);
		this.angle = angle + Math.PI / 2;

		this.spawn(TEXTURES.circle);
	}

	update(delta) {
		//console.log(camera.x + this.bullet.x, camera.y + this.bullet.y)
		//console.log(this.bullet.x, this.bullet.y)
		let limit = -100;
		let x = camera.x + this.bullet.x;
		let y = camera.y + this.bullet.y;
		if (x < limit || x > screen.width - limit || y < limit || y > screen.height - limit) {
			camera.removeChild(this.bullet);
			app.ticker.remove(this.update);
		}
		this.bullet.x += Math.cos(this.angle) * this.speed;
		this.bullet.y += Math.sin(this.angle) * this.speed;
	}
}