class Tools {

    constructor() {
        this.createTile = this.createTile.bind(this);
        this.availableSeats = this.availableSeats.bind(this);
        this.hasAvailableSeats = this.hasAvailableSeats.bind(this);
    }

    createTile(rate = 0.5, multiple = 2) {
        return (Math.random() >= rate) ? multiple : multiple * 2;
    }

    availableSeats (matrix = []) {
        var emptySeats = [];
        matrix.forEach((row, i) => row.forEach((cell, j) => (cell === 0) ? emptySeats.push(i + ':' + j) : null));
        return emptySeats;
    }

    hasAvailableSeats (matrix = []) {
        return this.availableSeats(matrix).length > 0;
    }

}

module.exports = new Tools();