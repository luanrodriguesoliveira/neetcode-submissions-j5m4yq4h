class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let z = s.length - 1;
        let y = 0;

        while (z > 0 && y < s.length - 1) {
            if(!this.isAlphanumeric(s[y])) {
               y++;
               continue;
            }
            if(!this.isAlphanumeric(s[z])) {
               z--;
               continue;
            }

            if (s[y].toLowerCase() !== s[z].toLowerCase()) {
                return false; 
            }

            z--;
            y++;
        }

        return true; 
    }

    /**
     * Check if a character is alphanumeric
     * @param {char} char
     * @return {boolean}
     */
    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
}
