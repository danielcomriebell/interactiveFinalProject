function Zones() {

  this.displayZones = function() {
  	
  	var zone1 = new Plane({
  						x: -18, y:-4.9, z:0,
  						width: 5, height:5,
  						red:255, green:255, blue:255,
  						opacity: 1,
  						rotationX: -90,
  						side:'double'
  					});
  	world.add(zone1);
  	
  }
}