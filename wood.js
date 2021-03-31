class Wood{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.01,
            'friction':1000.0,
            'density':1000.0
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
          var angle = this.body.angle;
          var pos=this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);

          fill(150,80,30);
          stroke(100,30,0);
          strokeWeight(2);
          rect(0, 0, this.width, this.height);
          
          pop();
        
      }
}