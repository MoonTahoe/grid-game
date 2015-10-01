import EventEmitter from 'events';
import tools from './tools';

var { createHandler, generateAddHandler, generateBoard } = tools;

class Game extends EventEmitter {

    constructor(gridSize, multiple) {
        super();

        // Binding Methods
        this.emitMove = this.emitMove.bind(this);
        this.add = this.add.bind(this);
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);

        // Game multiple
        this.multiple = multiple;
        this.gridSize = gridSize;

        // Cretting an acessor for grid
        this._grid = [];
        Object.defineProperty(this, 'grid', {
            get() {
                return this._grid[this._grid.length - 1];
            },
            set(value) {
                this._grid.push(value);
            }
        });

        // Generating teh Game Board
        this.grid = this.generateMatrix(this.gridSize, this.multiple);

        this.add();

        // Emitting a start Event
        this.emit('start', this.grid);
    }

    emitMove(direction) {
        this.emit('move', {
            direction: direction,
            grid: this.grid
        });
    }

    add() {
        this.addTile(this.grid);
        this.emit('newTile', this.grid);
    }

    left() {
        this.moveLeft(this.grid);
        this.emitMove('left');
    }

    right() {
        this.moveRight(this.grid);
        this.emitMove('right');
    }

    up() {
        this.moveUp(this.grid);
        this.emitMove('up');
    }

    down() {
        this.moveDown(this.grid);
        this.emitMove('down');
    }

}

Game.prototype.addTile = generateAddHandler(0.5, Game.multiple);
Game.prototype.moveLeft = generateHandler('left');
Game.prototype.moveRight = generateHandler('right');
Game.prototype.moveUp = generateHandler('up');
Game.prototype.moveDown = generateHandler('down');

module.exports = Game;