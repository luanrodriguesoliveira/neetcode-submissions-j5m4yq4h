class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       const memory = new Map();

       for (const char of s) {
            const existingValue = memory.get(char);

            if (existingValue === undefined) {
                memory.set(char, 1);
            }
            else {
                memory.set(char, existingValue + 1);
            }
       }

       for (const char of t) {
            const existingValue = memory.get(char);

            if (existingValue === undefined) {
                return false;
            }

            memory.set(char, existingValue - 1);
            
            if (existingValue - 1 === 0) {
                memory.delete(char);
            }
            
       }

       return memory.size === 0;
    }
}
