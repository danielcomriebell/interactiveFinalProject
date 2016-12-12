function Hoop() {

  
  this.displayHoop = function() {

    var hoopBase = new Cylinder({
  						x: -45 , y:0, z:0,
  						height:25,
  						radius: 0.5,
  						red:0, green:0, blue:0,
  					});
  	world.add(hoopBase);
  	
  	var backboard = new Plane({
  						x: -45, y:15, z:0,
  						width: 8, height:8,
  						red:255, green:255, blue:255,
  						opacity: .8,
  						rotationY: -90,
  						side:'double'
  					});
  	world.add(backboard);
  	
  	var hoop = new Torus({
  						x: -43, y: 14, z: 0,
  						radius: 1.9,
  						radiusTubular: .09,
  						red: 205, green: 50, blue: 5,
  						rotationY: -90,
  						rotationX: -90
  					
  					});
  	world.add(hoop);
  	
  	var net = new Cylinder({
  						x: -43 , y: 13, z: 0,
  						radius: 1.9,
  						asset: 'net',
  						rotationY: 90,
  						openEnded: true,
  						side: 'double',
  						opacity: .9
  					});
  	world.add(net);
  }
}