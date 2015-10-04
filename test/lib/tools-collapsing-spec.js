import tools from '../../src/tools';
import chai from 'chai';
import sinon from 'sinon';
var { expect } = chai;
var { zeroRemove, zeroFill, addNeighbors, collapseRow, collapseRight, collapseLeft } = tools;

describe('Tools : collapsing', () => {

    describe('addNeighbors(row)', () => {
        it('adds like numbers', () => expect(addNeighbors([2, 2, 4, 4], zeroRemove, addItems, zeroDiff)).to.deep.equal([4, 8]));
        it('adds numbers at the beginning only', () => expect(addNeighbors([2, 2, 8, 0])).to.deep.equal([4, 8]));
        it('adds numbers to the end only', () => expect(addNeighbors([2, 8, 8, 2])).to.deep.equal([2, 16, 2]));
        it('adds numbers with 0s appropratly', () => expect(addNeighbors([0, 0, 2, 2])).to.deep.equal([4]));
        it('does not add numbers', () => expect(addNeighbors([2, 4, 8, 2])).to.deep.equal([2, 4, 8, 2]));
    });

    describe('collapseRow(row)', () => {
        it('collapses full row correctly', () => expect(collapseRow([2, 2, 128, 128, 64, 64])).to.deep.equal([4, 256, 128, 0, 0, 0]));
        it('collapses through 0s correctly', () => expect(collapseRow([0, 256, 256], zeroFill, addNeighbors)).to.deep.equal([512, 0, 0]));
        it('collapses entire rows correctly', () => expect(collapseRow([2, 2, 2, 2])).to.deep.equal([4, 4, 0, 0]));
        it('collapses through 0s correctly', () => expect(collapseRow([0, 2, 0, 2])).to.deep.equal([4, 0, 0, 0]));
        it('does not collapse full mismatched row', () => expect(collapseRow([4, 2, 8, 64, 128])).to.deep.equal([4, 2, 8, 64, 128]));
    });

    describe('collapseRight(collapseFunction)', () => {
        it('returns a function', () => expect(collapseRight()).to.be.a('function'));
    });

    describe('collapseLeft(collapseFunction)', function () {

        it('returns a function', () => expect(collapseLeft()).to.be.a('function'));

        it('should invoke collapse function', () => {
            let callback = sinon.spy();
            collapseLeft(callback)();
            expect(callback.called).to.equal(true);
        });

        it('should send the appropriate object', () => {
            let callback = sinon.spy();
            collapseLeft(callback)({row: 'row'});
            expect(callback.calledWith({row: 'row'}));
        });
    });

});
