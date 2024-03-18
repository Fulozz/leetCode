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
    // Default value
    let currentValue = init
    //ADD 1
    const increment = () =>{
        return currentValue += 1
    }
    // REDUCE 1
    const decrement = () =>{
        return currentValue -= 1
    }
    // RETURN to default value
    const reset = () =>{
        return currentValue = init
    }
    
    return {
        increment,
        reset,
        decrement
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */