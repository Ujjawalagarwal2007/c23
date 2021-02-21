class Box {
    constructor(x,y,width,height){
        var box_options ={
            restitution: 0.7
        }
    
        this.box=Bodies.rectangle(x,y,width,height,box_options);
    World.add(world,this.box);
        this.w=width;
        this.h=height;   
    }
    display(){
        rectMode(CENTER);
        push();
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle);
    rect(0,0,this.w,this.h);
    pop();
    }
}