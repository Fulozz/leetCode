/**
 * file: "02 - 30 Days of JavaScript/filterArray"
 * description: Create an Counter that can increment, decrement and reset the values passed by the user
 * data: 18/03/2024
 * author: Thiago Silva Andrade
 */


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const fn = function greaterThan10(n) { return n > 10; }
const arr = [0,10,20,30]

var filter = function(arr, fn) {
    // Empty Array
    let filteredArr = []
    for(let i = 0; i < arr.length; i++){
        // Validated the function, if its true return the filteredArr
        if(fn(arr[i], i )) filteredArr.push(arr[i])
    }
    return filteredArr
};
