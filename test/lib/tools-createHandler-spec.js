import tools from '../../src/tools';
import chai from 'chai';
var { expect } = chai;
var { createHandler } = tools;

describe('Tools : createHandler()', function() {

    it('returns a function', function() {
        var handler = createHandler('left', function() {});
        expect(typeof handler).to.equal('function');
    });

    it('generates up action handlers', function() {
        var up = createHandler('up'),
            results = up([
                [2,2,2,2],
                [2,2,2,2],
                [2,2,2,2],
                [2,2,2,2]
            ]);

        expect(results).to.deep.equal([
            [4,4,4,4],
            [4,4,4,4],
            [0,0,0,0],
            [0,0,0,0]
        ]);

    });

    it('generates down action handlers', function() {
        var up = createHandler('down'),
            results = up([
                [2,2,2,2],
                [2,2,2,2],
                [2,2,2,2],
                [2,2,2,2]
            ]);

        expect(results).to.deep.equal([
            [0,0,0,0],
            [0,0,0,0],
            [4,4,4,4],
            [4,4,4,4]
        ]);

    });

    it('generates left action handlers', function() {
        var left = createHandler('left'),
            results = left([
                [2,2,2,2],
                [2,2,2,2],
                [2,2,2,2],
                [2,2,2,2]
            ]);

        expect(results).to.deep.equal([
            [4,4,0,0],
            [4,4,0,0],
            [4,4,0,0],
            [4,4,0,0]
        ]);

    });

    it('generates right action handlers', function() {
        var right = createHandler('right'),
            results = right([
                [2,2,2,2],
                [2,2,2,2],
                [2,2,2,2],
                [2,2,2,2]
            ]);

        expect(results).to.deep.equal([
            [0,0,4,4],
            [0,0,4,4],
            [0,0,4,4],
            [0,0,4,4]
        ]);

    });

});