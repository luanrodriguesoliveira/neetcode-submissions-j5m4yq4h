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
    mergeSort(pairs) {
       return this.divideArray(pairs, 0, pairs.length - 1); 
    }

    divideArray(arr, start, end) {
        if (end - start + 1 <= 1) return arr;

        const middle = Math.floor((start + end) / 2);
        
        this.divideArray(arr, start, middle);
        this.divideArray(arr, middle + 1, end);
        this.merge(arr, start, middle, end);

        return arr;
    }

    merge(arr, s, m, e) {
        const l1 = m - s + 1;
        const l2 = e - m;

        const l = new Array(l1);
        const r = new Array(l2);

        for (let i = 0; i < l1; i++) {
            l[i] = arr[s + i];
        }
    
        for (let j = 0; j < l2; j++) {
            r[j] = arr[m + 1 + j];
        }

        let i = 0;
        let j = 0;
        let k = s;

        while (i < l1 && j < l2) {
            if (l[i].key <= r[j].key) {
                arr[k] = l[i];
                i++;
            } 
            else {
                arr[k] = r[j];
                j++;
            }
            k++;
        }

        while (i < l1) {
            arr[k] = l[i];
            i++;
            k++;
        }

        while (j < l2) {
            arr[k] = r[j];
            j++;
            k++;
        }
    }
}
