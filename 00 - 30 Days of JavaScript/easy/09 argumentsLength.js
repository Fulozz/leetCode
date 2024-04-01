/**
 * file: "02 - 30 Days of JavaScript/argumentsLength"
 * description: return the number os args in the array
 * data: 18/03/2024
 * author: Thiago Silva Andrade
 */



/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    // Return the length
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */