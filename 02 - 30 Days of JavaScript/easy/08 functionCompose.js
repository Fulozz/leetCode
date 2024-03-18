/**
 * file: "02 - 30 Days of JavaScript/functionCompose"
 * description: Looping for execute the functions passed by array
 * data: 18/03/2024
 * author: Thiago Silva Andrade
 */


/**
* @param {Function[]} functions
* @return {Function}
*/
var compose = function(functions) {
   if(functions.length === 0){
       return function(x){
           return x
       }
   }
   return function(x){
    // handle the result of the past function
       let result = x
       // use the past result to do next function
       for( let i = functions.length - 1; i>=0; i--){
        // Update the result for the next function
           result = functions[i](result)
       }
       return result
   }
};

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/