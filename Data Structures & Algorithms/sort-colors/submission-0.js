class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const counts = [0, 0, 0];

        for (let i = 0; i < nums.length; i++) {
            counts[nums[i]]++;
        }

        let x = 0;
        for (let i = 0; i < counts.length; i++) {
            let z = counts[i];

            while (z > 0) {
                nums[x] = i; 
                z--;
                x++;
            }
        }

        return nums;
    }
}
