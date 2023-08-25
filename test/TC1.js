import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const assert = require('assert');
const expect = require('chai').expect;
import {putOnRack} from "../app/app.js";
const inputDataTC1 = require('../testData/testDataTC1.json');

describe('Test tubes ', function () {
        it(' are successfully placed on correct rack', function () {
            let testData = inputDataTC1[0];
            let result = putOnRack(testData);
            let expectedResult = 'Test tube placed on rack 1'
            assert.equal(result, expectedResult);
        })
        it('return error when invalid parameter is supplied', function () {
            let testData = inputDataTC1[1];
            let result = putOnRack(testData);
            let expectedResult = 'Ups...an error occured!';
            expect(result, expectedResult);
        })
        it('return error when no rack ae unavailable', function () {
            let testData = inputDataTC1[2]
            let result = putOnRack(testData);
            assert.equal(result, 'Ups...an error occured!');
        });
});

