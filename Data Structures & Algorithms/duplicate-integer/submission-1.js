class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const memory = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (memory.get(nums[i])) {
                return true;
            }
            memory.set(nums[i], "something");
        }

        return false;
    }
}
