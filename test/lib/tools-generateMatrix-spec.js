import tools from '../../src/tools';
import chai from 'chai';
var { expect } = chai;
var { createMatrix } = tools;

describe('Tools : generateMatrix()', function () {

    it('generates a 3x3 game board', () => {
        expect(createMatrix(3, 3)).to.deep.equal([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]);
    });

    it('generates a 4x4 game board', () => {
        expect(createMatrix(4, 4)).to.deep.equal([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
    });

    it('generates a 5x8 game board', () => {
        expect(createMatrix(5, 8)).to.deep.equal([
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ]);
    });

});