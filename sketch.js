var world;
var theData;
var theHoop;

// array to hold our ball throws
var ballThrows = [];

//loading sounds and data set
function preload(){
  table = loadTable("data/team_data.csv", "csv", "header");
}

function setup() {
	noCanvas();
	
	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');
	 
	
	container = new Container3D({x:0, y:1, z:-5});
	world.add(container);
	
	theData = new vizData();
	theData.dataDisplay();
	
  // create a plane to serve as our "ground"
	var g = new Plane({
						x:0, y:-5, z:0, 
						width:100, height:100, 
						asset: 'court',
						// repeatX: 100,
						// repeatY: 100,
						rotationX:-90, metalness:0.25
					   });
	
	g.tag.setAttribute('class', 'solid');
	world.add(g);
	
	
	//READING IN THE DATA SET
	print (table.getRowCount() + "total rows in table");
	print (table.getColumnCount() + "total columns in table");
	print(table.getColumn("name"));
	
	
	for(var r = 0; r < table.getRowCount(); r++){
	  for(var c =0; c < table.getColumnCount(); c++){
	    print(table.getString(r,c));
	  }
	}
	
	theHoop = new Hoop();
	theHoop.displayHoop();

	
}


function draw() {
	if (mouseIsPressed || touchIsDown) {
		world.moveUserForward(0.1);
	}
	
	  // update all ball throw objects
  for (var i = 0; i < ballThrows.length; i++) {
    ballThrows[i].move();
  }
}

function keyPressed() {
  
  if (key == 'B') {
    // add a new ball throw
    ballThrows.push( new BallThrow() );
  }
}


function BallThrow() {
  // grab the camera's current position
  this.cameraCurrentPositionX = world.camera.x;
  this.cameraCurrentPositionY = world.camera.y;
  this.cameraCurrentPositionZ = world.camera.z;
  
  // grab the camera's current rotation value -- note that this is only possible
  // with Craig's updated aframep5.js file that was sent to Elif on 12/7/2016
  this.cameraCurrentRotationX = world.camera.rotationX;
  this.cameraCurrentRotationY = world.camera.rotationY;
  this.cameraCurrentRotationZ = world.camera.rotationZ;
  
  //console.log(this.cameraCurrentPositionX + ", " + this.cameraCurrentPositionY + ", " + this.cameraCurrentPositionZ);
  
  // create a container object that will hold the ball
  this.container = new Container3D({
    x:this.cameraCurrentPositionX,
    y:this.cameraCurrentPositionY,
    z:this.cameraCurrentPositionZ,
    rotationX:this.cameraCurrentRotationX,
    rotationY:this.cameraCurrentRotationY,
    rotationZ:this.cameraCurrentRotationZ
  });
  
  // add the container to the world
  world.add( this.container );
  
  // create a sphere object that originates at 0,0,-1 in the container (essentially in front of the user)
  this.ball = new Sphere({
    x:0,
    y:0,
    z:-1,
    radius:0.5,
    red:255,
    green:0,
    blue:0,
    metalness:1.0
  });
  // add the sphere to our container
  this.container.addChild(this.ball);
  
  // give the sphere some forward velocity (z)
  this.ballVelocityZ = -0.4;
  
  // give the sphere some upward velocity (y)
  this.ballVelocityY = 0.4;
  
  // a move function to update the position of the ball
  this.move = function() {
    // move the ball using our velocity values
    this.ball.nudge(0, this.ballVelocityY, this.ballVelocityZ);
    
    // update Y velocity to simulate gravity
    this.ballVelocityY -= 0.01;
  }
}



