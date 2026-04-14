class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const memory = new Set();

        for (const n of nums) {
            if (memory.has(n)) {
                return true;
            }
            memory.add(n);
        }

        return false;
    }
}
