class Roof {
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic :true });
        World.add(world, this.body);
    }

    display(){
       var pos = this.body.position
        fill("purple");
        rectMode(CENTER);
        rect(pos.x,pos.y,450,30);
    }
}