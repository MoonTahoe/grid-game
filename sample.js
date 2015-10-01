import Game from './lib/index'

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