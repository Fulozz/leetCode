/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * file: "arrays/01 binaryArray"
 * description: file responsible for identifying how many Ones in a row the binary array has
 * data: 16/03/2024
 * author: Thiago Silva Andrade
 * complexity: O(n)
 */

const findMaxConsecutiveOnes = function(nums){
    let number  = 0;
    let currentCount = 0;
    let mask = 0
    
    for(let i = 0; i < nums.length; i++ ){
        // Validate the mask to continue
        if(nums[i] === 0){
            mask = 0;
        } else {
            mask =  1;
        }
        // If both are 1 sum with the others
        if(nums[i] && mask === 1){
            currentCount++;
            number = Math.max(number, currentCount)
        }
        // If not reset the count 
        else {
            number = Math.max(number, currentCount);
            currentCount = 0
            mask = 0
        }
    }
    // Sum the total values to return the Consecutive count
    number = Math.max(number, currentCount);
    return number
}

// Driver program
const nums = [1,1,0,1,1,1]
const maxOnes = findMaxConsecutiveOnes(nums);


console.log("Maximum consecutive ones:", maxOnes);