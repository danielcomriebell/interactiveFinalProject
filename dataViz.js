function vizData () {
  
  this.dataDisplay = function(){

    //create a translucent plane behind the data visualization (from -12 to 40)
    var plane1 = new Plane({
                        x:11, y:5, z:-35, 
            						width:80, height:25, 
            						red: 150, green: 150, blue: 150,
            						opacity: .95
                        });
                        
  // add the plane to the world
  world.add(plane1);
    
    
    var xVal1 = -12;
    
    //create labels for each column
    for (var j = 0; j < table.getColumnCount() - 2; j++) {
      newLabel(xVal1,7,-20);
      xVal1 += 4;
    }
    
    
    //starting value for the data
    var xVal2 = -12;
    
    //make the columns for all the data (will be individually set for each column in the row)
    for (var i = 0; i < table.getColumnCount() - 2; i++) {
      newColumn(xVal2,-2,-20);
      xVal2 += 4;
    }
    
    //create the label rect for each team
    var label = new Box({
                      x:10,
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
                      x:5,
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
                      x:15,
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
                      blue: 255,
                      opacity: .7
                                
                      });

  // add the entity to the world
  world.add( box );
}

function newLabel(x,y,z) {
   // create a box entity.  entities take arguments in the form of an Object
  var box = new Box({
                      x:x,
                      y:y,
                      z:z,
                      width: 3,
                      height:1.5,
                      depth: .5,
                      red: 200,
                      green: 200,
                      blue: 200
                                
                      });

  // add the entity to the world
  world.add( box );
}