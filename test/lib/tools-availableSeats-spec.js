import tools from '../../src/tools';
import chai from 'chai';
var { expect } = chai;
var { availableSeats, hasAvailableSeats } = tools;

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

    it('Returns an empty array when a matrix is not supplied', function () {
        expect(availableSeats()).to.deep.equal([]);
    });

    describe('hasAvailableSeats(matrix)', function () {

        it('returns false when a matrix is not sent', () => {
            expect(hasAvailableSeats()).to.equal(false);
        });

        it('returns true when there are seats available', () => {
            let results = hasAvailableSeats([
                [2, 4, 8, 16],
                [2, 4, 8, 16],
                [2, 4, 0, 16],
                [2, 4, 8, 16]
            ]);
            expect(results).to.equal(true);
        });

        it('returns false when there are not seats available', () => {
            let results = hasAvailableSeats([
                [2, 4, 8, 16],
                [2, 4, 8, 16],
                [2, 4, 8, 16],
                [2, 4, 8, 16]
            ]);
            expect(results).to.equal(false);
        });

    });

});
