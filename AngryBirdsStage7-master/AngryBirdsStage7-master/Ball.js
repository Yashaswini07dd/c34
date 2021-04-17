class Ball{
    constructor(x, y,radius,angle) {
        var options = {
           // 'restitution':0.8,
            'frictionAir':1.0,
            'density':8.0
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.width = width;
        this.height = height;
        this.radius = radius;
      
        World.add(world, this.body);
      }
      display(){

        //var pos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       // imageMode(CENTER);
       fill ("pink");
        ellipse( 0, 0,this.radius,this.radius);
        pop();
      }
}