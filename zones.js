function Zones() {

  this.displayZones = function() {
  	
  	var zone1 = new Circle({
  						x: -18, y:-4.9, z:0,
  						radius:5,
  						red:255, green:26, blue:26,
  						opacity: 1,
  						rotationX: -90,
  						side:'double',
  						clickFunction: function(moveToZone) {
          			world.camera.setPosition(-15, 4, 2);
          			//world.camera.setRotation(6.187944187412901, 85.82907771059736, 0);
			        }
  					});
  	world.add(zone1);
  	
  	var zone2 = new Circle({
  						x: -19, y:-4.3, z:15,
  						radius:5,
  						red:255, green:26, blue:26,
  						opacity: 1,
  						rotationX: -90,
  						side:'double',
  						clickFunction: function(moveToZone) {
          			world.camera.setPosition(-19, 4, 11);
          			//world.camera.setRotation(6.187944187412901, 85.82907771059736, 0);
			        }
  					});
  	world.add(zone2);
  	
  	var zone3 = new Circle({
  						x: -23, y:-4.3, z:-11,
  						radius:5,
  						red:255, green:26, blue:26,
  						opacity: 1,
  						rotationX: -90,
  						side:'double',
  						clickFunction: function(moveToZone) {
          			world.camera.setPosition(-23, 4, -6);
          			//world.camera.setRotation(6.187944187412901, 85.82907771059736, 0);
			        }
  					});
  	world.add(zone3);

  	
  	var homeZone = new Plane({
  						x: -33, y:-4.3, z:-6,
  						width: 2, height:2,
  						red:255, green:0, blue:0,
  						opacity: 1,
  						rotationX: -90,
  						side:'double',
  						clickFunction: function(moveToZone) {
          			world.camera.setPosition(0, 1, 5);
          			//world.camera.setRotation(6.187944187412901, 85.82907771059736, 0);
			        }
  					});
  	world.add(homeZone);
}

}