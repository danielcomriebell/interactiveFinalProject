var world;
var theData;
var theHoop;

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
}

