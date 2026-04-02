class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let count = 0;
        let lastNumber = null;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== lastNumber) {
                nums[count] = nums[i];
                count++;
            }
            lastNumber = nums[i];
        }

        return count; 
    }
}
