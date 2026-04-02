class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const memory = new Map();

        for (const s of strs) {
            memory.set(s.split('').sort().join(''), []);
        }

    
        for (const s of strs) {
            const sortedS = s.split('').sort().join('');
            const existingAnagram = memory.get(sortedS);

            if (existingAnagram !== undefined) {
                existingAnagram.push(s);
            }
        }

        return Array.from(memory.values());
    }
}
