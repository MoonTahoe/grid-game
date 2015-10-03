Grid Game
==========
Learn Functional Programming and ES6 by building the tools to create 2048 styled games that use different grid sizes 
and different multiples.

### Under Construction
These are exercise files for ES6/Functional programming courses.

```javascript

      import Game from './lib/index'
      
      const gridSize = 3;
      const multiple = 3;
      
      var funGame = new Game(gridSize, multiple);
      
      funGame.on('start', grid => console.log(grid));
      funGame.on('move', grid => console.log(grid));
      funGame.on('error', error => {
          console.log("Error: " + error);
          clearInterval(upInterval);
      });
      
      var upInterval = setInterval(() => funGame.up(), 1000);
   
```

### Under Construction

* Game class needs Tests
* SHOULD NOT ADD a Tile when you can no longer move in a direction
    * Technically a bunch of lefts should not end the game
* Game is working but is funkey
* Functions should return the same type not array or false
* Instead of returning false consider using promises
* Reduce Redundant Code Found in Game class
* Cannot rotate rectangle grids, array.map() is making them all squares
