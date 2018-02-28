/*Game start*/

let circle = new PIXI.Sprite(TEXTURES.circle);
camera.addChild(circle);
circle.x = 0;
circle.y = 0;

let ship = new Ship();
ship.create();