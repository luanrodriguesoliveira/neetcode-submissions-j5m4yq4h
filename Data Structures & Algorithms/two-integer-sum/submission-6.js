class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const memory = new Map();

        for (let i = 0; i < nums.length; i++) {
            const complement = memory.get(target - nums[i]);

            if (complement !== undefined) return [i, complement];
            memory.set(nums[i], i);
        }
    }
}
