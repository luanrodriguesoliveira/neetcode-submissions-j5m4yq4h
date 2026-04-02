class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const memory = new Map();
        let majorAppereances = 0;
        let result = 0;

        for (let i = 0; i < nums.length; i++) {
            const number = memory.get(nums[i]);

            if (number) {
                memory.set(nums[i], number + 1);
            }
            else {
                memory.set(nums[i], 1);
            }
        }   

        for (const [key, value] of memory) {
            if (value > majorAppereances) {
                majorAppereances = value;
                result = key;
            }
        }

        return result; 
    }
}
