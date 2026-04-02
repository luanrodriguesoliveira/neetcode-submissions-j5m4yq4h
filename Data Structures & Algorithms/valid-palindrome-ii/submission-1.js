class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        if (this.isPalindrome(s)) {
            return true;
        }

        for (let i = 0; i < s.length; i++) {
            const word = s.slice(0, i) + s.slice(i + 1);

            if (this.isPalindrome(word)) {
                return true;
            }
        }

        return false;     
    }

     /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let y = 0;

        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] !== s[y]) {
                return false;
            }
            y++;
        }

        return true; 
    }

}
 