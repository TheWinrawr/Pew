/**
 * This class is mainly for testing hitboxes
 */
class TestObject extends GameObject {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
	}

	spawn() {
		let circle = new PIXI.Sprite(TEXTURES.circle);
		camera.addChild(circle);
		circle.x = this.x;
		circle.y = this.y;

		this.hitboxRadius = circle.width / 2;
	}

	isHit() {
		
	}
}