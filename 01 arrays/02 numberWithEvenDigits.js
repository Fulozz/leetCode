/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * file: "arrays/02 numberWithEvenDigits"
 * description: file responsible for identifying what numbers are even numbers
 * data: 16/03/2024
 * author: Thiago Silva Andrade
 * complexity: O(n*logD)
 */
const nums = [12,345,2,6,7896]

var findNumbers = function(nums) {
    // const cannot be used, needed to be an variable to ADD in the looping
    let count = 0
    for(let i = 0; i < nums.length; i++){
        // digits
        let d  = 0;
        // While the number be differente than 0
        while( nums[i] != 0){
            nums[i] = nums[i]/10;
            d++;
        } 
        // If the looping end, and be divisible by 2 and at finish the waste is 0 ADD count
        if(d % 2 == 0){
                count++;
        }        
    }
    return count;
};