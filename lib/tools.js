'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Tools = (function () {
    function Tools() {
        _classCallCheck(this, Tools);

        this.createTile = this.createTile.bind(this);
        this.availableSeats = this.availableSeats.bind(this);
        this.hasAvailableSeats = this.hasAvailableSeats.bind(this);
    }

    _createClass(Tools, [{
        key: 'createTile',
        value: function createTile() {
            var rate = arguments.length <= 0 || arguments[0] === undefined ? 0.5 : arguments[0];
            var multiple = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

            return Math.random() >= rate ? multiple : multiple * 2;
        }
    }, {
        key: 'availableSeats',
        value: function availableSeats() {
            var matrix = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

            var emptySeats = [];
            matrix.forEach(function (row, i) {
                return row.forEach(function (cell, j) {
                    return cell === 0 ? emptySeats.push(i + ':' + j) : null;
                });
            });
            return emptySeats;
        }
    }, {
        key: 'hasAvailableSeats',
        value: function hasAvailableSeats() {
            var matrix = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

            return this.availableSeats(matrix).length > 0;
        }
    }, {
        key: 'reverse',
        value: function reverse(arr) {
            return arr.map(function (x) {
                return x;
            }).reverse();
        }
    }, {
        key: 'zeroFill',
        value: function zeroFill(arr, end) {
            return Array.apply(null, Array(end)).map(function (x, i) {
                return arr[i] ? arr[i] : 0;
            });
        }
    }, {
        key: 'zeroRemove',
        value: function zeroRemove(row) {
            return row.filter(function (cell) {
                return cell;
            });
        }
    }]);

    return Tools;
})();

module.exports = new Tools();