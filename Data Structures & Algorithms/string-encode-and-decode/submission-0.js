
const KEY = "#";

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (const word of strs) {
            result +=  `${word.length}${KEY}${word}`;
        }

        return result; 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // "4#luan6#carlos"

        let i = 0;
        const result = [];

        while (i < str.length) {
            for (let j = i; j < str.length; j++) {
                if (str[j] === KEY) {
                    const number = str.substring(i, j);
                    const word = str.substring(j + 1, (j + 1) + Number(number));
                    result.push(word);
                    i = j + word.length + 1;
                    break; 
                }
            }

        }

        return result; 
    }
}
