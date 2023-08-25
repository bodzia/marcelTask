import {createRequire} from 'node:module';
import {faker} from '@faker-js/faker';
const require = createRequire(import.meta.url);
const inputData = require('../testData/testDataTC2.json');
const rackList = [{"ages": [1,2,3], "companies": ['a', 'b','c']}];

export function getTestData(i){
    let testItem = inputData[i];
    return testItem;
}

export function getRack(i){
    let rack = rackList[i];
    return rack;
}
export function checkAge(testObj){
    let correct = false;
    let testAge = testObj.age;
    let rackAges = getRack(0).ages;
    if (!(testAge in rackAges)){
        correct = true;
    }
    return correct;
}

export function checkCompany(testObj){
    let correct = false;
    let testCompany = testObj.company;
    let rackCompanies = getRack(0).companies;
    if (!(testCompany in rackCompanies)){
        correct = true;
    }
    return correct;
}

export function checkAllRequirements(testObj){
    let req1 = checkAge(testObj);
    let req2 = checkCompany(testObj);
    if (req1 === true && req2 === true){
        return true;
    }
    else {
        return false;
    }
}

export function checkError(){
    return 'Ups...an error occured!';
}
