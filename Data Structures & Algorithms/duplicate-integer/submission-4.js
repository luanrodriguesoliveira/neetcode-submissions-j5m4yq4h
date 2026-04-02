class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const memory = new Map();

        for (let i = 0; i < nums.length; i++) {
            const value = memory.get(nums[i]);
            if (value !== undefined) {
                return true; 
            }
            else {
                memory.set(nums[i], 1);
            }
        }

        return false; 
    }
}
