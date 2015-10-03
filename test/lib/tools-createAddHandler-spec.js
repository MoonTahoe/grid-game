import tools from '../../src/tools';
import chai from 'chai';
var { expect } = chai;
var { createAddHandler } = tools;

describe('Tools : createAddHandler()', () => {

    it('returns a function', () => {
        var handler = createAddHandler();
        expect(typeof handler).to.equal('function');
    });

    it('generates add action handler', () => {
        var add = createAddHandler(),
            results = add([
                [0, 0],
                [0, 0]
            ]);

        expect(results).not.to.deep.equal([
            [0, 0],
            [0, 0]
        ]);

    });

    it('generates add action handler returns false for full grid', () => {
        var add = createAddHandler(),
            results = add([
                [2, 4],
                [4, 2]
            ]);
        expect(results).to.equal(false);
    });

});