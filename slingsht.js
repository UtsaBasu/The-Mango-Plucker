class slingsht{
constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.003,
        length: 5
    }
    this.bodyA = bodyA;
    this.pointB = pointB;
    this.sling = Constraint.create(options); 
    World.add(world, this.sling);
}
display(){
       if(this.sling.bodyA){  
        var pointA = this.bodyA.position;
       var pointB = this.pointB;
            fill("black");
            strokeWeight(4); 
            line(pointA.x, pointA.y, pointB.x, pointB.y);

       }
        }
                 
        fly(){
            this.sling.bodyA = null;
        }

        attach(body){
            this.sling.bodyA = body;
        }
    }




