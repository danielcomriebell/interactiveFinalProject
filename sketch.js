var world;
var theData;
var theHoop;
var zones;
var cheer; 

var ballThrown;

// array to hold our ball throws
var ballThrows = [];

//loading sounds and data set
function preload(){
  table = loadTable("data/team_data.csv", "csv", "header");
  
  cheer = loadSound("images/cheer.mp3");
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
	
	zones = new Zones();
	zones.displayZones();
	
}


function draw() {
  
	  // update all ball throw objects
  for (var i = 0; i < ballThrows.length; i++) {
    ballThrows[i].move();
    ballThrows[i].checkThrow();
    if (ballThrows[i].ballThrown) {
       ballThrows.splice(i, 1);
       i--;
     }
  }

}

function keyPressed() {

  if (key == 'B') {
    // add a new ball throw
    ballThrows.push( new BallThrow() );
    console.log(ballThrows)

  }
  
  if (key == 'C') {
	world.moveUserForward(1);
	}


}


function BallThrow() {
  // grab the camera's current position
  this.cameraCurrentPositionX = world.camera.x;
  this.cameraCurrentPositionY = world.camera.y;
  this.cameraCurrentPositionZ = world.camera.z;
  
  this.cameraCurrentRotationX = world.camera.rotationX;
  this.cameraCurrentRotationY = world.camera.rotationY;
  this.cameraCurrentRotationZ = world.camera.rotationZ;
  
  //console.log("Position" + this.cameraCurrentPositionX + ", " + this.cameraCurrentPositionY + ", " + this.cameraCurrentPositionZ);
  //console.log("Rotation:" + this.cameraCurrentRotationX + ", " + this.cameraCurrentRotationY + ", " + this.cameraCurrentRotationZ);

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
    asset: 'ball',
    ballThrown: false
    });
  // add the sphere to our container
  this.container.addChild(this.ball);
  
  //Middle
  if (this.cameraCurrentPositionX === -15) {
    this.ballVelocityZ = -0.30;
    this.ballVelocityY = 0.32;
  }
  
  else if (this.cameraCurrentPositionX === -23) {
    this.ballVelocityZ = -0.3;
    this.ballVelocityY = 0.3;
  }
  
  else if (this.cameraCurrentPositionX === -19) {
    this.ballVelocityZ = -.3;
    this.ballVelocityY = 0.3;
  }

  
  // a move function to update the position of the ball
  this.move = function() {
    // move the ball using our velocity values
    this.ball.nudge(0, this.ballVelocityY, this.ballVelocityZ);
    
    // update Y velocity to simulate gravity
    this.ballVelocityY -= 0.01;
    
  }
  
  this.checkThrow = function() {
    console.log("x: " + this.cameraCurrentRotationX + " y: " + this.cameraCurrentRotationY + " z: " + this.cameraCurrentRotationZ);
    console.log("x: " + this.ball.x + " y: " + this.ball.y + " z: " + this.ball.z);
  
    //We can now throw away the ball throw  
    if (this.ball.y < -5) {
    this.ballThrown = true;
    }
    
    //a successful hit from middle
    if ((this.ball.y < -4 && this.ball.y > -5) && (this.ball.z < -22 && this.ball.z > -25)) {
      if (this.cameraCurrentRotationX < 7.8 && this.cameraCurrentRotationX > 5.8 && this.cameraCurrentRotationY < 87 && this.cameraCurrentRotationY > 85) {
              console.log("success");
              cheer.play();
      }
      
    //from right
     else if (this.cameraCurrentRotationX < 9.8 && this.cameraCurrentRotationX > 9 && this.cameraCurrentRotationY < 109 && this.cameraCurrentRotationY > 103) {
              console.log("success");
              cheer.play();
      }
      
      else if (this.cameraCurrentRotationX < 9 && this.cameraCurrentRotationX > 7 && this.cameraCurrentRotationY < 66 && this.cameraCurrentRotationY > 61) {
          console.log("success");
          cheer.play();
      }
    }
    
    //a successful hit from left

  }
}



