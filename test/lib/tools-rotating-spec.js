import tools from '../../src/tools';
import chai from 'chai';

var { rotate, rotateReturn, pluck } = tools;
var { expect } = chai;

describe('rotating', () => {

    describe('pluck(item)', () => {

        it('plucks items from arrays', () => {
            let results = pluck(0, [
                [1,16,32,0],
                [2,0,0,3],
                [3,32,64,0],
                [4,32,8,128]
            ]);
            expect(results).to.deep.equal([1,2,3,4]);
        });

    });

    describe('rotateReturn(matrix)', () => {
        it('returns a matrix', () => {
            let results = rotateReturn([
                [13,9,5,1],
                [14,10,6,2],
                [15,11,7,3],
                [16,12,8,4]
            ]);
            expect(results).to.deep.equal([
                [1,2,3,4],
                [5,6,7,8],
                [9,10,11,12],
                [13,14,15,16]
            ]);
        });
    });

    describe('rotate(matrix)', () => {
        it('rotates a matrix', () => {
            let results = rotate([
                [1,2,3,4],
                [5,6,7,8],
                [9,10,11,12],
                [13,14,15,16]
            ]);
            expect(results).to.deep.equal([
                [13,9,5,1],
                [14,10,6,2],
                [15,11,7,3],
                [16,12,8,4]
            ]);
        });
    });

});