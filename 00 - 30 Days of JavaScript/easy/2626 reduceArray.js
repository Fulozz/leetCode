/**
 * file: "02 - 30 Days of JavaScript/reduceArray"
 * description: 
 * data: 18/03/2024
 * author: Thiago Silva Andrade
 */


/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // initial values
    let val = init
    // For each object in the initial array return the value in array
    for(let i = 0; i  < nums.length; i++){
        // use passed by user to execute the func
        val = fn(val, nums[i])
    }
    return val
};

// 