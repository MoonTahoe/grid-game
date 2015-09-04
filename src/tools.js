class Tools {

    constructor() {
        this.createTile = this.createTile.bind(this);
        this.availableSeats = this.availableSeats.bind(this);
        this.hasAvailableSeats = this.hasAvailableSeats.bind(this);
    }

    createTile(rate = 0.5, multiple = 2) {
        return (Math.random() >= rate) ? multiple : multiple * 2;
    }

    createMatrix(rows, cols) {
        return Array.apply(null, Array(rows)).map(x => Array.apply(null, Array(cols)).map(y => 0));
    }

    availableSeats(matrix = []) {
        var emptySeats = [];
        matrix.forEach((row, i) => row.forEach((cell, j) => (cell === 0) ? emptySeats.push(i + ':' + j) : null));
        return emptySeats;
    }

    hasAvailableSeats(matrix = []) {
        return this.availableSeats(matrix).length > 0;
    }

    reverse(arr) {
        return arr.map(x => x).reverse();
    }

    zeroFill(arr, end) {
        return Array.apply(null, Array(end)).map((x, i) => (arr[i]) ? arr[i] : 0);
    }

    zeroRemove(row) {
        return row.filter(cell => cell);
    }

}

module.exports = new Tools();