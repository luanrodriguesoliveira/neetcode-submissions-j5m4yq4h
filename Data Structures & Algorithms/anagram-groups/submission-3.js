class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map();

        for (const s of strs) {
            const word = s.split("").sort().join("");
            hashMap.set(word, []);
        }

        for (const s of strs) {
            const word = s.split("").sort().join("");

            const existingWord = hashMap.get(word);

            if (word !== undefined) {
                existingWord.push(s);
            }
        }

        return Array.from(hashMap.values());
    }
}
