var tools = {

    createTile(rate = 0.5, multiple = 2) {
        return (Math.random() >= rate) ? multiple : multiple * 2;
    },

    createMatrix(gridSize = [4, 4]) {
        return Array.apply(null, Array(gridSize[0])).map(x => Array.apply(null, Array(gridSize[1])).map(y => 0));
    },

    zeroFill(arr, end) {
        return Array.apply(null, Array(end)).map((x, i) => (arr[i]) ? arr[i] : 0);
    },

    zeroRemove(row) {
        return row.filter(cell => cell);
    },

    getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    copy(arr) {
        return arr.map(x=>x);
    },

    pluck(i, matrix) {
        return matrix.map(x => x[i]);
    },

    reverse(arr) {
        return arr.map(x => x).reverse();
    },

    flatten(arr = []) {
        return (arr.length) ? arr.reduce((p, n, i) => [...p, ...n]) : arr;
    },

    availableSeats(matrix = [], zeroRemove = tools.zeroRemove, flatten = tools.flatten) {
        return zeroRemove(flatten(matrix.map((row, i) => row.map((cell, j) => (cell === 0) ? i + ':' + j : 0))));
    },

    hasAvailableSeats(matrix = [], availableSeats = tools.availableSeats) {
        return availableSeats(matrix).length > 0;
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

    collapseRow(row, zeroFill = tools.zeroFill, addNeighbors = tools.addNeighbors) {
        return zeroFill(addNeighbors(row), row.length);
    },

    collapseLeft(collapse = tools.collapseRow) {
        return (row) => collapse(row);
    },

    collapseRight(collapse = tools.collapseRow, reverse = tools.reverse) {
        return (row) => reverse(collapse(reverse(row)));
    },

    setCollapseFunction(direction = 'left', collapseRight = tools.collapseRight, collapseLeft = tools.collapseLeft, collapseRow = tools.collapseRow) {
        return (direction.match(/right|up/)) ? collapseRight(collapseRow) : collapseLeft(collapseRow);
    },

    rotateAndCollapse(matrix, collapseFunction, rotateReturn = tools.rotateReturn, rotate = tools.rotate) {
        return rotateReturn(rotate(matrix).map(collapseFunction));
    },

    addNeighbors(row, zeroRemove = tools.zeroRemove) {
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

    createAddHandler(rate = 0.5, multiple = 2, availableSeats = tools.availableSeats, copy = tools.copy, getRandom = tools.getRandom, createTile = tools.createTile) {
        return function (matrix) {
            var seat, seats = availableSeats(matrix), newMatrix = copy(matrix);
            if (seats.length) {
                seat = getRandom(seats).split(':');
                newMatrix[seat[0]][seat[1]] = createTile(rate, multiple);
                return newMatrix;
            } else {
                return false;
            }
        };
    },

    createHandler(direction = 'left', setCollapseFunction = tools.setCollapseFunction, rotateAndCollapse = tools.rotateAndCollapse) {
        return (matrix = []) => {
            let collapsed = (direction.match(/right|left/)) ? matrix.map(setCollapseFunction(direction)) : rotateAndCollapse(matrix, setCollapseFunction(direction));
            return (matrix.toString() !== collapsed.toString()) ? collapsed : false;
        };
    }

};

module.exports = tools;