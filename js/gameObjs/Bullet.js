class Bullet extends GameObject {
	constructor(x, y, angle, speed = 10) {
		super();
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.angle = angle;
	}

	spawn(texture) {
		this.bullet = new PIXI.Sprite(texture);
		this.bullet.x = this.x;
		this.bullet.y = this.y;
		this.bullet.pivot.x = this.bullet.width / 2;
		this.bullet.pivot.y = this.bullet.height / 2;
		camera.addChild(this.bullet)
	}

	update(delta) {

	}
}