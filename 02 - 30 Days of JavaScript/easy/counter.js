/**
 * file: "02 - 30 Days of JavaScript/counter"
 * description: Create an Counter
 * data: 18/03/2024
 * author: Thiago Silva Andrade
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    // Pre-set of the result
    let result = n
    return function() {
        // Sum the result and return the result
        return result++
    };
};
// Set name to createCounter
const counter = createCounter()

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */