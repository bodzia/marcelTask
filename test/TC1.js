import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const assert = require('assert');
const expect = require('chai').expect;
import {putOnRack} from "../app/app.js";
const inputData = require('../testData/testData.json');

describe('Test tubes ', function () {
        it(' are successfully placed on correct rack', function () {
            let testData = inputData[0];
            let result = putOnRack(testData);
            let expectedResult = 'Test tube placed on rack 1'
            assert.equal(result, expectedResult);
        })
        it('return error when invalid parameter is supplied', function () {
            let result = putOnRack(123)
            let expectedResult = 'Ups...an error occured!';
            expect(result, expectedResult);
        })
        it('return error when invalid parameter is supplied', function () {
            let result = putOnRack(123)
            assert.equal(result, 'Ups...an error occured!');
        });
});

