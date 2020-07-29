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

export {
    pixiApp,
    text,
    stage2,
    text2
}