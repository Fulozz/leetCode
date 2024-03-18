/**
 * file: "02 - 30 Days of JavaScript/oneFunctionCall"
 * description: 
 * data: 18/03/2024
 * author: Thiago Silva Andrade
 */



/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    // Define the boolean setup
    let hasBeenCalled = false;
    let result;

    return function(){
        if(!hasBeenCalled){
            hasBeenCalled = true
            result = fn.apply(this, arguments)
            return result
        }
        // Already called return undefined
        return undefined
    } 
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
