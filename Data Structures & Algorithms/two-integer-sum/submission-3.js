class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const memory = new Map();

        for (let i = 0; i < nums.length; i++) {
            memory.set(nums[i], i);
        }

        for (let i = 0; i < nums.length; i++) {
            const complement = memory.get(target - nums[i]);

            if (complement !== undefined && complement !== i) return [i, complement];
        }
    }
}
