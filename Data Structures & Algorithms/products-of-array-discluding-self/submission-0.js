class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

    const prefix = [];
    const suffix = [];
    const result = [];
    prefix[0] = 1;
    suffix[nums.length - 1] = 1;

    for (let x =1; x < nums.length; x++) {
         prefix[x] = nums [x - 1] * prefix[x - 1];
    }

     for (let x = nums.length - 2; x  >= 0; x--) {
         suffix[x] = nums [x + 1] * suffix[x + 1];
    }

    for (let x = 0; x < nums.length; x++) {
        result[x] = prefix[x] * suffix[x];
    }

    return result;
    }
}
 