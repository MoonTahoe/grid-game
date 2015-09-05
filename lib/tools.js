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

    availableSeats: function availableSeats() {
        var matrix = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        var emptySeats = [];
        matrix.forEach(function (row, i) {
            return row.forEach(function (cell, j) {
                return cell === 0 ? emptySeats.push(i + ':' + j) : null;
            });
        });
        return emptySeats;
    },

    hasAvailableSeats: function hasAvailableSeats() {
        var matrix = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        return tools.availableSeats(matrix).length > 0;
    },

    reverse: function reverse(arr) {
        return arr.map(function (x) {
            return x;
        }).reverse();
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

    rotate: function rotate(matrix) {
        return matrix.map(function (row, i, arr) {
            return tools.reverse(tools.pluck(i, arr));
        });
    },

    rotateReturn: function rotateReturn(matrix) {
        return tools.reverse(matrix.map(function (row, i, arr) {
            return tools.pluck(i, arr);
        }));
    }

};

module.exports = tools;