class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const memory = new Map();

        for (let i = 0; i < nums.length; i++) {
            const rest = memory.get(target - nums[i]);

            if (rest !== undefined) {
                return [rest, i];
            }

            memory.set(nums[i], i);
        }
    }
}
