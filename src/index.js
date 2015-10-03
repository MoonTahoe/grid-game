//
//  TODO: Refactor this code, Test this code
//
//     - Game is working but is funkey
//     - Functions should return the same type not array or false
//     - Instead of returning false consider using promises
//

import EventEmitter from 'events';
import tools from './tools';

var { createHandler, createAddHandler, createMatrix } = tools;

class Game extends EventEmitter {

    constructor(gridSize = [4, 4], multiple = 2) {
        super();

        // Binding Methods
        this.emitMove = this.emitMove.bind(this);
        this.add = this.add.bind(this);
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);

        // Checking Paramaters
        if (!Array.isArray(gridSize) || !gridSize.every(x=>typeof x === 'number')) {
            throw new Error('Grid Size needs to be in array of integers [rows,cols]')
        }

        if (typeof multiple !== 'number' || multiple < 2) {
            throw new Error('Game multiple must be a number greater than 1');
        }

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

        // Generating the Game Board
        this.grid = createMatrix(this.gridSize);

        // Add Two Tiles to get the game started
        this.add().add();

        // Emitting a start Event
        this.emit('start', this.grid);
    }

    emitMove(direction) {
        this.emit('move', {
            direction: direction,
            grid: this.grid
        });
        return this;
    }

    add(success = x => false) {

        //
        //  TODO: Fix this: make it work, make it right, make it fast
        //     - consider using promises success | fail
        //

        if(!this.addTile(this.grid)) {
           this.emit('end', { moves: this._grid.length });
        } else {
            this.emit('newTile', this.grid);
            success();
        }
        return this;
    }

    left() {

        //
        //  TODO: Fix this: make it work, make it right, make it fast
        //      - consider using promises success | fail
        //

        var g = this.moveLeft(this.grid);
        this.grid = (g) ? g : this.grid;
        this.add(x => this.emitMove('left'));
        return this;
    }

    right() {

        //
        //  TODO: Fix this: make it work, make it right, make it fast
        //      - consider using promises success | fail
        //

        var g = this.moveRight(this.grid);
        this.grid = (g) ? g : this.grid;
        this.add(x => this.emitMove('right'));
        return this;
    }

    up() {

        //
        //  TODO: Fix this: make it work, make it right, make it fast
        //      - consider using promises success | fail
        //

        var g = this.moveUp(this.grid);
        this.grid = (g) ? g : this.grid;
        this.add(x => this.emitMove('up'));
        return this;
    }

    down() {

        //
        //  TODO: Fix this: make it work, make it right, make it fast
        //      - consider using promises success | fail
        //

        var g = this.moveDown(this.grid);
        this.grid = (g) ? g : this.grid;
        this.add(x => this.emitMove('down'));
        return this;
    }

}

Game.prototype.addTile = createAddHandler(0.5, Game.multiple);
Game.prototype.moveLeft = createHandler('left');
Game.prototype.moveRight = createHandler('right');
Game.prototype.moveUp = createHandler('up');
Game.prototype.moveDown = createHandler('down');

module.exports = Game;
