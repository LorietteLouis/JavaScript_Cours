let stage;
let length = 100;
let width = 20;
let radius = 10;
export default function main(st) {
    stage = st
    createBackground();
    createRectOne(10,450);
    createRectTwo(10,150);
    createLine(0,300)
    createCircle(300,10);
    return stage;
}

function createRectOne(paramX, paramY){
    let gr = new createjs.Graphics();
    let rectangle = new createjs.Shape(gr);
    rectangle.x = paramX
    rectangle.y = paramY
    rectangle.pace = 3;
    rectangle.canMove = true
    rectangle.addEventListener('tick',onRectangleTick)
    rectangle.addEventListener('click',onRectangleClick)
    
    gr.beginFill("gold").drawRect(0, 0, length, width);

    stage.addChild(rectangle);
    // createjs.Tween.get(rectangle,{loop:true})
    // .to({ x: 500 }, 1000, createjs.Ease.getPowInOut(4))
    //   .to({ alpha: 25, y: 300 }, 500, createjs.Ease.getPowInOut(2))
    //   .to({ alpha: 25, y: 100 }, 500)
    //   .to({ alpha: 25, y: 400 }, 1000, createjs.Ease.getPowInOut(2))
    //   .to({ x: 100 }, 1000, createjs.Ease.getPowInOut(2));
}
function createRectTwo(paramX, paramY){
    let gr = new createjs.Graphics();
    let rectangle = new createjs.Shape(gr);
    rectangle.x = paramX
    rectangle.y = paramY
    rectangle.pace = 2;
    rectangle.canMove = true
    rectangle.addEventListener('tick',onRectangleTick)
    rectangle.addEventListener('click',onRectangleClick)
    
    gr.beginFill("gold").drawRect(0, 0, length, width);

    stage.addChild(rectangle);
}
function createLine(paramX, paramY){
    let gr = new createjs.Graphics();
    let rectangle = new createjs.Shape(gr);
    rectangle.x = paramX
    rectangle.y = paramY
    gr.beginFill("white").drawRect(0, 0, 600, 10);
    stage.addChild(rectangle);
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
function createCircle(paramX, paramY){
    let gr = new createjs.Graphics();
    let circle = new createjs.Shape(gr);
    circle.x = paramX
    circle.y = paramY
    circle.pace = 2;
    circle.canMove = true
    circle.addEventListener('tick', onCircleTick)

    gr.beginFill("red").drawCircle(0, 0 , radius);
    stage.addChild(circle)
}

function onCircleTick(e){
    let tg = e.currentTarget;
    

    tg.y += tg.pace
    if (tg.y > stage.height - radius){
        tg.pace *= -1
    }
    if (tg.y < 0){
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
