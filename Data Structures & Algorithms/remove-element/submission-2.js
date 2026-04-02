class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0;
        
        for (let x = 0; x < nums.length; x++) {
            if (nums[x] !== val) {
                nums[i] = nums[x];
                i++; 
            }
        }

        return i; 
    }
}
