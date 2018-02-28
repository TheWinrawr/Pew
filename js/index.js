let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type);

let width = window.innerWidth, height = window.innerHeight

const app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0xe0e0e0})
document.body.appendChild(app.view)

const renderer = app.renderer;
const screen = app.renderer.screen;
const stage = app.stage;

/* The camera should always be centered on the player */
const camera = new PIXI.Container();

console.log(screen.width, screen.height)

stage.addChild(camera);