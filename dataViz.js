function vizData () {
  
  this.dataDisplay = function(){
    
    //create a translucent plane behind the data visualization (from -22 to 30)
    
    
    
    var xVal = -20;
    
    for (var i = 0; i < 12; i++) {
      newColumn(xVal,-2,-20);
      xVal += 4;
    }
    
    //create the label rect for each team
    var label = new Box({
                      x:0,
                      y:10,
                      z:-20,
                      width: 5,
                      height: 2,
                      depth: 2,
                      red: 255,
                      green: 255,
                      blue: 255
                                
                      });

  // add the entity to the world
  world.add( label );
  
  
  //create the up and down buttons for team scroll
  
  //left button
  var leftButton = new Box({
                      x:-5,
                      y:10,
                      z:-20,
                      width: 2,
                      height: 2,
                      depth: 2,
                      red: 255,
                      green: 0,
                      blue: 0
                                
                      });

  // add the entity to the world
  world.add( leftButton );
    
    
   //right button
  var rightButton = new Box({
                      x:5,
                      y:10,
                      z:-20,
                      width: 2,
                      height: 2,
                      depth: 2,
                      red: 0,
                      green: 255,
                      blue: 0
                                
                      });

  // add the entity to the world
  world.add( rightButton );
  }
  
  
}


function newColumn (x,y,z) {
  
   // create a box entity.  entities take arguments in the form of an Object
  var box = new Box({
                      x:x,
                      y:y,
                      z:z,
                      width: 2,
                      height:5,
                      depth: 2,
                      red: 0,
                      green: 0,
                      blue: 255
                                
                      });

  // add the entity to the world
  world.add( box );
}