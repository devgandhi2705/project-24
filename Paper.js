class Paper{
    constructor(x,y,width,height){
    var options = {
        isStatic: false,
        restitution:0,
        friction: 0.5,
        density: 0.2
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height,options);
    World.add(world,this.body);
    }
    
display(){
   
    var pops = this.body.position.x; 
    var pops1 = this.body.position.y; 
    ellipse(pops,pops1,this.width,this.height);
    }
}