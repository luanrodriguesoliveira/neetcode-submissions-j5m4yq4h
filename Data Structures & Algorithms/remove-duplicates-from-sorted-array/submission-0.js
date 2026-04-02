class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let lastUniquePosition = 0;
        for (let i = 1; i <= nums.length; i++) {
            if (nums[i] === nums[lastUniquePosition]) {
                continue;
            }
            lastUniquePosition++;
            nums[lastUniquePosition] = nums[i];    
        }

        return lastUniquePosition; 
    }
}
