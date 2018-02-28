const TEXTURES = {};

let graphics = new PIXI.Graphics();

/* Ship full hp */
graphics.beginFill(0xffffff);
graphics.lineStyle(2, 0x000000)

graphics.moveTo(0, 0)
let scale = 10;
graphics.lineTo(scale, -scale)
graphics.lineTo(0, scale * 2)
graphics.lineTo(-scale, -scale)
graphics.lineTo(0, 0)
graphics.endFill()

TEXTURES.shipHealthy = app.renderer.generateTexture(graphics);
graphics.clear();

/* A circle */
graphics.beginFill(0xffffff);
graphics.lineStyle(2, 0x000000)

graphics.drawCircle(50, 50, 10)

TEXTURES.circle = app.renderer.generateTexture(graphics)

/* Red hitbox circle */
