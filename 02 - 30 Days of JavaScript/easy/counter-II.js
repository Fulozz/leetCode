/**
 * file: "02 - 30 Days of JavaScript/counter-II"
 * description: Create an Counter that can increment, decrement and reset the values passed by the user
 * data: 18/03/2024
 * author: Thiago Silva Andrade
 */


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentValue = init
    // Return an * Object Literal *
    // Procedural switch instruction substitute
    // Use the Object Literals instead of the old switch
    return {
        increment:()=> currentValue += 1,
        decrement:()=> currentValue -= 1,
        reset:()=> currentValue = init
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

