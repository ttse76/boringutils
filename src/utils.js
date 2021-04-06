// Checks if passed in object is empty
exports.objIsEmpty = (jsObj) => {
    if(Object.keys(jsObj).length === 0 || jsObj === null || jsObj === undefined){
        return true;
    }
    return false;
};

// Checks if passed in string is empty
exports.stringIsEmpty = (str) => {
    if(str === undefined || str === null || str.trim() === ''){
        return true;
    }
    return false;
};

// returns a unique id string of length
exports.makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 // returns a random integer between min and max
 exports.getRanNum = (min, max) => {
     return Math.floor(Math.random() * (max-min) + min) ;
 };

 //removes specified item and returns updated array
 exports.removeArrayItem = (item, array) => {
     const index = array.indexOf(item);
     if(index >= -1){
         array.splice(index, 1);
     }
     return array;
 };

 // pretty prints time from seconds
 exports.printTime = (timeInSeconds) => {
     //(n < 10) ? ("0" + n) : n
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = (Math.floor(timeInSeconds / 60) < 10) ? '0' + (Math.floor(timeInSeconds / 60)) : (Math.floor(timeInSeconds / 60));
    const seconds = (Math.round(timeInSeconds - minutes * 60) < 10) ? '0' + Math.round(timeInSeconds - minutes * 60): Math.round(timeInSeconds - minutes * 60);
    let time = '';
    let flag = false;

    if(hours !== 0){
        time += hours;
        flag = true;
    }
    if(flag){
        time += ':';
    }
    time += minutes + ':' + seconds;
    return time;
 };