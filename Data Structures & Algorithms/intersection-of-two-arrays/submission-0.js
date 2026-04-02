class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const memory = new Map();
        const result = [];

        for (const value of nums1) {
            const existingValue = memory.get(value);
            if(!existingValue) memory.set(value);
        }

        nums2.sort((a, b) => a - b);

        for (const key of memory.keys()) {
            if (this.binarySearch(nums2, key)) {
                result.push(key);
            }
        }

        return result;
    }

    /**
     * @param {number[]} arr
     * @param {number} val
    * @return {boolean}
     */
    binarySearch(arr, val) {
        const left = 0;
        const right = arr.length - 1;

        const binaryLoop = (arr, val, left, right) => {
            const mid = Math.floor((left + right) / 2); 

            if (left > right) {
                return false;
            }

            if (val < arr[mid]) {
                return binaryLoop(arr, val, left, mid - 1);
            }

            if (val > arr[mid]) {
                return binaryLoop(arr, val, mid + 1, right);
            }

            if (val === arr[mid]) {
                return true;
            }
        }

        return binaryLoop(arr, val, left,right);
    }
}
