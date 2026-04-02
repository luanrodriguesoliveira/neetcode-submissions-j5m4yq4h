class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result = "";

        const size = word1.length > word2.length ? word1.length : word2.length;

        for (let i = 0; i < size; i++) {
            if (word1[i]) {
                result+= word1[i];
            }
            if (word2[i]) {
                result+=word2[i];
            }
        }

        return result; 
    }
}
