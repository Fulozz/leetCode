/**
 * file: "arrays/03 squareSorted"
 * description: file responsible make numbers square, negative proteted
 * data: 16/03/2024
 * author: Thiago Silva Andrade
 * complexity: O(n*log(N))
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Driver program
const nums = [-4,-1,0,3,10]
const square = sortedSquares(nums)
console.log("The square of the input are", square)
// Expected [0,1,9,16,100]

var sortedSquares = function(nums) {
    const totalNums = nums.length;
    const res = new Array(n);
      for(let i = 0, j = totalNums - 1, k = totalNums - 1; i <= j;){
        // If square nums was less that N - 1 square,  
        // its a negative number, make it positive and do it again
        if(nums[i] * nums[i] > nums[j] * nums[j]){
            res[k--] = nums[i] * nums[i]
            ++i;
        } else {
            res[k--] = nums[j] * nums[j];
            --j;
        }
    }
    return res;
};
