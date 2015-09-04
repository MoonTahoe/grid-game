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
            var rate = arguments[0] === undefined ? 0.5 : arguments[0];
            var multiple = arguments[1] === undefined ? 2 : arguments[1];

            return Math.random() >= rate ? multiple : multiple * 2;
        }
    }, {
        key: 'availableSeats',
        value: function availableSeats() {
            var matrix = arguments[0] === undefined ? [] : arguments[0];

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
            var matrix = arguments[0] === undefined ? [] : arguments[0];

            return this.availableSeats(matrix).length > 0;
        }
    }]);

    return Tools;
})();

module.exports = new Tools();