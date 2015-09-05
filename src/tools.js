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

    availableSeats(matrix = []) {
        return tools.zeroRemove(tools.flatten(matrix.map((row, i) => row.map((cell, j) => (cell === 0) ? i + ':' + j : 0))));
    },

    hasAvailableSeats(matrix = []) {
        return tools.availableSeats(matrix).length > 0;
    },

    reverse(arr) {
        return arr.map(x => x).reverse();
    },

    rotate(matrix) {
        return matrix.map((row, i, arr) => tools.reverse(tools.pluck(i, arr)));
    },

    rotateReturn (matrix) {
        return tools.reverse(matrix.map((row, i, arr) => tools.pluck(i, arr)));
    }

};

module.exports = tools;