class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = new Map([["[", "]"], ["{", "}"], ["(", ")"]]);

        for (let i = s.length - 1; i >= 0; i--) {
            const peek = stack[0];

            if (peek && map.get(s[i]) === peek) {
                stack.shift();
            }
            else {
                stack.unshift(s[i]);
            }

        }

        return stack.length === 0;
    }
}
