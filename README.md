# mundane-utils
Utility functions for common tasks in JavaScript that you hate to have to write out all the time plus some that may come in handy

## Installation
```
npm i mundane-utils
```
## Uses
```javascript
const utils = require('mundane-utils');
```

### getRanNum(min, max)
Returns random integer between `min` and `max`
```javascript
utils.getRanNum(1,10);
```

### makeid(length)
Returns a string of `length` length of random letters and numbers.
```javascript
utils.makeid(5);
```

### objIsEmpty(obj)
Checks if JavaScript object is empty. This includes `null` and `undefined` objects
```javascript
const obj1 = {};
const obj2 = {foo: 'bar'};

// Returns true
utils.objIsEmpty(obj1);

// Returns false
utils.objIsEmpty(obj2);
```

### printTime(timeInSeconds)
Pretty prints time in seconds in HH:MM:SS format. If time is less than an hour then hours are not included
```javascript
const time1 = 63;
const time2 = 7248;

// Returns 01:03
utils.printTime(time1);

// Returns 2:00:48
utils.printTime(time2);
```

### removeArrayItem(array, item)
Removes specified `item` from `array` and returns the new array.
```javascript
let ar = ['a','b','c'];

// Returns ['b', 'c']
ar = utils.removeArrayItem('a', ar);

// Returns ['b', 'c']
ar = utils.removeArrayItem('d', ar);
```

### stringIsEmpty(string)
Checks if string is empty. This includes `null` and `undefined` strings
```javascript
const str1 = '';
const str2 = undefined;
const str3 = 'hello world';

// Returns true
utils.stringIsEmpty(str1);

// Returns true
utils.stringIsEmpty(str2);

// Returns false
utils.stringIsEmpty(str1);
```
