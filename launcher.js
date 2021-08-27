class launcher{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.stone = loadImage('images/stone.png');
        this.pointB =this.pointBthis.stone = constraint.create(options);
        World.add(world, this.stone)
    }
    attach(body){
        this.stone.bodyA = body;
    }

    fly(){
        this.launcher.body = null;
    }

    display(){
        image(this.stone,200,20);
        if(this.stone.bodyA){
            var pointA = this.stone.bodyA.position;
            var pointB = this.pointB;
            Push();

            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.stone,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.stone,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}
    
    
