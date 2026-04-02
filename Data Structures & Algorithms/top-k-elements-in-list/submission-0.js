class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = Array.from({ length: nums.length + 1 }, () => []);
        const memory = new Map();
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            const value = memory.get(nums[i]);
            
            if (value !== undefined) {
                memory.set(nums[i], value + 1);
            }
            else {
                memory.set(nums[i], 1);
            }
        }

        for (let [key, value] of memory) {
            counts[value].push(key);
        }

        for (let i = counts.length - 1; i >= 0; i--) {
            result.push(...counts[i]);
        }

        return result.slice(0, k);
    }
}
