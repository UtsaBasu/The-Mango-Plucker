class stone{
    constructor(x,y,r){
        var fridge={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
		this.y=y;
		this.r=r;
        this.body = Bodies.circle(x,y,r/2,fridge);
        this.image = loadImage("stone.png");
 		World.add(world, this.body);
    }

    display(){
        var stonePos=this.body.position;		
			push()
			translate(stonePos.x, stonePos.y);
			imageMode(CENTER)
			image(this.image,0,0,this.r*2,this.r*2); 
            ellipseMode(RADIUS);
			pop()
    }
    
}