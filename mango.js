class mango extends BaseClass {
  constructor(x, y){

    super(x,y,50,70);
    this.image = loadImage("guard.png");
    this.visibility=255;
  }
   display(){
if (this.body.speed<1) {
  super.display();
  this.visibility=this.visibility-this.visibility;
} else {
  push();
  
  //this.visibility=this.visibility-5;
  image(this.image,this.body.position.x,this.body.position.y,30,50);
  pop();
}
   }
};