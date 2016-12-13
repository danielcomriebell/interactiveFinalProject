function vizData (state) {
  
    
    
    this.dataDisplay = function(){
      addingDataBackground();
      var xVal1 = -12;
      dataViz(table5);
      drawBarGraph(state);
    
    //create labels for each column
      for (var j = 0; j < 7; j++) {
          newLabel(xVal1,-4,-25);
          xVal1 += 4;
      }
    }
    
    this.stateDisplay =  function(state){
      drawBarGraph(state);
    }
}

function addingDataBackground() {
  //create a translucent plane behind the data visualization (from -12 to 40)
  var plane1 = new Plane({
    x: 0,
    y: 5,
    z: -35,
    width: 50,
    height: 75,
    red: 150,
    green: 150,
    blue: 150,
    opacity: .95
  });

  // add the plane to the world
  world.add(plane1);
}

function newLabel(x, y, z){
    var box = new Box({
                      x:x,
                      y:y,
                      z:z,
                      width: 3,
                      height:2,
                      depth: .5,
                      red: 200,
                      green: 200,
                      blue: 200
                                
                      });

  // add the entity to the world
  world.add( box );
}

function dataViz(table) {
      var arr1 = [];
      var objArr = [];
      // var objArr1 = [];
      var obj;
      for (var r = 0; r < table.getRowCount(); r++) {
        arr1.push(table.getRow(r).obj);
      }
    
      for (var i = 0; i < arr1.length; i++) {
        objArr.push({
          "name": arr1[i].Team,
          "ppg": arr1[i].PTS,
          "blocks": arr1[i].BLK,
          "threepointattempted": arr1[i].TPA,
          "steals": arr1[i].STL,
          "assists": arr1[i].AST,
          "trb": arr1[i].TRB,
          "FGA": arr1[i].FGA
        });
      }
      
      for(var q = 0; q < objArr.length; q++){
        objArr1.push({
          "name": objArr[q].name,
          "points": objArr[q].ppg,
          "blocks": objArr[q].blocks,
          "threepointattempted": objArr[q].threepointattempted,
          "steals": objArr[q].steals,
          "assists": objArr[q].assists,
          "trb":objArr[q].trb,
          "fga":objArr[q].FGA
        })
      }
      
      
      //console.log(objArr1);
}

function drawBarGraph(state){
        var a = -12;
        var b = 0;
        var c = 0;
          
        var dataViz = new Box({
          x: a,
          y: b,
          z: -30,
          width: 3,
          height: objArr1[state].points,
          depth: 2,
          scaleY:.5,
          red:255, green:26, blue:26,
          opacity: .9
        });
        
        // world.add(dataViz);
        
        var dataViz2 = new Box({
          x: a + 4,
          y: b,
          z: -30,
          width: 3,
          height: objArr1[state].blocks,
          depth: 2,
          scaleY:2.8,
          red:255, green:26, blue:26,
          opacity: .9
        });
        
        // world.add(dataViz2);
        
        var dataViz3 = new Box({
          x: a + 8,
          y: b,
          z: -30,
          width: 3,
          height: objArr1[state].threepointattempted,
          depth: 2,
          scaleY:2,
          red:255, green:26, blue:26,
          opacity: .9
        });
        
        // world.add(dataViz3);
                
        var dataViz4 = new Box({
          x: a + 12,
          y: b,
          z: -30,
          width: 3,
          height: objArr1[state].assists ,
          depth: 2,
          scaleY:2,
          red:255, green:26, blue:26,
          opacity: .9
        });
        
        var dataViz5 = new Box({
          x: a + 16,
          y: b,
          z: -30,
          width: 3,
          height: objArr1[state].steals ,
          depth: 2,
          scaleY:2,
          red:255, green:26, blue:26,
          opacity: .9
        });
        
        var dataViz6 = new Box({
          x: a + 20,
          y: b,
          z: -30,
          width: 3,
          height: objArr1[state].trb ,
          depth: 2,
          scaleY:1,
          red:255, green:26, blue:26,
          opacity: .9
        });
        
        var dataViz7 = new Box({
          x: a + 24,
          y: b,
          z: -30,
          width: 3,
          height: objArr1[state].fga ,
          depth: 2,
          scaleY:.5,
          red:255, green:26, blue:26,
          opacity: .9
        });  
        
        world.add(dataViz);
        world.add(dataViz2);
        world.add(dataViz3);
        world.add(dataViz4);
        world.add(dataViz5);
        world.add(dataViz6);
        world.add(dataViz7);
}