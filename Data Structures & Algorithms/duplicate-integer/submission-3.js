class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const memory = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (memory.get(nums[i]) !== undefined) {
                return true;
            } 
            else {
                memory.set(nums[i], i);
            }
        }

        return false; 
    }
}
