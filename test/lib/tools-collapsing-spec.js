import tools from '../../src/tools';
import chai from 'chai';
var { expect } = chai;
var { addItems, zeroDiff, zeroRemove, addNeighbors } = tools;

describe('Tools : collapsing', () => {

    describe('addItems(current, next)', () => {
        it('doubles like numbers', () => expect(addItems(2, 2)).to.equal(4));
        it('does not double unlike numbers', () => expect(addItems(2, 4)).to.equal(2));
    });

    describe('zeroDiff(oldArray, newArray', () => {
        it('Adds a 0 after numbers that are different', () => expect(zeroDiff([2, 2, 4, 4], [4, 2, 8, 4])).to.deep.equal([4, 0, 8, 0]));
    });

    describe('addNeighbors(row)', () => {
        it('adds like numbers', () => expect(addNeighbors([2, 2, 4, 4], zeroRemove, addItems, zeroDiff)).to.deep.equal([4, 8]));
        it('adds numbers at the beginning only', () => expect(addNeighbors([2, 2, 8, 0])).to.deep.equal([4, 8]));
        it('adds numbers to the end only', () => expect(addNeighbors([2, 8, 8, 2])).to.deep.equal([2, 16, 2]));
        it('adds numbers with 0s appropratly', () => expect(addNeighbors([0, 0, 2, 2])).to.deep.equal([4]));
        it('does not add numbers', () => expect(addNeighbors([2, 4, 8, 2])).to.deep.equal([2, 4, 8, 2]));
    });

});
