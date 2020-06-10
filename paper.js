class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction:0.5,
          density: 1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    fly(){
      Matter.Body.applyForce(this.body,this.body.position,{x:85,y:-100})
    }
    display(){

      rectMode(CENTER);
      fill("blue");
      circle(this.body.position.x, this.body.position.y, this.radius);
    }
  };