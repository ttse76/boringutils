const utils = require('../src/utils');
let index = 0;

const test = (output, expected, func) => {
    const res = (output === expected) ? 'PASSED' : 'FAILED';
    index++;
    return {
        name: 'Test ' + index,
        res: res,
        output: output,
        expected: expected,
        func: func
    }
}

const printResults = (tests) => {
    let passedTests = 0;
    tests.forEach(test => {
        console.log(test.name + ': ' + test.res);
        if(test.res === 'PASSED'){
            passedTests++;
        }else{
            console.log('\nfunction: ' + test.func);
            console.log('EXPECTED: ' + test.expected);
            console.log('OUTPUT: ' + test.output + '\n');
        }
    });
    console.log(passedTests + '/' + tests.length + ' tests passed');
}

const run = () => {
    let tests = [];

    // stringIsEmpty (1-3)
    tests.push(test(utils.stringIsEmpty(''), true, 'stringIsEmpty'));
    tests.push(test(utils.stringIsEmpty(null), true, 'stringIsEmpty'));
    tests.push(test(utils.stringIsEmpty('abc'), false, 'stringIsEmpty'));

    // makeid (4)
    const id = utils.makeid(5);
    tests.push(test(id.length, 5, 'makeid'));

    // getRanNum (5)
    let rans = [];
    let allNumsPass = true;
    for(let i = 0; i < 10; i++){
        const num = utils.getRanNum(1,5);
        if(num < 1 || num > 5){
            allNumsPass = false;
        }
    }
    tests.push(test(allNumsPass, true, 'getRanNum'));

    // removeArrayItem (6,7)
    let ar = ['a', 'b', 'c'];
    const expectedAr = ['a', 'c'];
    const expectedAr2 = ['a', 'b', 'c'];
    let newAr = utils.removeArrayItem('b', ar);
    let is_same = (newAr.length == expectedAr.length) && newAr.every(function(element, index) {
        return element === expectedAr[index]; 
    });
    tests.push(test(is_same, true, 'removeArrayItem'));
    
    newAr = [];

    newAr = utils.removeArrayItem('d', ar);
    is_same = (newAr.length == expectedAr2.length) && newAr.every(function(element, index) {
        return element === expectedAr2[index]; 
    });
    tests.push(test(is_same, true, 'removeArrayItem'));


    // printTime (8,9)
    const time1 = 63;
    tests.push(test(utils.printTime(time1), '01:03', 'printTime'));
    
    const time2 = 7356;
    tests.push(test(utils.printTime(time2), '02:02:36', 'printTime'));

    //stringUnNull (10,11)
    const nul1 = null;
    const nul2 = undefined;
    const nul3 = 'test';

    tests.push(test(utils.stringUnNull(nul1), '', 'stringUnNull'));
    tests.push(test(utils.stringUnNull(nul2), '', 'stringUnNull'));
    tests.push(test(utils.stringUnNull(nul3), 'test', 'stringUnNull'));

    printResults(tests) 
};
run();



