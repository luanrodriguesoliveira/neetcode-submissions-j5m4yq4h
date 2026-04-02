/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSort(pairs) {
        this.quickSortHelper(pairs, 0, pairs.length - 1);
        return pairs;
    }

    quickSortHelper(arr, start, end) {
        if (start >= end) return arr;

        const pivot = this.partition(arr, start, end);

        this.quickSortHelper(arr, start, pivot - 1);
        this.quickSortHelper(arr, pivot + 1, end);
    }

    partition(arr, start, end) {
        const pivot = arr[end];

        let i = start - 1;
        let j = start;

        while (j < end) {
            if (arr[j].key < pivot.key) {
                i++;
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }

        const temp = arr[i + 1];
        arr[i + 1] = arr[end];
        arr[end] = temp;

        return i + 1;
    }
}
