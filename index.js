'use strict';

// YOU KNOW WHAT TO DO //


/**
 * identity: Takes a value and returns it unchanged.
 * 
 * @param {Any Datatype} value: Can be any datatype/value.
 * 
 * @return {Any Datatype}: Will be the same value as our input value.
 */
 
function identity(value){
    return value;
}

module.exports.identity = identity;


/**
 * typeOf: Takes a value and checks it's datattype and returns it as a string value.
 * 
 * @param {Any Datatype} value: Can be any datatype/value.
 * 
 * @return {String}: Will be a string containing the datatype of the value passed.
 */
 
function typeOf(value){
    var type = typeof(value);

    if(Array.isArray(value)){
        return "array";
    
    }else if(type === "string"){
        return "string";

    }else if(type === "number"){
        return "number";
    
    }else if(type === "boolean"){
        return "boolean";
        
    }else if(value instanceof Date){
        return "date";
    
    }else if(type === "function"){
        return "function";
 
    }else if(type === "undefined"){
        return "undefined";
    
    }else if(value === null){
        return "null";

    }else{
        return "object";
    
    }
}

module.exports.typeOf = typeOf;


/**
 * first: Takes an <array> and a <number> and returns the <number> of elements from the front of <array>.
 * 
 * @param: {Array} array: An array filled with element.
 * 
 * @param: {Number} number: Any number value.
 * 
 * @return: {Any Datatype}: Ultimatley returns the first <number> of elements from the <array>.
 * 
 * @return: {Array}: Checks to see if the <array> is even an array or the <number> is negative, and if so, returns an empty array.
 * 
 * @return: {Any Datatype}: Checks to see if the <number> is given or NaN, and if so, returns the first element in the <array>.
 * 
 * @return: {Array}: Checks to see if the <number> is greter than the <array>.length, and if so, returns the <array>.
 */
 
function first(array, number){
    if(!Array.isArray(array) || number < 0){
        return [];
    }else if(number === undefined || isNaN(number)){
        return array[0];
    }else if(number > array.length){
        return array;
    }
    return array.slice(0, number);
}

module.exports.first = first;


/**
 * last: Takes an <array> and a <number> and returns the <number> of elements from the end of <array>.
 * 
 * @param: {Array} array: An array filled with element.
 * 
 * @param: {Number} number: Any number value.
 * 
 * @return: {Any Datatype}: Ultimatley returns the last <number> of elements from the <array>.
 * 
 * @return: {Array}: Checks to see if the <array> is even an array or the <number> is negative, and if so, returns an empty array.
 * 
 * @return: {Any Datatype}: Checks to see if the <number> is given or NaN, and if so, returns the last element in the <array>.
 * 
 * @return: {Array}: Checks to see if the <number> is greter than the <array>.length, and if so, returns the <array>.
 */


function last(array, number){
    if(!Array.isArray(array) || number < 0){
        return [];
    }else if(number === undefined || isNaN(number)){
        return array[array.length - 1];
    }else if(number > array.length){
        return array;
    }
    return array.slice(-number);
}


module.exports.last = last;


/**
 * indexOf: Checks to see if a given value is inside a given array and returns it's location.
 * 
 * @param: {Array} array: An array of values that can be any datatype.
 * 
 * @param: {Any Datatype} value: Can be any datatype.
 * 
 * @return: {Number}: Returns the index of the first occurence of the given value inside the given array********
 * 
 * @return: {Number}: Returns -1 if the value is not in the array.*********
 */


function indexOf(array, value){
    const callBack = (element) => element === value;
    return array.findIndex(callBack);
}


module.exports.indexOf = indexOf;


/**
 * contains: Checks to see if a given value is inside a given array.
 * 
 * @param: {Array} array: A list of elements that can be any datatype.
 * 
 * @param: {Any Datatype} value: Can be any datatype.
 * 
 * @return: {Boolean}: Uses a ternary operator to determine whether or not the value is in the array, if so it returns true, and if not it returns false.
 */
 
 
function contains(array, value){
    return array.includes(value) ? true : false;
}
 
 
 module.exports.contains = contains;
 

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * func Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, func) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: Designed to take an array and return a new array without any duplicate elements.
 * 
 * @param: {Array} array: a list of elements that can be any datatype.
 * 
 * @return: {Array}: an array containing the contents of the given array minus the duplicate elements.
 */
 
function unique(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
       if(indexOf(array, array[i]) === i){
           newArray.push(array[i]);
       }
    }
    return newArray;
}

module.exports.unique = unique;


/**
 * filter: Designed to execute a function on every value in a collection.*****
 * 
 * @param: {collection} array or object: list of values to be iterated over.*****
 * 
 * @param: {Function} func: code that will test all values in collection and return a boolean.*****
 * 
 * @return: {Array}: an array containing the elements that returned true after being run through the function.
 */
 
function filter(collection, func){
    let newArray = [];
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(func(collection[i], i, collection) === true){
                newArray.push(collection[i]);
            }
        }
    }else{
        for(var key in collection){
            if(func(collection[key], key, collection) === true){
                newArray.push(collection[key]);
            }
        }
    }
    return newArray;
}

module.exports.filter = filter;

/**
 * reject: designed to execute a function over each value in a collection.*****
 * 
 * @param: {collection} array or object: a list of values to be iterated over.*****
 * 
 * @param: {Function} func: a block of code that will test each value of a collection.****
 * 
 * @return: {Array}: an array containing the elements that returned false after being run through the function.
 */
 
function reject(collection, func){
    let newArray = [];
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(!filter(collection, func) === func(collection[i], i, collection)){
                func(collection[i], i, collection);
                newArray.push(collection[i]);
            }
        }    
    }else{
        for(var key in collection){
            if(func(collection[key], key, collection) === true){
                newArray.push(collection[key]);
            }
        }
    }
    return newArray;
}

module.exports.reject = reject;

/**
 * partition: Designed to run each element in an array through a function and return two arrays.
 * 
 * @param: {Array} array: an ordered list of elements.
 * 
 * @param: {Function} func: a block of code to be run over each element in an array.
 * 
 * @return {Array}: an array containing two arrays, one with all the values that returned true after being run through the function, and one array with all the falsey values.*******
 */
 
function partition(array, func){
    let truthy = [];
    let falsey = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array) === true){
            truthy.push(array[i]);
        }else{
            falsey.push(array[i]);
        }
    }
    return [truthy, falsey];
}

module.exports.partition = partition;

/**
 * map: Designed to run each element in an array or object through a function and return an array with the values of each outcome.
 * 
 * @param {Array or Object} collecction: could be an array or an object that is then looped over.
 * 
 * @param {Function} action: a function meant to do something to each value of the collection.
 * 
 * @return: {Array}: returns an array containing all outcomes of the function being passed over each value.
 */ 
 
function map(collection, action){
    let newArray = [];
    each(collection, function(element, index, collection){
        newArray.push(action(element, index, collection));
    });
    return newArray;
}
 
 module.exports.map = map;
 
 /**
  * pluck: Designed to reach the values of a specified property that occurs in multiple objects inside the given array, and stores these values in a new array.*******
  * 
  * @param: {Array} arr: an array full of objects.
  * 
  * @param: {String} string: a key name that belongs to the objects in an array.*****
  *  
  * @return: {Array}: an array containing the values that are paired to every occurnece of the <property> argument inside the array.
  */
  
function pluck(arr, property){
    let newArray = map(arr, function(element, index, array){
        return element[property];   
    }); 
    return newArray;
}
  
  module.exports.pluck = pluck;
  
/**
 * every: Designed to check if every value in a collection is true.
 * 
 * @param: {Array or Object} collection: an array or an object to be iterated over.
 * 
 * @param: {Function} func: a test to provide a boolean value.
 * 
 * @return {Boolean}: if every value run through the function returns true, then return true.
 * 
 * @return {Boolean}: if even one returns false, then return false.
 * 
 * @return {Boolean}: if a test function is not provided, every will return true.*******
 */
 
function every(collection, func){
    let result = true;
    if(func){
        each(collection, function(element, index, collection){
            if(func(element, index, collection) !== true){
            result = false;
            }
        });
    }else{
        each(collection, function(element, index, collection){
            if(!element){
            result = false;
            }
        });
    }
    return result;
}
 
 module.exports.every = every;
 
 
/**
 * some: Designed to check if any value in a collection is true.
 * 
 * @param: {Array or Object} collection: an array or an object to be iterated over.
 * 
 * @param: {Function} func: a test to provide a boolean value.
 * 
 * @return {Boolean}: if every value run through the function returns false, then return false.
 * 
 * @return {Boolean}: if even one returns true, then return true.
 * 
 * @return {Boolean}: if a test function is not provided, every will return true.*******
 */
  
function some(collection, func){
    let result = false;
    if(func){
        each(collection, function(element, index, collection){
            if(func(element, index, collection) === true){
            result = true;
            }
        });
    }else{
        each(collection, function(element, index, collection){
            if(element){
            result = true;
            }
        });
    }
    return result;
}

module.exports.some = some;

/**
 * reduce: Designed to reduce the elements in an array down to one value using a function.
 * 
 * @param: {Array} array: ordered list of elements.
 * 
 * @param: {Function} func: function meant to reduce the elements in the array to aa single value.
 * 
 * @param: {Any Datatype} seed: the first value to pass through the function.
 * 
 * @return: {Any Datatype}: the final output after all elements have been ran.
 */
 
 function reduce(array, func, seed){
    let result;
    if(seed === undefined){
        result = array[0];
        let restOfArray = array.slice(1);
        each(restOfArray, function(element, index){
            result = func(result, element, index + 1);
        });
    }else{
        result = seed;
        each(array, function(element, index){
            result = func(result, element, index);
        });
    }
    return result;
}

module.exports.reduce = reduce;

/**
 * extend: Designed to add all key/value pairs from any object passed through, to the specified object given.
 * 
 * @param: {Object} obj1: an object that is to be added to.
 * 
 * @return: {Object}: the updated version of the original object passed through.
 */
 
function extend(obj1){
    let args = Array.from(arguments);
    each(args, function(element, index, array){
        Object.assign(obj1, element);
    });
    return obj1;
}

module.exports.extend = extend;