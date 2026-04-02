class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const set = new Set();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const item = board[r][c];
                if (item !== "." && set.has(item)) {
                    return false; 
                }
                else {
                    set.add(item);
                }
            }
            set.clear();
        }

        for (let c = 0; c < 9; c++) {
            for (let r = 0; r < 9; r++) {
                const item = board[r][c];
                if (item !== "." && set.has(item)) {
                    return false; 
                }
                else {
                    set.add(item);
                }
            }
            set.clear();
        }

        for (let rowOffset = 0; rowOffset < 9; rowOffset+=3) {
            for (let cowOffset = 0; cowOffset < 9; cowOffset+=3) {
                for (let r = rowOffset; r < rowOffset + 3; r++) {
                    for (let c = cowOffset; c < cowOffset + 3; c++) {
                        const item = board[r][c];
                        if (item !== "." && set.has(item)) {
                            return false;
                        }
                        else {
                            set.add(item);
                        }
                    }
                }
                set.clear();
            }
        }


        return true;
    }
}
