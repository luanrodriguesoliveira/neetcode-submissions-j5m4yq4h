class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (const row of matrix) {
            if(row[row.length - 1] >= target && row[0] <=target) {
                if(this.binarySearch(row, target) !== -1) return true;
            }
        }

        return false; 
    }

    binarySearch(array, target) {
        let l = 0;
        let r = array.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r)/2);

            if (array[mid] < target) {
                l = mid + 1;
            }
            else if (array[mid] > target) {
                r = mid - 1;
            }
            else {
                return mid;
            }
        }

        return - 1;
    }
}
