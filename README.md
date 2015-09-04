Grid Game
==========
Learn Functional Programming and ES6 by building the tools to create 2048 styled games that use different grid sizes 
and different multiples.

### Under Construction
These are exercise files for ES6/Functional programming courses.

```javascript

   import Game from 'grid-game'
   
   const gridSize = 3;
   const multiple = 3;
   
   var niceGame = new Game(gridSize, multiple);
   
   niceGame.on('start', grid => console.log(grid));
   niceGame.on('move', grid => console.log(grid));
   niceGame.on('error', error => {
       console.log("Error: " + error);
       clearInterval(upInterval);
   });
   
   var upInterval = setInterval(() => niceGame.up(), 1000);
   
```