class box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.0,
            'friction':0.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
           rotate(angle);
           rectMode(CENTER);
           pop();
        if(this.body.speed < 3){
          display();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           var angle = this.body.angle;
           rect( 0, 0, this.width, this.height);
         }
      }
    }