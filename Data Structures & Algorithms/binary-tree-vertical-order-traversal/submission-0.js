/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    verticalOrder(root) {
        if (!root) return [];

        const queue = [[root, 0]];
        const hashMap = new Map();
        let minCol = 0;
        let maxCol = 0;

        while (queue.length > 0) {
            const [node, col] = queue.shift();
            const currentValue = hashMap.get(col);

            if (currentValue) {
                currentValue.push(node.val)
            }
            else {
                hashMap.set(col, [node.val]);
            }

            if (col < minCol) minCol = col;
            else if (col > maxCol) maxCol = col;

            if (node.left) queue.push([node.left, col - 1]);
            if (node.right) queue.push([node.right, col + 1]);
        }

        const result = [];

        for (let index = minCol; index <= maxCol; index++) {
            result.push(hashMap.get(index));
        }

        return result; 
    }
}
