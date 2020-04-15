class Rain {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 1, 6, options);
        this.width = 1;
        this.hight = 6;

        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.hight)
        if(this.body.position.y < 410){
            World.remove(world, this.body);
        }
        pop();
    }
}