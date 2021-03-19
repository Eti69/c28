class Stone{
constructor(x,y,width,height){
var options={
density:1.2,
friction:1,
restitution:0,
isStatic:false
}
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
World.add(world,this.body)
}
display(){
var pos=this.body.position
push()
translate(pos.x,pos.y)
strokeWeight(3)
stroke("white")
fill(100)
rect(0,0,this.width,this.height)
pop()
}
}