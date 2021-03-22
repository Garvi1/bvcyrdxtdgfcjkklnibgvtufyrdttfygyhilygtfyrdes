class Umbrella {
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.x = x
        this.y = y
        this.image = loadImage("img.png")
        this.radius = 50 
        this.body = Bodies.circle(x,y,50,options)
    World.add(world,this.body)
    }
    display(){
    
  var position = this.body.position
  imageMode(CENTER)
  image(this.image,position.x,position.y,300,300)
}
}