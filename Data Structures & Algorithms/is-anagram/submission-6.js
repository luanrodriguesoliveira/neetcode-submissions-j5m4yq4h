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

            if (existingValue) {
                memory.set(char, existingValue + 1);
            }
            else {
                memory.set(char, 1);
            }
        }

        for (const char of t) {
            const existingValue = memory.get(char);

            if (existingValue !== undefined) {
                const newValue = existingValue - 1;

                if (newValue <= 0) {
                    memory.delete(char);
                }
                else {
                    memory.set(char, newValue);
                }
            }
            else {
                return false;
            }
        }

        return memory.size === 0;
    }
}
