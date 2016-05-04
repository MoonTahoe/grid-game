Grid Game
==========
Learn Functional Programming and ES6 by building the tools to create 2048 styled games that use different grid sizes 
and different multiples.

### UNSTABLE
This first release of the grid-game module still has some issues.

```javascript

      import Game from './lib/index'
      
      const gridSize = [3,3];
      const multiple = 3;
      
      var funGame = new Game(gridSize, multiple);
      
      funGame.on('start', grid => console.log(grid));
      funGame.on('move', grid => console.log(grid));
      funGame.on('end', results => {
          clearInterval(upInterval);
          console.log(`Game Ended after ${results.moves} moves`);
      });
      
      var upInterval = setInterval(() => funGame.up(), 1000);
   
```
