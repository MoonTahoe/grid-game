import tools from '../../lib/tools';
import chai from 'chai';
var { expect } = chai;
var { createTile } = tools;

describe('Tools : createTile(ratio, multiple)', function () {

    var results = [];

    it('Creates either a 2 or 4 by default', () => expect(tools.createTile()).to.match(/2|4/));
    it('Creates a 3 or 6 for multiples of 3', () => expect(tools.createTile(0.5, 3)).to.match(/3|6/));

    describe('2 to 4 50% Ratio', function () {

        beforeEach(function () {
            for (let i = 1; i <= 100; i++) {
                results.push(tools.createTile());
            }
        });

        afterEach(function () {
            results = [];
        });

        it('A ratio of 50% creates some 2s', () => expect(results.some(n => n === 2)).to.equal(true));
        it('A ratio of 50% creates some 4s', () => expect(results.some(n => n === 4)).to.equal(true));

    });

    describe('0% Ratio', function () {

        beforeEach(function () {
            for (let i = 1; i <= 100; i++) {
                results.push(createTile(0));
            }
        });

        it('A ratio of 0% always generates 2s.', () => expect(results.every(n => n === 2)).to.equal(true));

    });

    describe('100% Ratio', function () {

        beforeEach(function () {
            results = [];
            for (let i = 1; i <= 100; i++) {
                results.push(createTile(1));
            }
        });

        it('A ratio of 0% always generates 2s.', () => expect(results.every(n => n === 4)).to.equal(true));

    });


});


