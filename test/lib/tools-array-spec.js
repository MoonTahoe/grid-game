import tools from '../../src/tools';
import chai from 'chai';
var { reverse, zeroFill, zeroRemove } = tools;
var { expect } = chai;

describe('Tools : array', function () {

    describe('reverse(array)', function () {
        it('Should reverse the order of an array', () => expect( reverse([1,2,3,4]) ).to.deep.equal([4,3,2,1]));
    });

    describe('zeroFill(array)', function () {
        it('adds 1 zero to the end of the array', () => expect(zeroFill([2, 3, 4], 4)).to.deep.equal([2, 3, 4, 0]));
        it('adds 4 zeros an empty array', () => expect(zeroFill([], 4)).to.deep.equal([0, 0, 0, 0]));
        it('adds 4 zeros the end of an array', () => expect(zeroFill([2, 3, 4], 7)).to.deep.equal([2, 3, 4, 0, 0, 0, 0]));
        it('does not add any zeros to the end of the array', () => expect(zeroFill([2, 3, 4, 5], 4)).to.deep.equal([2, 3, 4, 5]));
    });

    describe('zeroRemove(array)', function () {
        it('removes all 0s', () => expect(zeroRemove([0,0,0,0])).to.deep.equal([]));
        it('removes start 0s', () => expect(zeroRemove([0,0,2,4])).to.deep.equal([2,4]));
        it('removes end 0s', () => expect(zeroRemove([8,16,0,0])).to.deep.equal([8,16]));
        it('does not remove other numbers', () => expect(zeroRemove([2,4,2,4])).to.deep.equal([2,4,2,4]));
    });

});
