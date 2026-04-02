class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const memory = new Map();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            const z = memory.get(complement);

            if (z !== undefined) {
                return [i, z];
            }

            memory.set(nums[i], i);
        }
    }
}
