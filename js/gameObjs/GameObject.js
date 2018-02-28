class GameObject {
	constructor() {
		this.update = this.update.bind(this);
		app.ticker.add(this.update);
	}

	update(delta) {
		
	}

}