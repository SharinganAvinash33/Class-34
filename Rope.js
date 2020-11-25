class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:250,
            stiffness:1.2
        }
        this.rope=Matter.Constraint.create(options)
        World.add(world,this.rope);

    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.pointB
        push();
        stroke(0,255,0);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}