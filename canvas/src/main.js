let stage;
let length = 100;
let width = 20;
export default function main(st) {
    stage = st
    createBackground()
    createRect();
    return stage;
}



function createRect(){
    let gr = new createjs.Graphics();
    let rectangle = new createjs.Shape(gr);
    
    rectangle.pace = 2;
    rectangle.canMove = true
    rectangle.addEventListener('tick',onRectangleTick)
    rectangle.addEventListener('click',onRectangleClick)

    gr.beginFill("gold").drawRect(0, 0, length, width);
    rectangle.x = 10;
    rectangle.y = 450;
    stage.addChild(rectangle);
    // createjs.Tween.get(rectangle,{loop:true})
    // .to({ x: 500 }, 1000, createjs.Ease.getPowInOut(4))
//   .to({ alpha: 25, y: 300 }, 500, createjs.Ease.getPowInOut(2))
//   .to({ alpha: 25, y: 100 }, 500)
//   .to({ alpha: 25, y: 400 }, 1000, createjs.Ease.getPowInOut(2))
//   .to({ x: 100 }, 1000, createjs.Ease.getPowInOut(2));
}

function onRectangleClick(e){
    let ps = e.currentTarget
    
    ps.canMove = !ps.canMove

}

function onRectangleTick(e){
    let tg = e.currentTarget;
    if (!tg.canMove) return

    tg.x += tg.pace
    if (tg.x > stage.width - length){
        tg.pace *= -1
    }
    if (tg.x < 0){
        tg.pace *= -1
    }
    
}


function createBackground() {
    let gr = new createjs.Graphics()
    let bg = new createjs.Shape(gr)

    gr.beginFill('black')
    gr.drawRect(0, 0, stage.width, stage.height)

    stage.addChild(bg)


}