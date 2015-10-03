//
//  TODO: Refactor this code, Test this code
//
//     - Game is working but is funkey
//     - Functions should return the same type not array or false
//     - Instead of returning false consider using promises
//

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _tools = require('./tools');

var _tools2 = _interopRequireDefault(_tools);

var createHandler = _tools2['default'].createHandler;
var createAddHandler = _tools2['default'].createAddHandler;
var createMatrix = _tools2['default'].createMatrix;

var Game = (function (_EventEmitter) {
    _inherits(Game, _EventEmitter);

    function Game() {
        var gridSize = arguments.length <= 0 || arguments[0] === undefined ? [4, 4] : arguments[0];
        var multiple = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

        _classCallCheck(this, Game);

        _get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this);

        // Binding Methods
        this.emitMove = this.emitMove.bind(this);
        this.add = this.add.bind(this);
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);

        // Checking Paramaters
        if (!Array.isArray(gridSize) || !gridSize.every(function (x) {
            return typeof x === 'number';
        })) {
            throw new Error('Grid Size needs to be in array of integers [rows,cols]');
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
            get: function get() {
                return this._grid[this._grid.length - 1];
            },
            set: function set(value) {
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

    _createClass(Game, [{
        key: 'emitMove',
        value: function emitMove(direction) {
            this.emit('move', {
                direction: direction,
                grid: this.grid
            });
            return this;
        }
    }, {
        key: 'add',
        value: function add() {
            var success = arguments.length <= 0 || arguments[0] === undefined ? function (x) {
                return false;
            } : arguments[0];

            //
            //  TODO: Fix this: make it work, make it right, make it fast
            //     - consider using promises success | fail
            //

            if (!this.addTile(this.grid)) {
                this.emit('end', { moves: this._grid.length });
            } else {
                this.emit('newTile', this.grid);
                success();
            }
            return this;
        }
    }, {
        key: 'left',
        value: function left() {
            var _this = this;

            //
            //  TODO: Fix this: make it work, make it right, make it fast
            //      - consider using promises success | fail
            //

            var g = this.moveLeft(this.grid);
            this.grid = g ? g : this.grid;
            this.add(function (x) {
                return _this.emitMove('left');
            });
            return this;
        }
    }, {
        key: 'right',
        value: function right() {
            var _this2 = this;

            //
            //  TODO: Fix this: make it work, make it right, make it fast
            //      - consider using promises success | fail
            //

            var g = this.moveRight(this.grid);
            this.grid = g ? g : this.grid;
            this.add(function (x) {
                return _this2.emitMove('right');
            });
            return this;
        }
    }, {
        key: 'up',
        value: function up() {
            var _this3 = this;

            //
            //  TODO: Fix this: make it work, make it right, make it fast
            //      - consider using promises success | fail
            //

            var g = this.moveUp(this.grid);
            this.grid = g ? g : this.grid;
            this.add(function (x) {
                return _this3.emitMove('up');
            });
            return this;
        }
    }, {
        key: 'down',
        value: function down() {
            var _this4 = this;

            //
            //  TODO: Fix this: make it work, make it right, make it fast
            //      - consider using promises success | fail
            //

            var g = this.moveDown(this.grid);
            this.grid = g ? g : this.grid;
            this.add(function (x) {
                return _this4.emitMove('down');
            });
            return this;
        }
    }]);

    return Game;
})(_events2['default']);

Game.prototype.addTile = createAddHandler(0.5, Game.multiple);
Game.prototype.moveLeft = createHandler('left');
Game.prototype.moveRight = createHandler('right');
Game.prototype.moveUp = createHandler('up');
Game.prototype.moveDown = createHandler('down');

module.exports = Game;