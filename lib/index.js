'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _tools = require('./tools');

var _tools2 = _interopRequireDefault(_tools);

var generateHandler = _tools2['default'].generateHandler;
var generateAddHandler = _tools2['default'].generateAddHandler;
var ImmutableGrid = _tools2['default'].ImmutableGrid;

var Game = (function (_EventEmitter) {
    function Game(gridSize, multiple) {
        _classCallCheck(this, Game);

        _get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this);

        // Binding Methods
        this.emitMove = this.emitMove.bind(this);
        this.add = this.add.bind(this);
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);

        // Setting up immutable grid
        this._grid = [];
        Object.defineProperty(this, 'grid', {
            get: function get() {
                return this._grid[this._grid.length - 1];
            },
            set: function set(value) {
                this._grid.push(value);
            }
        });

        // Adding First Two Tiles to Grid
        this.add(this.grid);
        this.add(this.grid);

        // Emitting a start Event
        this.emit('start', this.grid);
    }

    _inherits(Game, _EventEmitter);

    _createClass(Game, [{
        key: 'emitMove',
        value: function emitMove(direction) {
            this.emit('move', {
                direction: direction,
                grid: this.grid
            });
        }
    }, {
        key: 'add',
        value: function add() {
            this.addTile(this.grid);
            this.emit('newTile', this.grid);
        }
    }, {
        key: 'left',
        value: function left() {
            this.moveLeft(this.grid);
            this.emitMove('left');
        }
    }, {
        key: 'right',
        value: function right() {
            this.moveRight(this.grid);
            this.emitMove('right');
        }
    }, {
        key: 'up',
        value: function up() {
            this.moveUp(this.grid);
            this.emitMove('up');
        }
    }, {
        key: 'down',
        value: function down() {
            this.moveDown(this.grid);
            this.emitMove('down');
        }
    }]);

    return Game;
})(_events2['default']);

Game.prototype.addTile = generateAddHandler(1 / 2);
Game.prototype.moveLeft = generateHandler('left');
Game.prototype.moveRight = generateHandler('right');
Game.prototype.moveUp = generateHandler('up');
Game.prototype.moveDown = generateHandler('down');

module.exports = Game;