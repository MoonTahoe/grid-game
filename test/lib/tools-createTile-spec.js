import tools from '../../lib/tools';
import chai from 'chai';
var { expect } = chai;
var { availableSeats } = tools;

describe('Tools : availableSeats(matrix)', function () {

    it('Locates correct seats for empty matrix', () => {
        let results = availableSeats([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
        expect(results).to.deep.equal(['0:0', '0:1', '0:2', '0:3', '1:0', '1:1', '1:2', '1:3', '2:0', '2:1', '2:2', '2:3', '3:0', '3:1', '3:2', '3:3']);
    });

    it('Locates correct seats for partially full matrix', () => {
        let results = availableSeats([
            [2, 2, 0, 0],
            [2, 0, 4, 0],
            [8, 4, 0, 8],
            [0, 8, 0, 4]
        ]);
        expect(results).to.deep.equal(['0:2', '0:3', '1:1', '1:3', '2:2', '3:0', '3:2']);
    });

    it('Returns an empty array when there are no available seats', () => {
        let results = availableSeats([
            [2, 2, 2, 2],
            [2, 4, 4, 2],
            [8, 4, 8, 8],
            [4, 8, 4, 4]
        ]);
        expect(results).to.deep.equal([]);
    });

});
