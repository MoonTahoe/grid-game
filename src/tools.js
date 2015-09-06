var tools = {

    createTile(rate = 0.5, multiple = 2) {
        return (Math.random() >= rate) ? multiple : multiple * 2;
    },

    createMatrix(rows = 4, cols = 4) {
        return Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)).map(y => 0));
    },

    zeroFill(arr, end) {
        return Array.apply(null, Array(end)).map((x, i) => (arr[i]) ? arr[i] : 0);
    },

    zeroRemove(row) {
        return row.filter(cell => cell);
    },

    pluck(i, matrix) {
        return matrix.map(x => x[i]);
    },

    flatten(arr = []) {
        return (arr.length) ? arr.reduce((p, n) => p.concat(n)) : arr;
    },

    availableSeats(matrix = [], zeroRemove = tools.zeroRemove, flatten = tools.flatten) {
        return zeroRemove(flatten(matrix.map((row, i) => row.map((cell, j) => (cell === 0) ? i + ':' + j : 0))));
    },

    hasAvailableSeats(matrix = [], availableSeats = tools.availableSeats) {
        return availableSeats(matrix).length > 0;
    },

    reverse(arr) {
        return arr.map(x => x).reverse();
    },

    rotate(matrix, pluck = tools.pluck) {
        return matrix.map((row, i, arr) => tools.reverse(pluck(i, arr)));
    },

    rotateReturn (matrix, reverse = tools.reverse, pluck = tools.pluck) {
        return reverse(matrix.map((row, i, arr) => pluck(i, arr)));
    },

    addItems(current, next) {
        return (current === next) ? current * 2 : current;
    },

    zeroDiff(oldArray, newArray) {
        return newArray.map((item, i, arr) => (oldArray[i - 1] === newArray[i - 1]) ? item : 0);
    },

    addNeighbors(row, zeroRemove = tools.zeroRemove, addItems = tools.addItems, zeroDiff = tools.zeroDiff) {
        return zeroRemove(zeroDiff(row, zeroRemove(row).map((cell, i, arr) => addItems(cell, arr[i + 1]))));
    }

};

module.exports = tools;