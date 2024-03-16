/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * file: "arrays/02 numberWithEvenDigits"
 * description: file responsible for identifying what numbers are even numbers
 * data: 16/03/2024
 * author: Thiago Silva Andrade
 * complexity: O(n*logV) v = biggest number on the array
 */
const nums = [12,345,2,6,7896]

var findNumbers = function(nums) {
    // const não pode ser utilizado por não ter possivel realizar alterações, precisa ser um let
    let count = 0;
    // For each value(v) of numbs, turn in string, if the length is divided and at the end finished in 0 sum in the count
    for(const v of nums){
        // Turn the values in string to measure the length
           count += String(v).length % 2 ==0
    }
    return count;
};

// Expected result is 3 even numbers(2,6,12,7896)