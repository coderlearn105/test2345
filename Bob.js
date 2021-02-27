class Bob {

    constructor(x,y){

        var options = {
            restitution: 0.3,
            friction : 0.5,
            density : 1.2,
            gravity : 0.5
        }

        this.body = Bodies.circle(x,y,40,options);
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = 
        push(this.body.position);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("pink");
        stroke("black");
        strokeWeight(1);
        ellipseMode(CENTER);
        ellipse(0,0,80);
        pop();
      }
}