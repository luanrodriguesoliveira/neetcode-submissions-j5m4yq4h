class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const memory = new Map();

       for (let i = 0; i < nums.length; i++) {
            const key = target - nums[i];
            const value = memory.get(key);

            if (value !== undefined) {
                return [value, i];
            }
            else {
                memory.set(nums[i], i);
            }
       }
    }
}
