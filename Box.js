class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visiblity = 255;
   
  }
  display(){
    if(this.body.speed <1){
        super.display();
    }else{
      World.remove(world,this.body);
  push()
  this.visibility = this.visibility - 5;
  tint(255,this.visibility);
  rect(this.body.position.x,this.body.position.y,50,50);
  pop();
    }
  }

};
