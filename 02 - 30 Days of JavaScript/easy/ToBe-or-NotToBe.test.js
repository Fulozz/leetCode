/**
 * file: "02 - 30 Days of JavaScript/helloWorld"
 * description:  Function that test the code are what the dev expect or not
 * data: 18/03/2024
 * author: Thiago Silva Andrade
 */


/**
 * @param {string} val
 * @return {Object}
 */


var expect = function(val) {
    function toBe(val2){
        // Verify if the values are the same
        if(val === val2){
            return true 
        }
        //  If its not the same return error
        throw new Error("Not Equal")
    }
        // Verify if the values arent the same
    function notToBe(val2){
        if(val != val2){
            return true
        }
        //  If isnt the same return error
        throw new Error("Equal")
    }
    return {
        toBe,
        notToBe
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */