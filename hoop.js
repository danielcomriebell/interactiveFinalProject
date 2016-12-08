function Hoop() {

  
  this.displayHoop = function() {

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
}