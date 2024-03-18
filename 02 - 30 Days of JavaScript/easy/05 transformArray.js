/**
 * file: "02 - 30 Days of JavaScript/transformArray"
 * description: Transform all the inputs in array
 * data: 18/03/2024
 * author: Thiago Silva Andrade
 */


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */


// fn can be any function an can be passed in the map to render the results in array
const fn = function plusone(n) { return n + 1; }
const arr = 10;
// Maping the datas and transform in array
var map = function(arr, fn) {
    // Init the empty array
    let newArray = []
    // Use the input array to construct the newArray to setup all the datas inside
    for(let i = 0; i < arr.length; i++){
        newArray.push(fn(arr[i], i))
    }
    // return the array already with all numbers inside
    return newArray
};