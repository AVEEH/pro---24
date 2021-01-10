class Ball{
    constructor(x,y){
       var options = {                                                            
           restitution : 0.4,                                                            
           friction : 1.0,                                                            
           density : 0.3                                                            
       }                                                            
        this.body = Bodies.circle(x,y,50,options)                                                             
        this.radius = 50                                                            
        World.add(world,this.body)                                                            
    }                                                            
    display(){                                                            
        var pos = this.body.position                                                             
        //push()
        ellipseMode(RADIUS)                                                            
        //translate(pos.x ,pos.y)                                                            
        //rotate(this.body.angle)
        fill("blue")                                                            
        ellipse(pos.x,pos.y,this.radius,this.radius) 
        //pop()                                                           
                                                                    
    }                                                            
}