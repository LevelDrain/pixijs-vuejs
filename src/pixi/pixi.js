import * as PIXI from 'pixi.js';

const pixiApp = new PIXI.Application({width: 900, height: 300});
//console.log(pixiApp.view);

const style = new PIXI.TextStyle({
    fontFamily: 'Times New Roman',
    fontSize: 30,
    fill: '#fff'
});
const text = new PIXI.Text('Applicationメソッドを使う', style);
text.x = 450;
text.y = 150;

//--by 上島
const stage2 = new PIXI.Container();
const text2 = new PIXI.Text('autoDetectRendererを使う', style);
text2.x = 300;
text2.y = 100;

//--> アニメーションテスト（泡の部分）
const pixiApp2 = new PIXI.Application({width: 300, height: 300, transparent: true});

//背景透過
const backgroundAlpha = 0
const background = new PIXI.Graphics()
background.beginFill(0x000000, backgroundAlpha)
background.drawRect(0, 0, pixiApp2.renderer.screen.width, pixiApp2.renderer.screen.height)
background.endFill()
pixiApp2.stage.addChild(background)

//アニメーション部分
const totalCircle = 50, center = {x: pixiApp2.renderer.screen.width / 2, y: pixiApp2.renderer.screen.height}
let circles = []
while (circles.length < totalCircle) {
    let circle = new PIXI.Graphics()
    let scale = Math.random() * 10 + 1
    circle.beginFill(0Xffffff)
    circle.arc(0, 0, scale, 0, Math.PI * 2)
    circle.alpha = Math.random()
    circle.position = {x: center.x + Math.random() * 200 - 100, y: center.y}
    circle.moveX = Math.random() * 6 - 3
    circle.moveY = Math.random() * -15
    circle.endFill()

    circles.push(circle)
    pixiApp2.stage.addChild(circle)
}

export {
    pixiApp,
    text,
    stage2,
    text2,
    pixiApp2,
    circles,
    center
}