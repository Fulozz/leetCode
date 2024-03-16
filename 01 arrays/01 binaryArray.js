/**
 * @param {number[]} nums
 * @return {number}
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
        // 
        if(nums[i] && mask === 1){
            currentCount++;
            number = Math.max(number, currentCount)
        } else {
            number = Math.max(number, currentCount);
            currentCount = 0
            mask = 0
        }
    }
    number = Math.max(number, currentCount);
    return number
}

// Driver program
const nums = [1,1,0,1,1,1]
const maxOnes = findMaxConsecutiveOnes(nums);


console.log("Maximum consecutive ones:", maxOnes);