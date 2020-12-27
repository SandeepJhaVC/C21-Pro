
var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600, 400);
  speed = random(231, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1550, 200, thickness, height/2);

  wall.shapeColor = ("black");
  bullet.velocityX = speed;

  bullet.shapeColor = "white";
}

function draw() {
  background("blue");

  if (wall.x - bullet.x < (bullet.width + wall.width)/2) {
    bullet.velocityX = 0;

    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

    if (damage > 3.68 && damage < 12.43) {
      wall.shapeColor = ("green");
    }

    if (damage > 12.43) {
      wall.shapeColor = ("red");
    }
  }

  drawSprites();
}