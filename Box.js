class Box{
    constructor(x,y){
        var options={
            density:1,
            friction:0.08
        }
        this.body=Bodies.rectangle(x,y,50,100,options);
        this.width=50;
        this.height=100;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("purple");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}