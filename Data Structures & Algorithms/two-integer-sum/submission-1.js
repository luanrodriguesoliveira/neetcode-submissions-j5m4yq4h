class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let j = 0;

        while (j < nums.length) {
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] + nums[j] === target && i !== j) return [i, j];
            }
            j++;
        }
        
    }
}
