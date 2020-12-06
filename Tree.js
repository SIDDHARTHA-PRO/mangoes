class Tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;

		
		this.image=loadImage("images/tree.png")
		this.body=Bodies.rectangle(this.x, this.y, {isStatic:true})
		
		World.add(world, this.body)
	

	}
	display()
	{
			
			push()
			translate(this.body.position.x,this.body.position.y);
			fill(255)
			imageMode(CENTER);
			image(this.image, 760,450,450,450)
			pop()
			
    }
}