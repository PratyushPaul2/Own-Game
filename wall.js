class wall{
    constructor(x, y, width, height, options) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0,
            //'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue");
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}