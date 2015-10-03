'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var tools = {

    createTile: function createTile() {
        var rate = arguments.length <= 0 || arguments[0] === undefined ? 0.5 : arguments[0];
        var multiple = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

        return Math.random() >= rate ? multiple : multiple * 2;
    },

    createMatrix: function createMatrix() {
        var gridSize = arguments.length <= 0 || arguments[0] === undefined ? [4, 4] : arguments[0];

        return Array.apply(null, Array(gridSize[0])).map(function (x) {
            return Array.apply(null, Array(gridSize[1])).map(function (y) {
                return 0;
            });
        });
    },

    zeroFill: function zeroFill(arr, end) {
        return Array.apply(null, Array(end)).map(function (x, i) {
            return arr[i] ? arr[i] : 0;
        });
    },

    zeroRemove: function zeroRemove(row) {
        return row.filter(function (cell) {
            return cell;
        });
    },

    getRandom: function getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    copy: function copy(arr) {
        return arr.map(function (x) {
            return x;
        });
    },

    pluck: function pluck(i, matrix) {
        return matrix.map(function (x) {
            return x[i];
        });
    },

    reverse: function reverse(arr) {
        return arr.map(function (x) {
            return x;
        }).reverse();
    },

    flatten: function flatten() {
        var arr = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        return arr.length ? arr.reduce(function (p, n, i) {
            return [].concat(_toConsumableArray(p), _toConsumableArray(n));
        }) : arr;
    },

    availableSeats: function availableSeats() {
        var matrix = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
        var zeroRemove = arguments.length <= 1 || arguments[1] === undefined ? tools.zeroRemove : arguments[1];
        var flatten = arguments.length <= 2 || arguments[2] === undefined ? tools.flatten : arguments[2];

        return zeroRemove(flatten(matrix.map(function (row, i) {
            return row.map(function (cell, j) {
                return cell === 0 ? i + ':' + j : 0;
            });
        })));
    },

    hasAvailableSeats: function hasAvailableSeats() {
        var matrix = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
        var availableSeats = arguments.length <= 1 || arguments[1] === undefined ? tools.availableSeats : arguments[1];

        return availableSeats(matrix).length > 0;
    },

    rotate: function rotate(matrix) {
        var pluck = arguments.length <= 1 || arguments[1] === undefined ? tools.pluck : arguments[1];

        return matrix.map(function (row, i, arr) {
            return tools.reverse(pluck(i, arr));
        });
    },

    rotateReturn: function rotateReturn(matrix) {
        var reverse = arguments.length <= 1 || arguments[1] === undefined ? tools.reverse : arguments[1];
        var pluck = arguments.length <= 2 || arguments[2] === undefined ? tools.pluck : arguments[2];

        return reverse(matrix.map(function (row, i, arr) {
            return pluck(i, arr);
        }));
    },

    addItems: function addItems(current, next) {
        return current === next ? current * 2 : current;
    },

    zeroDiff: function zeroDiff(oldArray, newArray) {
        return newArray.map(function (item, i, arr) {
            return oldArray[i - 1] === newArray[i - 1] ? item : 0;
        });
    },

    collapseRow: function collapseRow(row) {
        var zeroFill = arguments.length <= 1 || arguments[1] === undefined ? tools.zeroFill : arguments[1];
        var addNeighbors = arguments.length <= 2 || arguments[2] === undefined ? tools.addNeighbors : arguments[2];

        return zeroFill(addNeighbors(row), row.length);
    },

    collapseLeft: function collapseLeft() {
        var collapse = arguments.length <= 0 || arguments[0] === undefined ? tools.collapseRow : arguments[0];

        return function (row) {
            return collapse(row);
        };
    },

    collapseRight: function collapseRight() {
        var collapse = arguments.length <= 0 || arguments[0] === undefined ? tools.collapseRow : arguments[0];
        var reverse = arguments.length <= 1 || arguments[1] === undefined ? tools.reverse : arguments[1];

        return function (row) {
            return reverse(collapse(reverse(row)));
        };
    },

    setCollapseFunction: function setCollapseFunction() {
        var direction = arguments.length <= 0 || arguments[0] === undefined ? 'left' : arguments[0];
        var collapseRight = arguments.length <= 1 || arguments[1] === undefined ? tools.collapseRight : arguments[1];
        var collapseLeft = arguments.length <= 2 || arguments[2] === undefined ? tools.collapseLeft : arguments[2];
        var collapseRow = arguments.length <= 3 || arguments[3] === undefined ? tools.collapseRow : arguments[3];

        return direction.match(/right|up/) ? collapseRight(collapseRow) : collapseLeft(collapseRow);
    },

    rotateAndCollapse: function rotateAndCollapse(matrix, collapseFunction) {
        var rotateReturn = arguments.length <= 2 || arguments[2] === undefined ? tools.rotateReturn : arguments[2];
        var rotate = arguments.length <= 3 || arguments[3] === undefined ? tools.rotate : arguments[3];

        return rotateReturn(rotate(matrix).map(collapseFunction));
    },

    addNeighbors: function addNeighbors(row) {
        var zeroRemove = arguments.length <= 1 || arguments[1] === undefined ? tools.zeroRemove : arguments[1];

        return zeroRemove(zeroRemove(row).map(function (cell, i, arr) {
            if (cell === arr[i + 1]) {
                arr[i + 1] = 0;
                return cell * 2;
            } else if (cell) {
                return cell;
            } else {
                return 0;
            }
        }));
    },

    createAddHandler: function createAddHandler() {
        var rate = arguments.length <= 0 || arguments[0] === undefined ? 0.5 : arguments[0];
        var multiple = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
        var availableSeats = arguments.length <= 2 || arguments[2] === undefined ? tools.availableSeats : arguments[2];
        var copy = arguments.length <= 3 || arguments[3] === undefined ? tools.copy : arguments[3];
        var getRandom = arguments.length <= 4 || arguments[4] === undefined ? tools.getRandom : arguments[4];
        var createTile = arguments.length <= 5 || arguments[5] === undefined ? tools.createTile : arguments[5];

        return function (matrix) {
            var seat,
                seats = availableSeats(matrix),
                newMatrix = copy(matrix);
            if (seats.length) {
                seat = getRandom(seats).split(':');
                newMatrix[seat[0]][seat[1]] = createTile(rate, multiple);
                return newMatrix;
            } else {
                return false;
            }
        };
    },

    createHandler: function createHandler() {
        var direction = arguments.length <= 0 || arguments[0] === undefined ? 'left' : arguments[0];
        var setCollapseFunction = arguments.length <= 1 || arguments[1] === undefined ? tools.setCollapseFunction : arguments[1];
        var rotateAndCollapse = arguments.length <= 2 || arguments[2] === undefined ? tools.rotateAndCollapse : arguments[2];

        return function () {
            var matrix = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

            var collapsed = direction.match(/right|left/) ? matrix.map(setCollapseFunction(direction)) : rotateAndCollapse(matrix, setCollapseFunction(direction));
            return matrix.toString() !== collapsed.toString() ? collapsed : false;
        };
    }

};

module.exports = tools;