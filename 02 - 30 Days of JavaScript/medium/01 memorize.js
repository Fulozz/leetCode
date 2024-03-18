/**
 * file: "02 - 30 Days of JavaScript/memorize"
 * description: Data structure and store datas in cache
 * data: 18/03/2024
 * author: Thiago Silva Andrade
 */



/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // Map data structure
    let cache = new Map();
    return function(...args) {
        // Converts the list of arguments into a string
        const key = args.toString();
        // Checks if the cache already has a value stored for the computed key
        if(cache.has(key)){
            return cache.get(key)
        }
        // The result is stored in the cache using the key, and the result is returned
        const result = fn(...args);
        cache.set(key, result)
        return result
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */