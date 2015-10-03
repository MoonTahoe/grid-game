import Game from './lib/index'

const gridSize = [3,3];
const multiple = 3;

var funGame = new Game(gridSize, multiple);

funGame.on('start', x => console.log(x.grid));
funGame.on('move', x => console.log(x.grid));
funGame.on('end', x => {
    clearInterval(upInterval);
    console.log(`Game over after ${x.moves}`);
});
funGame.on('error', error => {
    clearInterval(upInterval);
    console.log("Error: " + error);
});

var upInterval = setInterval(() => funGame.left(), 500);