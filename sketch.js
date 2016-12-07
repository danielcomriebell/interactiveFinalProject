var world;
var theData;
var thisworking;

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
	
	var hoopBase = new Cylinder({
						x: -45 , y:0, z:0,
						height:15,
						radius: 0.2,
						red:0, green:0, blue:0,
					});
	world.add(hoopBase);
	
	var backboard = new Plane({
						x: -45, y:8, z:0,
						width: 5, height:5,
						red:255, green:255, blue:255,
						opacity: .5,
						rotationY: -90,
						side:'double'
					});
	world.add(backboard);
	
	var hoop = new Torus({
						x: -43, y: 7, z: 0,
						radius: 0.9,
						radiusTubular: 0.09,
						red: 205, green: 50, blue: 5,
						rotationY: -90,
						rotationX: -90
					
					});
	world.add(hoop);
	
	var net = new Cylinder({
						x: -43 , y: 6, z: 0,
						radius: 0.9,
						asset: 'net',
						rotationY: 90,
						openEnded: true,
						side: 'double',
						opacity: .8
					});
	world.add(net);
	
}


	



function draw() {
	if (mouseIsPressed || touchIsDown) {
		world.moveUserForward(0.1);
	}
}

