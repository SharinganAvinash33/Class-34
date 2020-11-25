class Ball{
    constructor(x,y){
        var options={
            density:1,
            frictionAir:0.008
        }
        this.body=Bodies.circle(x,y,30,options);
        this.radius=30;
        Body.setMass(this.body,this.body.mass*4)
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill(0,0,255);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}