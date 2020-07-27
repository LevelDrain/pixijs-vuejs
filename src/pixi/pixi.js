import * as PIXI from 'pixi.js';

const style = new PIXI.TextStyle({
    fontFamily: 'Times New Roman',
    fontSize: 70,
    fill: '#fff'
});
const text = new PIXI.Text('ueshima', style);

export {
    style,
    text
}