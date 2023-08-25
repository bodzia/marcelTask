import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const assert = require('assert');
const expect = require('chai').expect;
import {checkAllRequirements, getTestData, checkError} from "../common/functions.js";

describe('Age condition ', function () {
        it(' is met', function () {
            let testObj = getTestData(2);
            let result = checkAllRequirements(testObj);
            assert.equal(result, true);
        })
        it('is not met', function () {
            let testObj = getTestData(0);
            let result = checkAllRequirements(testObj);
            expect(result, false);
        })
        it('returns error', function () {
            let result = checkError();
            assert.equal(result, 'Ups...an error occured!');
        });
});

