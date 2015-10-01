'use strict';

var tools = {

    createTile: function createTile() {
        var rate = arguments.length <= 0 || arguments[0] === undefined ? 0.5 : arguments[0];
        var multiple = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

        return Math.random() >= rate ? multiple : multiple * 2;
    },

    createMatrix: function createMatrix() {
        var rows = arguments.length <= 0 || arguments[0] === undefined ? 4 : arguments[0];
        var cols = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];

        return Array.apply(null, Array(rows)).map(function (x) {
            return Array.apply(null, Array(cols)).map(function (y) {
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

    pluck: function pluck(i, matrix) {
        return matrix.map(function (x) {
            return x[i];
        });
    },

    flatten: function flatten() {
        var arr = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        return arr.length ? arr.reduce(function (p, n) {
            return p.concat(n);
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

    reverse: function reverse(arr) {
        return arr.map(function (x) {
            return x;
        }).reverse();
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

    addNeighbors: function addNeighbors(row) {
        var zeroRemove = arguments.length <= 1 || arguments[1] === undefined ? tools.zeroRemove : arguments[1];
        var addItems = arguments.length <= 2 || arguments[2] === undefined ? tools.addItems : arguments[2];
        var zeroDiff = arguments.length <= 3 || arguments[3] === undefined ? tools.zeroDiff : arguments[3];

        return zeroRemove(zeroDiff(row, zeroRemove(row).map(function (cell, i, arr) {
            return addItems(cell, arr[i + 1]);
        })));
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
    }

};

module.exports = tools;