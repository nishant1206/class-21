var rect1, rect2, rect3;
var o1, o2;
var y1, y2;

function setup() {
    createCanvas(1000, 600);
    rect1 = createSprite(400, 200, 50, 50);
    rect1.shapeColor = "blue";
    rect2 = createSprite(200, 100, 50, 50);
    rect2.shapeColor = "red";
    rect3 = createSprite(400, 300, 40, 40);
    rect3.shapeColor = "green";

    //o1, o2
    o1 = createSprite(500, 400, 40, 40);
    o1.velocityX = 5;
    o1.shapeColor = "green";
    o2 = createSprite(900, 400, 40, 40);
    o2.velocityX = -5;
    o2.shapeColor = "white";

    y1 = createSprite(700, 500, 40, 40);
    y1.shapeColor = "cyan";
    y1.velocityY = -5;
    y2 = createSprite(700, 100, 70, 70);
    y1.shapeColor = "lightblue";
    y2.velocityY = 5;
}

function draw() {
    background(0, 0, 0);
    rect2.x = mouseX;
    rect2.y = mouseY;

    if (isTouching(rect2, rect3)) {
        rect2.shapeColor = "green";
        rect3.shapeColor = "violet";
    } else {
        rect2.shapeColor = "red";
        rect3.shapeColor = "green";
    }
    bounceoff(o1, o2);
    bounceoff(y1, y2);

    drawSprites();
}