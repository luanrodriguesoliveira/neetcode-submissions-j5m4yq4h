class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       const memory = new Map();

       for (const c of s) {
            const existingValue = memory.get(c);

            if (existingValue) {
                memory.set(c, existingValue + 1);
            } 
            else {
                memory.set(c, 1);
            }
       }

       for (const c of t) {
            const existingValue = memory.get(c);

            if (existingValue === undefined) {
                return false;
            }

            if (existingValue >= 1) {
                memory.set(c, existingValue - 1);
            }

            if (existingValue - 1 === 0) {
                memory.delete(c);
            }
    
       }

       return memory.size === 0;
    }
}
