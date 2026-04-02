class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const memory = new Set();

        for (let n of nums) {
            const existingValue = memory.has(n);
            if (existingValue) return true;
            memory.add(n);
        }

        return false; 
    }
}
