/**
 * file: "02 - 30 Days of JavaScript/helloWorld"
 * description:  Function that always return Hello World
 * data: 18/03/2024
 * author: Thiago Silva Andrade
 */

/**
 * @return {Function}
 */

var createHelloWorld = () => {
    return (...args) => "Hello World"
};

createHelloWorld();
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */