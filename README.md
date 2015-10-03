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

1. Refactor Game Object, promises, better code
2. Write Tests for Game Object
3. Remove Sample and npm run configuration for sample
4. Finalize Readme.md 
5. Fix issue caused by __npm run compile__ on node v4.0 __**Segmentation fault: 11**__
